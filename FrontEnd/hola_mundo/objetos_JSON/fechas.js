'use strict'

var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();
var min = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textoHora = `
    el año es : ${year}    
    el mes es : ${mes + 1}
    el dia es : ${dia}
    la hora es : ${hora}
    los minutos són : ${min}
    y segundos : ${segundos} 
`;
console.log(textoHora)
document.write(textoHora);

// mates

console.log(Math.random()*1000);
console.log(Math.ceil(Math.random()*1000));
console.log(Math.round(Math.random()*1000));

