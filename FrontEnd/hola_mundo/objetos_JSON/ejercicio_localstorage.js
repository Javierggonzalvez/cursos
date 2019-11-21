'use strict'

var formulario = document.querySelector("#form_peliculas");

formulario.addEventListener('submit', function(){
    var peli = document.querySelector('#addpelicula').value;
    if(peli.length >= 1){
        localStorage.setItem(peli, peli);
    }
});

var ul = document.querySelector('#peliculaList');

for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

// borrar pelis
var formulario = document.querySelector("#form_del_peliculas");

formulario.addEventListener('submit', function(){
    var peli = document.querySelector('#delpelicula').value;
    if(peli.length >= 1){
        localStorage.removeItem(peli);
    }
});