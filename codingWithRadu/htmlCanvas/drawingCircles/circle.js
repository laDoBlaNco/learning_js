const size = 200;
for(let i=1;i<=10;i++){
  const canvas = document.createElement('canvas');
  canvas.width=size;
  canvas.height=size;
  document.body.appendChild(canvas);
  canvas.style.border = '1px solid';
  canvas.style.margin = '5px';
  const ctx = canvas.getContext('2d');
  drawCircle(ctx,i);
}

function drawCircle(ctx,method){
  ctx.translate(size/2,size/2);
  
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  

  const rad = size * 0.4;
  
  switch(method){
    case 1:
      ctx.arc(0,0,rad,0,Math.PI*2);
      ctx.fillText('ARC',0,0);
      break;
    case 2:
      ctx.ellipse(0,0,rad,rad,0,0,Math.PI*2);
      ctx.fillText('ELLIPSE',0,0);
      break;
    case 3:
      ctx.roundRect(-rad,-rad,rad*2,rad*2,rad);
      ctx.fillText('ROUNDRECT',0,0);
      break;
    case 4:
      ctx.moveTo(-rad,0);
      ctx.arcTo(-rad,-rad,0,-rad,rad);
      ctx.arcTo(rad,-rad,rad,0,rad);
      ctx.arcTo(rad,rad,0,rad,rad);
      ctx.arcTo(-rad,rad,-rad,0,rad);
      ctx.fillText('ARCTO',0,0);
      break;
    case 5:
      ctx.moveTo(-rad,0);
      for(let x=-rad;x<=rad;x++){
        const y = Math.sqrt(rad*rad-x*x);
        ctx.lineTo(x,y);
      }
      for(let x=rad;x>=-rad;x--){
        const y = -Math.sqrt(rad*rad-x*x);
        ctx.lineTo(x,y);
      }
      ctx.fillText('PYTHAGOREAN',0,0);
      break;
    case 6:
      ctx.moveTo(rad,0);
      for(let a=0;a<Math.PI*2;a+=Math.PI/60){
        const x = Math.cos(a)*rad;
        const y = Math.sin(a)*rad;
        ctx.lineTo(x,y);
      }
      ctx.closePath();
      ctx.fillText('POLAR COORD',0,0);
      break;
    case 7:
      ctx.moveTo(-rad,0);
      const c = rad*0.95;
      ctx.quadraticCurveTo(-c,-c,0,-rad);
      ctx.quadraticCurveTo(c,-c,rad,0);
      ctx.quadraticCurveTo(c,c,0,rad);
      ctx.quadraticCurveTo(-c,c,-rad,0);
      ctx.fillText('QUADRATIC',0,0);
      break;
    case 8:
      ctx.moveTo(-rad,0);
      const d = rad*0.55;
      ctx.bezierCurveTo(-rad,-d,-d,-rad,0,-rad);
      ctx.bezierCurveTo(d,-rad,rad,-d,rad,0);
      ctx.bezierCurveTo(rad,d,d,rad,0,rad);
      ctx.bezierCurveTo(-d,rad,-rad,d,-rad,0);
      ctx.fillText('BEZIER',0,0);
      break;
    case 9:
      ctx.lineWidth = rad*2+3;
      ctx.lineCap = 'round';
      ctx.lineTo(0,0);
      ctx.stroke();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth=rad*2-3;
      ctx.lineTo(0,0);
      ctx.stroke();
      ctx.beginPath();
      ctx.fillText('LINECAP',0,0); // this one isn't working for some reason. 
      break;
      // this filled circle method is actually the fastest way to draw circles, 3 times
    case 10:
      ctx.moveTo(-rad,0);
      const n = 60;
      for(let i=1;i<n;i++){
        ctx.rotate(2*Math.PI/n);
        ctx.lineTo(-rad,0);
      }
      ctx.closePath();
      ctx.fillText('ROTATE',0,0);
      break;

  }
  ctx.stroke();
}