'use strict'

/* 
pida 2 num y que diga cual es el mayo, el menor y si son iguales,
si no són números o menors a 0 que los vuelva a pedir.
*/

var num1 = parseInt(prompt("introduce el primer numero", 0));
var num2 = parseInt(prompt("introduce el segundo numero", 0));

console.log(num1, num2);

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("introduce el primer numero", 0));
    num2 = parseInt(prompt("introduce el segundo numero", 0));
}

if (num1 == num2) {
    alert("los numeros son iguales");

} else if (num1 > num2) {
    alert("el número 1 es mayor " + num1);
} else if (num1 < num2) {
    alert("el número 2 es mayor " + num2);
} else {
    alert("introduce números correctos");
}