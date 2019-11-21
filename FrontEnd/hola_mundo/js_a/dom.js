'use strcit'

// DOM- document object mode

function cambiaColor(color) {
    caja.style.background = color;
}
/*
conseguir elementos con un id concreto
*/
//seleccionamos por id 2 formas

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde JS!!!";
caja.style.background = "yellow";
caja.style.padding = "20px";
caja.className = "hola";

console.log(caja);


/*
conseguir elementos por su etiqueta
*/
var allDivs = document.getElementsByTagName('div');
console.log(allDivs);

var contenidoTexto = allDivs[2].textContent;
console.log(contenidoTexto);

contenidoTexto.innerHTML = " Otro texto para el segundo elemento";
console.log(contenidoTexto);

console.log(allDivs);

var valor;
for (valor in allDivs) {
    if (typeof allDivs[valor].textcontent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(allDivs[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#miseccion").append(parrafo);
    }
}

/*
conseguir elemntos con su clase css
*/
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
console.log(divsAmarillos);

for (var div in divsRojos) {
    if (divsRojos[div].className == 'rojo') {
        divsRojos[div].style.background = 'red';
    }
}


divsRojos[0].style.background = 'yellow';
console.log(divsRojos);

// Query Selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);