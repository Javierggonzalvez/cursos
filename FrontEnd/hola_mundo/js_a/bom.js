'use strict'

// BOM - Borwser Object Model

//ver propiedades de la ventana
/*
console.log(window.innerwidth);
console.log(window.innerHeight);
*/
//desde funcion

function getBom() {
    console.log(window.innerwidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);

    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "","width=400,height300");
}

getBom();