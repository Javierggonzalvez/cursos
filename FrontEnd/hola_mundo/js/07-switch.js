'use strict'

//SWITCH

var edad = 18;
var imprime = "";
switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprime = "Adulto";
        break;
    case 40:
        imprime = "Puretica";
        break;
    case 75:
        imprime = "Viejales";
        break;
    default:
        imprime = "Neutra";
        break;
}

console.log(imprime);
