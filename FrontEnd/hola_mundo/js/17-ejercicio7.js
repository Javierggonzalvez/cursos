'use strict'

/* 
Tablña de multiplicar de un número dado por usuario 
*/

document.write(num + " X " + i + " = " + (i * num) + "<br/>")
document.write("<h1>tabla del :" + num + "<h1/>");
for (var i = 0; i < 11; i++) {
    var a = 0;
    a = num * i;
    console.log(num + " X " + i + " = " + (i * num));
    document.write(num + " X " + i + " = " + (i * num) + "<br/>");
}


//todas las tablas

for (var c = 1; c < 11; c++) {
    document.write("<h1>tabla del :" + c + "<h1/>");
    for (var i = 1; i < 11; i++) {
        document.write(c + " X " + i + " = " + (c * i) + "<br/>");
    }

}