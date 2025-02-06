////////////////////////////////////////////////////////////////
console.log( " a l t " );
////////////////////////////////////////////////////////////////
const indicators = queryall( ".alt-indicator:not(.aura)" );
const auras = queryall( ".alt-indicator.aura" );
const altlinks = queryall( ".alt-indicator-con + a" );
const laser = query( ".alt-laser" );
////////////////////////////////////////////////////////////////
const n = altlinks.length;
////////////////////////////////////////////////////////////////
const BACKWARD = false;
const FORWARD = true;
////////////////////////////////////////////////////////////////
const animation_direction = new Array( n ).fill( FORWARD );
////////////////////////////////////////////////////////////////
const aura_opacity = getProp( ROOT, "--aura-opacity" );
////////////////////////////////////////////////////////////////
function addClass( domElement, className ){
    domElement.classList.add( className );
}
////////////////////////////////////////////////////////////////
function removeClass( domElement, className ){
    domElement.classList.remove( className );
}
////////////////////////////////////////////////////////////////
let altcounter = 0;
function altinc() {
    ++altcounter;
    if( altcounter == 3 ){
        addClass( laser, "altscan" );
    }
}
function altdec() {
    --altcounter;
    if( altcounter == 0 ){
        removeClass( laser, "altscan" );
    }
}
laser.addEventListener( "animationend", e => {
    laser.style.left = "100%";
});
////////////////////////////////////////////////////////////////
for( let j = 0; j < n; ++j ){
    const link = altlinks[ j ];
    const indicator = indicators[ j ];
    const aura = auras[ j ];
    // add click event listeners to altlinks
    link.addEventListener( "click", e => {
        if( animation_direction[ j ] == FORWARD ){
            removeClass( indicator, "backward_indicator_animation" );
            addClass(    indicator,  "forward_indicator_animation" );
            removeClass( aura, "backward_aura_animation" );
            addClass(    aura,  "forward_aura_animation" );
            altinc();
        } else {
            removeClass( indicator,  "forward_indicator_animation" );
            addClass(    indicator, "backward_indicator_animation" );
            removeClass( aura,  "forward_aura_animation" );
            addClass(    aura, "backward_aura_animation" );
            altdec();
        }        
    });
    // add animationend event listeners to indicators
    indicator.addEventListener( "animationend", e => {
        if( animation_direction[ j ] == FORWARD ){
            indicator.style.background = "red";
            aura.style.opacity = aura_opacity;
        } else {
            indicator.style.background = "hsl(12,90%,8%)";
            aura.style.opacity = "0";
        }
        animation_direction[ j ] = !animation_direction[ j ];
    });
}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
