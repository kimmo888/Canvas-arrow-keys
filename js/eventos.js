// arreglo json para identificar teclas de movimiento del teclado
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var grosor = document.getElementById("grosorD")
var colD = document.getElementById('colorD');
var papel = cuadrito.getContext("2d");
var ancho = cuadrito.width;
var x = 150;
var y = 150;
//lineas iniciales del canvas
dibujarLinea(colD,x-1,y-1,x+1,y+1, papel);
dibujarLinea("black", 0,0,0,ancho,papel);
dibujarLinea("black", ancho,ancho,0,ancho,papel);
dibujarLinea("black", 0,0,ancho,0,papel);
dibujarLinea("black", ancho,0,ancho,ancho,papel);
// funcion que dibuja las lineas
function dibujarLinea(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor.value;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
// funcion para moverse  en el canvas
function dibujarTeclado(evento){
    var color = colD.value;
    var mov = 10;
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(color,x,y,x,y - mov,papel);
            y = y - mov;
            break;
        case teclas.DOWN:
            dibujarLinea(color,x,y,x,y + mov,papel);
            y = y + mov;
            break;
        case teclas.LEFT:
            dibujarLinea(color,x,y,x - mov,y,papel);
            x = x - mov;
            break;
        case teclas.RIGHT:
            dibujarLinea(color,x,y,x + mov,y,papel);
            x = x + mov;
            break;
    }
}

