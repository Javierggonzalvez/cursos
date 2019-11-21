'use strict'

/*
programa que: 
1.pida 6 num por pantalla y los meta en un array
2.mostrar el array entero en el cuerpo de la pagina y en la consola
3.sacar el array ordenado
4.invertir orden
5.cuantos elementos tiene el array
6.busqueda de un valor introducido por usuario, y que diga si esta o no en el array y la posicion
*/

function mostrarArray(elementos, textCustom = "") {
    document.write("<h1> Contenido del Array </h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

//Pedir 6 numeros
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt('Introduce un numero', 0));
    numeros.push(parseInt(prompt('Introduce un numero', 0)));
}

//mostrar en el cuerpop de a página
mostrarArray(numeros);

//mostrar en la consola
console.log(numeros);

//ordenar array 
numeros.sort();
mostrarArray(numeros, 'ascendente');

//al reves
numeros.reverse();
mostrarArray(numeros, 'descendente');

//cuantos elementos
console.log(numeros.length);

//buscar indice
var busqueda = numeros.findIndex(numero => numero == '7');
console.log(busqueda);