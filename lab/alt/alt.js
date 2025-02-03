////////////////////////////////////////////////////////////////
console.log( " a l t " );
////////////////////////////////////////////////////////////////
const indicators = queryall( ".alt-indicator" );
const links = queryall( ".alt-indicator + a" );
////////////////////////////////////////////////////////////////
const n = links.length;
////////////////////////////////////////////////////////////////
const BACKWARD = false;
const FORWARD = true;
////////////////////////////////////////////////////////////////
const animation_direction = new Array( n ).fill( FORWARD );
////////////////////////////////////////////////////////////////
function addClass( domElement, className ){
    domElement.classList.add( className );
}
////////////////////////////////////////////////////////////////
function removeClass( domElement, className ){
    domElement.classList.remove( className );
}
////////////////////////////////////////////////////////////////
for( let j = 0; j < n; ++j ){
    const link = links[ j ];
    const indicator = indicators[ j ];
    // add click event listeners to links
    link.addEventListener( "click", e => {
        if( animation_direction[ j ] == FORWARD ){
            removeClass( indicator, "backward_indicator_animation" );
            addClass(    indicator,  "forward_indicator_animation" );
        } else {
            removeClass( indicator,  "forward_indicator_animation" );
            addClass(    indicator, "backward_indicator_animation" );
        }        
    });
    // add animationend event listeners to indicators
    indicator.addEventListener( "animationend", e => {
        if( animation_direction[ j ] == FORWARD ){
            indicator.style.opacity = "1";
        } else {
            indicator.style.opacity = "0";
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
