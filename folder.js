////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
console.log( 'foldering ......' );
////////////////////////////////////////////////////////////////
const folder = document.querySelector( ".folder" );
const check = folder.querySelector( ".check" );
const _this = folder.querySelector( ".this"  );
const out   = folder.querySelector( ".out"   );
const check_base = folder.querySelector( ".check-base" );
const _this_base = folder.querySelector( ".this-base"  );
const out_base   = folder.querySelector( ".out-base"   );
const brand = folder.querySelector( ".folder-brand" );
let zindex = 3;
function _addEventListener( link, base ){
    link.addEventListener( "click", e => {
        link.style.zIndex = zindex;
        base.style.zIndex = zindex;
        brand.style.zIndex = ++zindex;
    });
}
_addEventListener( check, check_base );
_addEventListener( _this, _this_base );
_addEventListener( out, out_base );
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
