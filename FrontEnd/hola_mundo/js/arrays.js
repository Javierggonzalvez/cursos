'use strict'

//arrays

var nombre = "Antonio Manuel";
var nombres = ["Antonio Manuel", "Joakinillo", "pakito", "Eulalio", 58, true];
var lenguajes = new Array("PHP", "JS", "PYTHON", "C", "GO", "JAVA", "C#");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[2]);
console.log(lenguajes[5]);

console.log(lenguajes.length);

var element = parseInt(prompt("Que elemento del array necesita ? :", 0));
if (element >= nombres.length) {
    alert("Introduce el número correcto, menor que " + nombres.length);
} else {
    alert(nombres[element]);

}

/*
document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
*/


//recorrer array
/*
document.write("<ul>");
lenguajes.forEach((element, indice) => {
    document.write("<li>" + indice + " - " + element + "</li>");
});
document.write("</ul>");
*/



document.write("<ul>");
for (var element in lenguajes) {
    document.write("<li>" + lenguajes[element] + "</li>");
}
document.write("</ul>");

//busquedas

var buscar = lenguajes.find(function (lenguajes) {
    return lenguajes == 'PHP';
});
console.log(buscar)

//de otra forma
var busqueda = lenguajes.find(lenguaje => lenguaje == 'PHP');
console.log(busqueda);

//buscar indice
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == 'PHP');
console.log(busqueda);

//busca si cumple una condición
var precios = [10, 20, 30, 40];
var num = precios.some(lenguaje => precio >= 20);