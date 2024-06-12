////////////////////////////////////////////////////////////////
console.log( "dropdown.." );
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const anime = document.querySelector( '.dropdown_anime' );
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
anime.addEventListener( 'click', e => {
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

