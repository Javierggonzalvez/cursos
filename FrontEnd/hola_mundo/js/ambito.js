'use strict'


function holaMundo(texto) {
    var hola_mundo = "texto dentro de function, soy local";

    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola Mundo soy global";

holaMundo(texto);

// es local de la funcona, dara error
// console.log(hola_mundo);