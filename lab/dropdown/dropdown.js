////////////////////////////////////////////////////////////////
console.log( "dropdown .." );
////////////////////////////////////////////////////////////////
const link = document.querySelector( ".dropdown-link" );
const icon = document.querySelector( ".dropdown-anime i" );
////////////////////////////////////////////////////////////////
let hasDropped = false;
////////////////////////////////////////////////////////////////
link.addEventListener( "click", e => {
    if( hasDropped ){
        icon.classList.remove( "clockwise" );
        icon.classList.add( "anticlockwise" );
    } else {
        icon.classList.add( "clockwise" );
        icon.classList.remove( "anticlockwise" );
    }
});
////////////////////////////////////////////////////////////////
icon.addEventListener( "animationend", e => {
    if( hasDropped ){
        icon.style.transform = "rotate( 0deg )";
    } else {
        icon.style.transform = "rotate( 90deg )";
    }
    hasDropped = !hasDropped;
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// 1.4.17. A rain is falling, vertically. The speed of raindrops
// is u. On the [asphalt] with velocity v, is rolling a football
// ball. How many times for a given [ period ] of time number of
// raindrops </fallen> on the ball will increase with respect of
// non moving ball. Is </the> answer change [if] the ball is not
// spherical? 
////////////////////////////////////////////////////////////////
// I'm very proud with my translation, of course I have to thank
// Google Translate!
////////////////////////////////////////////////////////////////
// Ok so if we have a surface ℥ for period of time ∆t the 
// raindrops with velocity u will take a volume u∆t℥, so the
// number of raindrops per unit time ∆N|∆t will be proportional
// to u℥, in system moving with the ball the speed of the
// raindrops is √(v² + u²), and cos the ball is symmetrical the
// surface is the same, so the ratio will be √(v² + u²)|u =
// = √(1 + v²|u²). If the ball is not symmetrical than the drops
// falling at different angles will see different surfaces, so
// the answer will be different
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
