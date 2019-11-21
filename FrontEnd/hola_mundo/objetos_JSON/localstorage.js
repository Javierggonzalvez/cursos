'use strict'

// LocalStorage

// comprobar si localstorage esta disponible
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
}

// como guardar datos
localStorage.setItem("titulo", "Curso FrontEnd");

// recuperar elemento
// console.log(localStorage.getItem("titulo"));
document.querySelector('#peliculas').innerHTML=localStorage.getItem("titulo");

//guardar objetos
var user = {
    name: 'javi',
    mail: 'javi@pet.com',
    web: 'javi.com'
};

localStorage.setItem("user", JSON.stringify(user));

// recuperar objeto
var userJS = JSON.parse(localStorage.getItem("user"));
console.log(userJS)

document.querySelector("#datos").append(userJS.web+" - "+userJS.name);

localStorage.removeItem("user");

// loacalStorage.clearItem("user");