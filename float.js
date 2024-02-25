//////////////////////////////////////////////////
console.log( "floa4ing .." );
//////////////////////////////////////////////////
var root = getComputedStyle
( document.documentElement );
var floatLinkBgr = root.
    getPropertyValue( '--float-link-bgr' );
var floatLinkBgr2 = root.
    getPropertyValue( '--float-link-bgr-2' );
//////////////////////////////////////////////////
const links = document
      .querySelector( '.float' )
      .querySelector( 'ul' )
      .querySelectorAll( 'li' );
//////////////////////////////////////////////////
for( let j = 1; j < links.length; ++j ){
    const el = links[ j ];
    el.addEventListener( "mousedown", e => {
        e.target.style.backgroundColor =
            floatLinkBgr2;
    });
    el.addEventListener( "mouseup", e => {
        e.target.style.backgroundColor =
            floatLinkBgr;
    });
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
