'use strict'

//funciones

/*
function calculadora(numa, numb) {
    console.log("Suma: " + (numa + numb));
    console.log("Resta: " + (numa - numb));
    console.log("******************");
    return "Hola mono";
}

calculadora(10, 20);
var resultado = calculadora(12, 50);

console.log(resultado);
*/

//parametros opcionales
function calculadora(numa, numb, mostrar = false) {
    console.log("Suma: " + (numa + numb));
    console.log("Resta: " + (numa - numb));
    console.log(mostrar);
    console.log("******************");
    return "Hola mono";
}
calculadora(4, 6);

calculadora(5, 8, true);