'use strict'

// plantilla de texto

var nombre = prompt("Introduce tu nombre: ");
var apellidos = prompt("introduce tus apellidos: ");

//var texto = " Mi nombre es: " + nombre + "<br/> mis apellidos son: " + apellidos

var texto = `
    <h1>Hola que tal?</h1>
    <h3>Mi nimbre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);
