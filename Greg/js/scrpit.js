//inicializando canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//contorno
ctx.lineWidth= 7;
ctx.strokeStyle= 'black';
ctx.strokeRect(0,0,2000,2000);
//cabeça
ctx.beginPath();
ctx.arc(400, 200, 100, Math.PI* 1.7, Math.PI * 0.15, true);
ctx.stroke();

//nariz
ctx.beginPath();
ctx.lineTo(450,190);
ctx.bezierCurveTo(535,190,535,250,450,250);
ctx.stroke();

//olhos
ctx.fillStyle='black';
ctx.beginPath();
ctx.arc(470, 165, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(380, 165, 5, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

//boca
ctx.beginPath();
ctx.lineTo(350,275);
ctx.quadraticCurveTo(390,255,430,275);
ctx.stroke();

//orelha
ctx.beginPath();
ctx.arc(280, 220, 25, Math.PI* 1.83, Math.PI * 0.1, true);
ctx.stroke();

//cabelo
ctx.beginPath();
ctx.lineTo(350,110);
ctx.quadraticCurveTo(340,90,320,80);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(350,110);
ctx.quadraticCurveTo(350,90,370,70);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(350,110);
ctx.quadraticCurveTo(310,90,300,100);
ctx.stroke();

//bolsa
ctx.beginPath();
ctx.lineTo(150,150);
ctx.quadraticCurveTo(0,0,)

