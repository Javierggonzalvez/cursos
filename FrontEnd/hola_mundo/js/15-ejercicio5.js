'use strict'

/*
muestra todos los divisores de un num dado por usuario
*/

var num = parseInt(prompt("introduce un número ", 1));

for(var i = 1; i <= num; i++){
    if(num%i == 0){
        console.log("Divisor :" + i);
    }
}