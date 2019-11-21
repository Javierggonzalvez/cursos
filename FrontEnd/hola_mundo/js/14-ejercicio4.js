'use strict'

/*
mostrar todos los número impares entre dos números dados por usuario
*/

var num1 = parseInt(prompt("introduce el primer número ", 0));
var num2 = parseInt(prompt("introduce el segundo número ", 0));

document.write("<h1>De " + num1 + " a " + num2 + " están estos números impares:</h1>")
for (var i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
        document.write(i + "<br/>");
    }

}