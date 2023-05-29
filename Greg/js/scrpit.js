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
ctx.lineTo(310,285);
ctx.bezierCurveTo(130,150,140,620,260,480);
ctx.stroke();
ctx.fill();

//camisa
ctx.beginPath();
ctx.lineTo(320,260);
ctx.quadraticCurveTo(290,315,260,480);

ctx.moveTo(320,400);
ctx.lineTo(280,400);

ctx.lineTo(320,400);
ctx.quadraticCurveTo(312,330,313,320);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(360,295);
ctx.quadraticCurveTo(330,360,340,540);
ctx.stroke();

//alça da bolsa
ctx.beginPath();
ctx.lineTo(300, 305);
ctx.quadraticCurveTo(335,330,318,390);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(295, 285);
ctx.quadraticCurveTo(365,335,318,390);
ctx.stroke();

//shorts
ctx.beginPath();
ctx.moveTo(260,540);
ctx.lineTo(337,540);

ctx.quadraticCurveTo(330,590,340,640);

ctx.lineTo(340,637);

ctx.lineTo(310,637);

ctx.lineTo(310,652);

ctx.lineTo(260,652);

ctx.quadraticCurveTo(248,600,263,538);

ctx.stroke();
ctx.fill();
ctx.closePath();

//braço
ctx.beginPath();
ctx.lineWidth='15';
ctx.fillStyle='white';
ctx.moveTo(280,400);
ctx.lineTo(260,515);

ctx.bezierCurveTo(180,535,180,600,210,580);

ctx.lineTo(215,550);

ctx.bezierCurveTo(210,600,230,615,240,550);

ctx.bezierCurveTo(230,605,250,630,275,550);

ctx.bezierCurveTo(320,575,320,555,290,520);

ctx.lineTo(300,400);
ctx.stroke();
ctx.fill();
ctx.closePath();

//linha da mão


ctx.beginPath();
ctx.lineWidth='6';
ctx.moveTo(235,580);
ctx.quadraticCurveTo(232,565,240,550);

ctx.moveTo(212,580);
ctx.quadraticCurveTo(209,565,217,550);
ctx.stroke();