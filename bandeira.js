var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext('2d')


ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.lineWidth = 5; // largura da borda
ctx.strokeStyle = '#000000'; // cor da borda
ctx.strokeRect(0, 0, canvas.width, 300);


var raio = Math.min(canvas.width, 320) / 4;
ctx.beginPath();
ctx.arc(canvas.width / 2, 300 / 2, raio, 0, 2 * Math.PI);
ctx.fillStyle = '#ff0000';
ctx.fill();
ctx.closePath();