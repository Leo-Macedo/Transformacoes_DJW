    //inicializando canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


        //variaveis
        var xgreg = 2;
        var ygreg = 200;
        var sgreg = 0.2;
        var velogreg = 10;
        var rgreg = 0  ;


        function paisagem(){
        //paisagem
        //nuvens
        ctx.lineWidth='3';
        ctx.beginPath();
        ctx.arc(300,50,25,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(355,50,30,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(410,50,25,0,Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(100,100,25,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(155,100,30,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(210,100,25,0,Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(500,100,25,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(555,100,30,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(610,100,25,0,Math.PI*2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(700,50,25,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(755,50,30,0,Math.PI*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(810,50,25,0,Math.PI*2);
        ctx.stroke();

        //chão
        ctx.beginPath();
        ctx.moveTo(0,500);
        ctx.quadraticCurveTo(390,200,1000,500);
        ctx.stroke();

        //pedras
        ctx.lineWidth= '7';
        ctx.beginPath();
        ctx.moveTo(200,400);
        ctx.quadraticCurveTo(225,320,250,400);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(300,370);
        ctx.quadraticCurveTo(325,290,350,370);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(400,360);
        ctx.quadraticCurveTo(425,280,450,360);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(500,370);
        ctx.quadraticCurveTo(525,290,550,370);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(600,390);
        ctx.quadraticCurveTo(625,310,650,390);
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(700,410);
        ctx.quadraticCurveTo(725,330,750,410);
        ctx.stroke();
        ctx.fill();

    }
    function greg(){   
        ctx.translate(xgreg, ygreg);
        ctx.rotate(rgreg); 
        ctx.scale(sgreg, sgreg);   
        //cabeça
        ctx.lineWidth= 7;
        ctx.beginPath();
        ctx.arc(400, 200, 100, Math.PI* 1.7, Math.PI * 0.13, true);
        ctx.stroke();

        //nariz
        ctx.beginPath();
        ctx.moveTo(450,190);
        ctx.lineTo(490,190);
        ctx.arc(490,215,25,Math.PI*1.5,Math.PI*0.5,false);
        ctx.moveTo(450,240);
        ctx.lineTo(490,240);
        //ctx.lineTo(450,190);

        //ctx.bezierCurveTo(535,190,535,250,450,250);
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
        ctx.lineTo(350,265);
        ctx.quadraticCurveTo(390,290,430,265);
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

        //perna 1
        ctx.beginPath();
        ctx.moveTo(265,652);
        ctx.quadraticCurveTo(285,750,265,870);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(290,652);
        ctx.quadraticCurveTo(310,750,290,880);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(270,800);
        ctx.lineTo(300,800);
        ctx.stroke();

        //perna 2
        ctx.beginPath();
        ctx.moveTo(310,632);
        ctx.quadraticCurveTo(340,760,320,860);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(335,632);
        ctx.quadraticCurveTo(355,750,350,870);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(325,800);
        ctx.lineTo(350,800);
        ctx.stroke();

        //sapatos
        ctx.beginPath();
        ctx.moveTo(320,860);
        ctx.quadraticCurveTo(500,910,350,920);
        ctx.lineTo(350,920);
        ctx.moveTo(320,860);
        ctx.lineTo(320,900);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth='7';
        ctx.moveTo(260,870);
        ctx.quadraticCurveTo(445,950,255,920);
        ctx.quadraticCurveTo(240,875,265,870);
        ctx.stroke();

        ctx.setTransform(1,0,0,1,0,0);
        }
    document.addEventListener('keydown', function(event){
        if(event.key === '1'){
            sgreg += 0.01;
        }
        if(event.key === '2'){
            sgreg -= 0.01;
        }
        if(event.key === ' '){
            rgreg += 1;
        }
        if(event.key === 'd' || event.key === 'D'){
            xgreg += velogreg;
        }
        if(event.key === 'a' || event.key === 'A'){
            xgreg -= velogreg;
        }
        if(event.key === 'w' || event.key === 'W'){
            ygreg -= velogreg;
        }
        if(event.key === 's' || event.key === 'S'){
            ygreg += velogreg;
        }
        if(xgreg>897){
            xgreg = 897;
        }
        if(ygreg>313){
            ygreg = 313;
        }
        if(xgreg<-33){
            xgreg = -33;
        }
        if(ygreg<-13){
            ygreg = -13;
        }
        ctx.clearRect(0,0,1000,500);
        ctx.save();
        ctx.beginPath();
    ctx.arc(xgreg,ygreg,200,0,Math.PI*2);
    ctx.stroke();
    ctx.clip();
        greg();
        paisagem();
        ctx.restore();
      
    
    });
    ctx.save();
    //bola clip
    ctx.beginPath();
    ctx.arc(xgreg,ygreg,200,0,Math.PI*2);
    ctx.stroke();
    ctx.clip();
    paisagem();
    greg();
    ctx.restore();



