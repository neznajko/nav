////////////////////////////////////////////////////////////////
console.log( "dubing .." );
////////////////////////////////////////////////////////////////
function updateViewBox() {
    const svg = document.getElementById( "dub-brand" );
    if( window.innerWidth < 600) {
        svg.setAttribute( "viewBox", "0 0 300 260" );
    } else {
        svg.setAttribute( "viewBox", "0 0 400 200" );
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

