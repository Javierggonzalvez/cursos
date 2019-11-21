'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector('#error_nombre').innerHTML = "El nombre no es valido";
            return false;
        }else{
            // escondemos el mensaje de error_nombre 
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido no es valido");
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("la edad no es valida");
            return false;
        }


        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];

        for(var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }

    });
});