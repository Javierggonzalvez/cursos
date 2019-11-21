'use strict'

//JSON Javascript object notation

var pelicula = {
    titulo: 'Batman',
    year: 1998,
    pais: 'USA'
};


console.log(pelicula);
//cambio el titulo
pelicula.titulo = "Batman Begins";

console.log(pelicula);



var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: 'Francia'},
    pelicula
];

var caja_pelis = document.querySelector("#peliculas");

for (var i in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[i].titulo + " - " + peliculas[i].year);
    caja_pelis.append(p);
}