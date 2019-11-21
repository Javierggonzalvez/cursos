'use strict'

//transformación cadena de texto

var numero = 444;
var texto1 = "Bienvenido al curso de javascript que pim que pam";
var texto2 = "soy el mejor";

//pasar num a string
var num = numero.toString();

console.log(num);
console.log(typeof num);

var text = texto1.toUpperCase();
console.log(text);
console.log(typeof text);
var text = texto1.toLowerCase();
console.log(text);

// calcular longuitud texto

var nombre = "Javi";
console.log(nombre.length);

var lista = ["hola", "pepe"];
console.log(lista.length);

// concatenar textos

var todo = texto1 + " " + texto2;
console.log(todo);

var texto_total = texto1.concat(" " + texto2);

// busquedas

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso";
var texto2 = "SOY EL MEJOR";

var busqueda = texto1.indexOf("curso");
console.log(busqueda);


//busca el último
var busqueda = texto1.lastIndexOf("curso");
console.log(busqueda);

// no encuentra

var busqueda = texto1.indexOf("antonio");
console.log(busqueda)

//busca todas las coincidencias
var busqueda = texto1.match("curso");
console.log(busqueda);

//substrig
var busqueda = texto1.substr(14, 5);
console.log(busqueda);

//saca una letra en concreto por indice
var busqueda = texto1.charAt(15);
console.log(busqueda);

// busqueda si empieza por: true o false
var busqueda = texto1.startsWith("Bien");
console.log(busqueda);

//busca una palabra
var busqueda = texto1.includes("JavaScript");
console.log(busqueda);

//reemplazar texto por otro
var reemplazo = texto1.replace("JavaScript", "sexo");
console.log(reemplazo);

//separamos desde donde digamos
var separa = texto1.slice(14);
console.log(separa);

var separa = texto1.slice(14, 22);
console.log(separa);

//recortar y mete en array
var separa = texto1.split();  //todo
console.log(separa);

var separa = texto1.split(" "); //separa por espacio
console.log(separa);


var texto3 = "    Holi q tal   "
//recortar espacios a derecha e izquierda
var separa = texto3.trim();
console.log(separa);

