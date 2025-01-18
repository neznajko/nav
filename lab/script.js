////////////////////////////////////////////////////////////////
console.log( "scrip4ing" );
////////////////////////////////////////////////////////////////
const ROOT = document.documentElement;
////////////////////////////////////////////////////////////////
function query( name ){
    return document.querySelector( name );
}
////////////////////////////////////////////////////////////////
function getProp( domObject, propName ){
    return( window.getComputedStyle( domObject )
                  .getPropertyValue( propName )
                  .trim());
}
////////////////////////////////////////////////////////////////
function setProp( propName, value ){
    ROOT.style.setProperty( propName, value );
}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const LASER_ENDPOINTS = [ getProp( ROOT, "--alt-laser-from" ),
                          getProp( ROOT, "--alt-laser-to"   )];
const DURATION = parseInt( getProp( ROOT, "--alt-duration" ));
const POINT_BACKGROUND = [ getProp( ROOT, "--alt-body-bgr" ),
                           "red" ];
////////////////////////////////////////////////////////////////
const altlink = query( ".alt-link" );
const altlaser = query( ".alt-laser" );
const altpoint = query( ".alt-point" );
////////////////////////////////////////////////////////////////
const altScanClass = "alt-scan";
let scan_duration = DURATION;
////////////////////////////////////////////////////////////////
altlink.addEventListener( "mouseover", e => {
    // there is some strange jumping without thus line
    getProp( altlaser, "left" );
    altlaser.classList.add( altScanClass );
});
////////////////////////////////////////////////////////////////
altlink.addEventListener( "mouseout", e => {
    const left = getProp( altlaser, "left" );
    setProp( "--alt-laser-from", left );
    altlaser.style.left = left;
    scan_duration *= 0.7;
    setProp( "--alt-duration", scan_duration + "s" );
    altlaser.classList.remove( altScanClass );
});
////////////////////////////////////////////////////////////////
let the_switch = 1;
let laser_endpoint = LASER_ENDPOINTS[ the_switch ];
let point_background = POINT_BACKGROUND[ the_switch ];
function flipflop() {
    the_switch = 1 - the_switch;
    laser_endpoint = LASER_ENDPOINTS[ the_switch ];
    point_background = POINT_BACKGROUND[ the_switch ];
}
////////////////////////////////////////////////////////////////
altlaser.addEventListener( "animationend", e => {
    altlaser.style.left = laser_endpoint;
    altpoint.style.background = point_background;
    setProp( "--alt-laser-from", laser_endpoint );
    flipflop();
    setProp( "--alt-laser-to", laser_endpoint );
    setProp( "--alt-duration", DURATION );
    scan_duration = DURATION;
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

