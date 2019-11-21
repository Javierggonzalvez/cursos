'use strict'

/* mediante bucle, mostrar la suma la media de los num introducidos hasta introducir un num negativo
*/

var suma = 0;
var contador = 0;

do {
    var num = parseInt(prompt("introduce números hasta que metas un negativo", 0));

    if (isNaN(num)) {
        num = 0;
    } else if (num >= 0) {
        suma = suma + num;

        contador++
    }
    console.log(suma);
    console.log(contador);

} while (num >= 0)

alert("La suma de los número es: " + suma);
alert("La media de los número es: " + (suma / contador));
