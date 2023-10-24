    //inicializando canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const greg = new Greg(ctx,2,200,0.2,0);
    const cenario = new Cenario(ctx);

    document.addEventListener('keydown', function(event){
        if(event.key === '1'){
            greg.scale(0.1)
        }
        if(event.key === '2'){
            greg.scale(-0.1)
        }
        if(event.key === ' '){
            greg.rotate(10)
        }
        if(event.key === 'd' || event.key === 'D'){
            greg.movimento(10,0)
        }
        if(event.key === 'a' || event.key === 'A'){
            greg.movimento(-10,0);
        }
        if(event.key === 'w' || event.key === 'W'){
            greg.movimento(0,-10);
        }
        if(event.key === 's' || event.key === 'S'){
            greg.movimento(0,10);
        }
    

        ctx.clearRect(0,0,1000,500);
        ctx.save();
        ctx.beginPath();
        ctx.arc(greg.xgreg,greg.ygreg,200,0,Math.PI*2);
        ctx.stroke();
        ctx.clip();
        greg.draw();
        cenario.draw();
        ctx.restore();
      
    
    });
    ctx.save();
    //bola clip
    ctx.beginPath();
    ctx.arc(greg.xgreg,greg.ygreg,200,0,Math.PI*2);
    ctx.stroke();
    ctx.clip();
    cenario.draw();
    greg.draw();
    ctx.restore();



