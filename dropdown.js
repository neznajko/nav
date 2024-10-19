////////////////////////////////////////////////////////////////
console.log( "dropdown .." );
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const anime = document.querySelector( '.dropdown_anime' );
const link = document.querySelector( '.dropdown_link' );
const icon = anime.querySelector( 'i' );
const menu = document.querySelector( '.dropdown_menu' );
const plus = document.querySelector( '.dropdown_plus' );
const boom = menu.querySelector( 'span' );
const spam = plus.querySelector( 'span' );
////////////////////////////////////////////////////////////////
// replace here key with state
let key = false;
////////////////////////////////////////////////////////////////
// assing this to .dropdown_anime
link.addEventListener( 'click', e => {
    if( key ){
        icon.classList.add( 'ccw' );
        icon.classList.remove( 'cw' ); 
        menu.classList.add( 'close-menu' );
        menu.classList.remove( 'open-menu' );
        plus.classList.add( 'close-menu' );
        plus.classList.remove( 'open-menu' );
    } else {
        icon.classList.add( 'cw' );
        icon.classList.remove( 'ccw' ); 
        menu.classList.add( 'open-menu' );
        menu.classList.remove( 'close-menu' );
        plus.classList.add( 'open-menu' );
        plus.classList.remove( 'close-menu' );
    }
});
////////////////////////////////////////////////////////////////
icon.addEventListener( 'animationend', e => {
    if( key ){
        icon.style.transform = "rotate( 0deg )";
        menu.style.height = 0;
        plus.style.height = 0;
    } else {
        icon.style.transform = "rotate( 90deg )";
        menu.style.height = "50px";
        plus.style.height = "50px";
        boom.style.display = "block";
        spam.style.display = "block";
    }
    key = !key;
});
icon.addEventListener( 'animationstart', e => {
    boom.style.display = "none";
    spam.style.display = "none";
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
