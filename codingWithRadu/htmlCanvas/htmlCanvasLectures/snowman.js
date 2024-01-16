function drawSnowman(x1,y1,r1,scaleFactor,percentMove,tie){
  // x1,y1,r1 are the properties of the bottom ball of the snowman
  ctx.beginPath();
  ctx.arc(x1,y1,r1,0,Math.PI*2);
  ctx.fillStyle='white';
  ctx.fill();

  ctx.beginPath();
  const r2=r1*scaleFactor,x2=x1,y2=y1-r1-r2;
  ctx.arc(x2,y2,r2,0,Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  const r3=r2*scaleFactor,x3=x2,y3=y2-r2-r3;
  ctx.arc(x3,y3,r3,0,Math.PI*2);
  ctx.fill()

  // Draw snowman hat
  drawHat(x3,y3,r3);
  drawEyes(x3,y3,r3,percentMove);
  drawBowTie(tie);
  
}

function drawHat(headx,heady,headr){
  ctx.beginPath();
  const w4=headr*2,h4=headr/2,x4=headx-w4/2,y4=heady-headr;
  ctx.rect(x4,y4,w4,h4);
  ctx.stroke();
  ctx.fillStyle='black';
  ctx.fill();

  ctx.beginPath();
  const w5=w4*0.8,h5=headr,x5=headx-w5/2,y5=y4-h5;
  ctx.rect(x5,y5,w5,h5);
  ctx.stroke();
  ctx.fill();
}

function drawEyes(headx,heady,headr,percent){
  // drawing the dynamic eyes
  const minX=headx-(0.15*headx);
  const rangeX=0.35*minX;
  const x=minX+rangeX*percent;
  ctx.beginPath();
  ctx.fillStyle='black';
  const x6=x-(.11*x),y6=heady-(0.07*heady),r6=0.2*headr;
  const x7=x+(.11*x);
  ctx.arc(x6,y6,r6,0,Math.PI*2);
  ctx.arc(x7,y6,r6,0,Math.PI*2);
  ctx.fill();  
}

function drawBowTie(tie){
  ctx.drawImage(tie,150,230,100,60);

  ctx.font="40px Comic Sans MS";
  ctx.textAlign='center';
  ctx.textBasline='middle';
  ctx.fillText("It's",200,325);
  ctx.fillText("Cold!",200,365);
}
