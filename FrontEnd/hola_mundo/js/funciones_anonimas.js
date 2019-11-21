'use strict'

//funciones anonimas
// es una funciona sin nombre

/*
var pelicula = function (nombre) {
    return "La película es : " + nombre;
}
*/

//callback

function sumame(num1, num2, sumaYmuestra, sumaPorDos) {
    var sumar = num1 + num2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(4, 5, function (dato) {
    console.log("La suma es :" + dato);
},
    function (dato) {
        console.log("La suma por dos es :" + (dato * 2));
    });