class Cenario{
    constructor(ctx){
        this.ctx = ctx;
    }

    draw(){
        //paisagem
        //nuvens
        this.ctx.lineWidth='3';
        this.ctx.beginPath();
        this.ctx.arc(300,50,25,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(355,50,30,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(410,50,25,0,Math.PI*2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(100,100,25,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(155,100,30,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(210,100,25,0,Math.PI*2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(500,100,25,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(555,100,30,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(610,100,25,0,Math.PI*2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(700,50,25,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(755,50,30,0,Math.PI*2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(810,50,25,0,Math.PI*2);
        this.ctx.stroke();

        //chão
        this.ctx.beginPath();
        this.ctx.moveTo(0,500);
        this.ctx.quadraticCurveTo(390,200,1000,500);
        this.ctx.stroke();

        //pedras
        this.ctx.lineWidth= '7';
        this.ctx.beginPath();
        this.ctx.moveTo(200,400);
        this.ctx.quadraticCurveTo(225,320,250,400);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(300,370);
        this.ctx.quadraticCurveTo(325,290,350,370);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(400,360);
        this.ctx.quadraticCurveTo(425,280,450,360);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(500,370);
        this.ctx.quadraticCurveTo(525,290,550,370);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(600,390);
        this.ctx.quadraticCurveTo(625,310,650,390);
        this.ctx.stroke();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(700,410);
        this.ctx.quadraticCurveTo(725,330,750,410);
        this.ctx.stroke();
        this.ctx.fill();
    }
}