'use strict'

/*
calculadora:

1.pida 2 numeros por pantalla
2.los compruebe
3.muestre en una alerta y por la consola el resultado de sum rest mult y div
*/


var num_a = parseInt(prompt("Introduzca un primer número: "));
var num_b = parseInt(prompt("Introduzca un segundo número: "));


while (isNaN(num_a) || isNaN(num_b)) {
    num_a = parseInt(prompt("Introduzca un primer número: "));
    num_b = parseInt(prompt("Introduzca un segundo número: "));
}


/*
console.log("suma :" + num_a + " + " + num_b + " = " + (num_a + num_b));
console.log("resta :" + num_a + " - " + num_b + " = " + (num_a - num_b));
console.log("multiplicación :" + num_a + " X " + num_b + " = " + (num_a * num_b));
console.log("división :" + num_a + " / " + num_b + " = " + (num_a / num_b));
document.write("suma :" + num_a + " + " + num_b + " = " + (num_a + num_b) + "<br/>");
document.write("resta :" + num_a + " - " + num_b + " = " + (num_a - num_b) + "<br/>");
document.write("multiplicacion :" + num_a + " * " + num_b + " = " + (num_a * num_b) + "<br/>");
document.write("division :" + num_a + " / " + num_b + " = " + (num_a / num_b) + "<br/>");
*/

var resultado = "suma :" + num_a + " + " + num_b + " = " + (num_a + num_b) + "<br/>" +
    "resta :" + num_a + " - " + num_b + " = " + (num_a - num_b) + "<br/>" +
    "multiplicación :" + num_a + " X " + num_b + " = " + (num_a * num_b) + "<br/>" +
    "division :" + num_a + " / " + num_b + " = " + (num_a / num_b) + "<br/>";

var resultado_cmd = "suma :" + num_a + " + " + num_b + " = " + (num_a + num_b) + "\n" +
    "resta :" + num_a + " - " + num_b + " = " + (num_a - num_b) + "\n" +
    "multiplicación :" + num_a + " X " + num_b + " = " + (num_a * num_b) + "\n" +
    "division :" + num_a + " / " + num_b + " = " + (num_a / num_b) + "\n";

document.write(resultado);
alert(resultado_cmd);
console.log(resultado_cmd);
