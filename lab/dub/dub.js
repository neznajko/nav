////////////////////////////////////////////////////////////////
console.log( "dubing .." );
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
        this.subscribe();
    }
    subscribe() {
        this.elem.addEventListener( "mouseenter", e => {
            this.light.show();
        });
        this.elem.addEventListener( "mouseleave", e => {
            this.light.hide();
        });
    }
}
////////////////////////////////////////////////////////////////
const deckLink = new Link( "deck" );
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

