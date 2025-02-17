////////////////////////////////////////////////////////////////
console.log( "dubing .." );
////////////////////////////////////////////////////////////////
function updateViewBox() {
    const svg = document.getElementById( "dub-brand" );
    if( window.innerWidth < 600) {
        svg.setAttribute( "viewBox", "0 0 300 260" );
    } else {
        svg.setAttribute( "viewBox", "0 0 400 300" );
    }
}
////////////////////////////////////////////////////////////////
window.addEventListener( "resize", updateViewBox );
updateViewBox();
////////////////////////////////////////////////////////////////
class Dom {
    constructor( selector ){
        this.elem = document.querySelector( selector );
    }
}
////////////////////////////////////////////////////////////////
class Light extends Dom {
    constructor( selector ){
        super( selector );
    }
    hide() {
        this.elem.setAttribute( "visibility", "hidden" );
    }
    show() {
        this.elem.setAttribute( "visibility", "visible" );
    }
}
////////////////////////////////////////////////////////////////
class Link extends Dom {
    constructor( name ){
        super( ".dub-" + name );
        this.light = new Light( "#" + name + "-light" );
        this.light.hide();
        this.toggle = false;
    }
    subscribe() {
        this.elem.addEventListener( "click", e => {
            if( this.toggle ){
                this.light.hide();
            } else {
                this.light.show();
            }
            this.toggle = !this.toggle;
        });
        this.elem.addEventListener( "mouseenter", e => {
        });
        this.elem.addEventListener( "mouseleave", e => {
        });
    }
}
////////////////////////////////////////////////////////////////
new Link( "deck" ).subscribe();
new Link( "config" ).subscribe();
new Link( "app" ).subscribe();
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
const dubMenu = queryall( ".dub-menu" );
const dubMenuList = queryall( ".dub-menu .dub-menu-list" );
const nfm = dubMenu.length;
const clickSwitch = new Array( nfm ).fill( false );
for( let j = 0; j < nfm; ++j ){
    dubMenu[j].addEventListener( "click", e => {
        if( clickSwitch[j] ){
            dubMenuList[j].style.display = "none";
        } else {
            for( let i = 0; i < nfm; ++i ){
                dubMenuList[i].style.display = i == j ? "flex" : "none";
            }
        }      
        clickSwitch[j] = !clickSwitch[j];
    });    
}
////////////////////////////////////////////////////////////////
// A: バドミントンをしませんか。
// B: いいですね。
// A: 月曜日はどうですか。
// B: 月曜日は図書館で勉強します。火曜日は？
////////////////////////////////////////////////////////////////
// A: 
// B: 
////////////////////////////////////////////////////////////////
// A: 
// B: 
////////////////////////////////////////////////////////////////
