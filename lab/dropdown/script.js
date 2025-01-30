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
