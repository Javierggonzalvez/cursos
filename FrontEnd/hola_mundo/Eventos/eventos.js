'use strict'

//eventos del ratón

window.addEventListener('load', () => {
    function cambiarColor() {
        console.log("has clikado");

        var bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }

    var boton = document.querySelector("#boton");

    //evento click
    boton.addEventListener('click', function () {
        cambiarColor();
        this.style.border = "10px solid black";
    });


    //mouseover
    boton.addEventListener('mouseover', function () {
        boton.style.background = "yellow";
    });

    //mouseout
    boton.addEventListener('mouseout', function () {
        boton.style.background = "#ccc";
    });

    /*

    */

    // focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log("[focus] estas dentro del input");
    });

    // blur
    input.addEventListener('blur', function () {
        console.log("[blur] estas fuera del input");
    });

    // keydown
    input.addEventListener('keydown', function (event) {
        console.log("[keydown] pulsando una tecla", String.fromCharCode(event.keyCode));
    });

    // keypress
    input.addEventListener('keypress', function (event) {
        console.log("[keypress] tecla presionada", String.fromCharCode(event.keyCode));
    });

    //keyup
    input.addEventListener('keyup', function (event) {
        console.log("[keyup] tecla soltada", String.fromCharCode(event.keyCode));
    });
});