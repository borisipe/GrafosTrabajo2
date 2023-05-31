/*class casa{
    constructor(){
        this._ancho = Math.random()*100;
        this._largo = Math.random()*50;

        const canvas = document.getElementById("miCanvas")
        const contexto = canvas.getContext('2d');

        contexto.beginPath();
        contexto.moveTo(Math.random(), Math.random());
        contexto.rotate(Math.random());
        contexto.lineTo(this._ancho, this._largo);
        contexto.lineTo(this._ancho*100, this._ancho);
        contexto.lineTo(this._ancho, this._largo*-50);
        contexto.lineTo(this._ancho, this._largo);
        contexto.fill();
    }

}

let casa1 = new casa();
let casa2 = new casa();
let casa3 = new casa();
let casa13 = new casa();
let casa14 = new casa();
let casa15 = new casa();
let casa16 = new casa();*/

function generarMapa() {
    var canvas = document.getElementById('mapCanvas');
    var ctx = canvas.getContext('2d');

    // Tamaño del mapa
    var mapaWidth = canvas.width;
    var mapaHeight = canvas.height;

    // Dibujar el fondo del mapa
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, mapaWidth, mapaHeight);

    // Generar las calles aleatoriamente
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    // Variables para controlar las coordenadas de inicio y fin de las calles
    var startX, startY, endX, endY;

    // Generar calles horizontales
    for (var i = 0; i < 5; i++) {
      startY = Math.floor(Math.random() * mapaHeight);
      endY = Math.floor(Math.random() * mapaHeight);
      startX = 0;
      endX = mapaWidth;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Generar calles verticales
    for (var j = 0; j < 5; j++) {
      startX = Math.floor(Math.random() * mapaWidth);
      endX = Math.floor(Math.random() * mapaWidth);
      startY = 0;
      endY = mapaHeight;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }

  // Llamar a la función para generar el mapa cuando la página cargue
  window.onload = generarMapa;