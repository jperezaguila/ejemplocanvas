var canvas = document.getElementById("micanvas");
//ctx permite dibujar
var ctx = canvas.getContext("2d");
//codigo para rectangulo
ctx.fillStyle = "#ccff66";
ctx.fillRect(10, 30, 100, 100);

// con  el siguiente codigo realizaremos una linea stroke es para pintar la linea
ctx.strokeStyle = "#66aa66";
ctx.moveTo(50, 30);
ctx.lineTo(250, 197);
ctx.stroke();

//Texto, el color con strokestyle, el tamaño de letra y el tipo, el texto a mostrar y la ubicacion.
ctx.strokeStyle= "red";
ctx.font = "40px Arial";
ctx.strokeText("Hola Mundo", 500,200);