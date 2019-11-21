'use strict'

var categorias = ['Acción', 'Terrror', 'Comedia'];
var peliculas = ['Trainspotting', 'La lista de Schindler', '2tontos muy tontos'];
var cine = [categorias, peliculas];

console.log(cine);
console.log(cine[0][1]);


//introducir pelicula a la lista
peliculas.push("Batman");

/*
var elemento = "";

do {
    elemento = prompt('Introduce la pelicula');
    peliculas.push(elemento);
} while (elemento != "ACABAR");
peliculas.pop();
*/

//borrar por posicion
//revisamos indice
var indice = peliculas.indexOf('Batman');

//borramos indice
if (indice > -1) {
    peliculas.splice(indice, 1)
}
console.log(indice);
console.log(peliculas);

//array a texto separado por comas
var pelis = peliculas.join();
console.log(pelis);


//cadena a array
var cadena = "Texto1, Texto2, Texto3";
var cadenastr = cadena.split(", ");

console.log(cadenastr);

//ordenar array 
peliculas.sort();
console.log(peliculas);

//al reves
peliculas.reverse();
console.log(peliculas);