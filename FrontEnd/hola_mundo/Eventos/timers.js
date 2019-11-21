'use strict'

//se ejecuta constantememte

window.addEventListener('load', function(){

    function intervalo(){
    // timers
        var tiempo = setInterval(function(){

        console.log("Set Interval ejecutado");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == '40px'){
            encabezado.style.fontSize = '30px';
        }else{
            encabezado.style.fontSize = "40px";
        }

        }, 1000);

        return tiempo;

    }
    var tiempo = intervalo();

    var stop = document.querySelector('#stop');
    
    stop.addEventListener('click', function(){
        alert('Has paradao el intervalo en bucle');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');

    start.addEventListener('click', function(){
        alert('Has iniciado el intervalo en bucle');
        intervalo();
    });
});

/*
//se ejecuta solo 1 vez cada 5 segundos(el tiempo puesto en milisegundos)
window.addEventListener('load', function(){
    // timers
    var tiempo = setTimeout(function(){

        console.log("Set Interval ejecutado");

        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == '40px'){
            encabezado.style.fontSize = '30px';
        }else{
            encabezado.style.fontSize = "40px";
        }

    }, 5000);
});
*/