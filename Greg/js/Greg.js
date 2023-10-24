class Greg{
    constructor(ctx,xgreg,ygreg,sgreg,rgreg){
        this.ctx = ctx;
        this.xgreg = xgreg;
        this.ygreg = ygreg;
        this.sgreg = sgreg;
        this.rgreg = rgreg;
    }

    draw(){
        this.ctx.translate(this.xgreg, this.ygreg);
        this.ctx.rotate(this.rgreg * Math.PI / 180); 
        this.ctx.scale(this.sgreg, this.sgreg);   
        //cabeça
        this.ctx.lineWidth= 7;
        this.ctx.beginPath();
        this.ctx.arc(400, 200, 100, Math.PI* 1.7, Math.PI * 0.13, true);
        this.ctx.stroke();

        //nariz
        this.ctx.beginPath();
        this.ctx.moveTo(450,190);
        this.ctx.lineTo(490,190);
        this.ctx.arc(490,215,25,Math.PI*1.5,Math.PI*0.5,false);
        this.ctx.moveTo(450,240);
        this.ctx.lineTo(490,240);
        //this.ctx.lineTo(450,190);

        //this.ctx.bezierCurveTo(535,190,535,250,450,250);
        this.ctx.stroke();

        //olhos
        this.ctx.fillStyle='black';
        this.ctx.beginPath();
        this.ctx.arc(470, 165, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(380, 165, 5, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.fill();

        //boca
        this.ctx.beginPath();
        this.ctx.lineTo(350,265);
        this.ctx.quadraticCurveTo(390,290,430,265);
        this.ctx.stroke();


        //orelha
        this.ctx.beginPath();
        this.ctx.arc(280, 220, 25, Math.PI* 1.83, Math.PI * 0.1, true);
        this.ctx.stroke();

        //cabelo
        this.ctx.beginPath();
        this.ctx.lineTo(350,110);
        this.ctx.quadraticCurveTo(340,90,320,80);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineTo(350,110);
        this.ctx.quadraticCurveTo(350,90,370,70);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineTo(350,110);
        this.ctx.quadraticCurveTo(310,90,300,100);
        this.ctx.stroke();

        //bolsa
        this.ctx.beginPath();
        this.ctx.lineTo(310,285);
        this.ctx.bezierCurveTo(130,150,140,620,260,480);
        this.ctx.stroke();
        this.ctx.fill();

        //camisa
        this.ctx.beginPath();
        this.ctx.lineTo(320,260);
        this.ctx.quadraticCurveTo(290,315,260,480);

        this.ctx.moveTo(320,400);
        this.ctx.lineTo(280,400);

        this.ctx.lineTo(320,400);
        this.ctx.quadraticCurveTo(312,330,313,320);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.lineTo(360,295);
        this.ctx.quadraticCurveTo(330,360,340,540);
        this.ctx.stroke();

        //alça da bolsa
        this.ctx.beginPath();
        this.ctx.lineTo(300, 305);
        this.ctx.quadraticCurveTo(335,330,318,390);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineTo(295, 285);
        this.ctx.quadraticCurveTo(365,335,318,390);
        this.ctx.stroke();

        //shorts
        this.ctx.beginPath();
        this.ctx.moveTo(260,540);
        this.ctx.lineTo(337,540);

        this.ctx.quadraticCurveTo(330,590,340,640);

        this.ctx.lineTo(340,637);

        this.ctx.lineTo(310,637);

        this.ctx.lineTo(310,652);

        this.ctx.lineTo(260,652);

        this.ctx.quadraticCurveTo(248,600,263,538);

        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        //braço
        this.ctx.beginPath();
        this.ctx.lineWidth='15';
        this.ctx.fillStyle='white';
        this.ctx.moveTo(280,400);
        this.ctx.lineTo(260,515);

        this.ctx.bezierCurveTo(180,535,180,600,210,580);

        this.ctx.lineTo(215,550);

        this.ctx.bezierCurveTo(210,600,230,615,240,550);

        this.ctx.bezierCurveTo(230,605,250,630,275,550);

        this.ctx.bezierCurveTo(320,575,320,555,290,520);

        this.ctx.lineTo(300,400);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();

        //linha da mão


        this.ctx.beginPath();
        this.ctx.lineWidth='6';
        this.ctx.moveTo(235,580);
        this.ctx.quadraticCurveTo(232,565,240,550);

        this.ctx.moveTo(212,580);
        this.ctx.quadraticCurveTo(209,565,217,550);
        this.ctx.stroke();

        //perna 1
        this.ctx.beginPath();
        this.ctx.moveTo(265,652);
        this.ctx.quadraticCurveTo(285,750,265,870);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(290,652);
        this.ctx.quadraticCurveTo(310,750,290,880);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(270,800);
        this.ctx.lineTo(300,800);
        this.ctx.stroke();

        //perna 2
        this.ctx.beginPath();
        this.ctx.moveTo(310,632);
        this.ctx.quadraticCurveTo(340,760,320,860);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(335,632);
        this.ctx.quadraticCurveTo(355,750,350,870);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(325,800);
        this.ctx.lineTo(350,800);
        this.ctx.stroke();

        //sapatos
        this.ctx.beginPath();
        this.ctx.moveTo(320,860);
        this.ctx.quadraticCurveTo(500,910,350,920);
        this.ctx.lineTo(350,920);
        this.ctx.moveTo(320,860);
        this.ctx.lineTo(320,900);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.lineWidth='7';
        this.ctx.moveTo(260,870);
        this.ctx.quadraticCurveTo(445,950,255,920);
        this.ctx.quadraticCurveTo(240,875,265,870);
        this.ctx.stroke();

        this.ctx.setTransform(1,0,0,1,0,0);
    }

    movimento(velogregx, velogregy){
        this.xgreg += velogregx;
        this.ygreg += velogregy;

        if(this.xgreg>897){
            this.xgreg = 897;
        }
        if(this.ygreg>313){
            this.ygreg = 313;
        }
        if(this.xgreg<-33){
            this.xgreg = -33;
        }
        if(this.ygreg<-13){
            this.ygreg = -13;
        }
    }

    scale(tamanho){
        this.sgreg += tamanho;
    }

    rotate(angulo){
        this.rgreg += angulo;
    }
}