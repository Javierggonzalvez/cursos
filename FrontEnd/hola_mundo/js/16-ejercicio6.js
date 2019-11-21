'use strict'

/*
Que nos diga si un número es par o impar
1. ventana prompt
2. comprobar que sea valido sn vuelta al punto 1
3 par o impar 
*/


var num = parseInt(prompt("Introduce un número", 0));

while (isNaN(num)) {
    num = paseInt(prompt("Introduce un número", 0));
}
if (num % 2 == 0) {
    alert("El número es PAR");

} else {
    alert("El número es IMPAR");
}