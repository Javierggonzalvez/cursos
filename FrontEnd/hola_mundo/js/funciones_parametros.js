'use strict'

//parametros REST

/*
function listadoFruta(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas);
}

// listadoFruta("Naranja", "Manzana");

listadoFruta("Naranja", "Manzana", "Pera", "Piña");
*/

//parametros SPREAD

function listadoFruta(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(resto_de_frutas);
}

var frutas = ["Naranja", "Manzana"];

listadoFruta(...frutas, "Naranja", "Manzana", "Pera", "Piña");