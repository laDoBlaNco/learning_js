const ctx = myCanvas.getContext('2d');
let drawing = false;
let rotationAngle = 0;
let rotationSpeed = 0;
let eventInfo = null;

myCanvas.addEventListener('pointerdown',(e)=>{
  ctx.beginPath();
  ctx.moveTo(e.offsetX,e.offsetY);
  drawing = true;
});

myCanvas.addEventListener('pointermove',(e)=>{
  eventInfo=e;
});

myCanvas.addEventListener('pointerup', ()=>{
  drawing = false;
}); 

myCanvas.addEventListener('pointerleave', ()=>{
  drawing = false;
}); 

animate();

function animate(){
  rotationAngle+=rotationSpeed;
  myCanvas.style.transform = 'translate(-50%,-50%) rotate('+rotationAngle+'deg)';

  if(drawing&&eventInfo){
  const xyRelToCenterPage = {
    x:eventInfo.pageX - window.innerWidth/2,
    y:eventInfo.pageY - window.innerHeight/2,
  };
    const pol = toPolar(xyRelToCenterPage);
    pol.dir -= rotationAngle*(Math.PI/180);
    const xyWithRotation = toXY(pol);
    xyWithRotation.x+=myCanvas.width/2;
    xyWithRotation.y+=myCanvas.height/2;
    
    ctx.lineTo(xyWithRotation.x, xyWithRotation.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xyWithRotation.x, xyWithRotation.y);
  }
  
  requestAnimationFrame(animate);
}

function updateRotationSpeed(){
  rotationSpeed = parseFloat(document.getElementById('speedSlider').value);
}

function toPolar({x,y}){
  return{
    dir:Math.atan2(y,x),
    mag:Math.hypot(x,y),
  };
}

// so after taking a few days of going through the MDN page on destructuring, I know a whole lot more 
// about what you can do with destructuring and the differences between assignment and binding and 
// between object destructuring and array destructuring. And the original answer I was looking for which
// is 'yes' you can put these to in either order {mag,dir} or {dir,mag} and it'll work because the 
// var assignment must correspond with the properties when its an object. 
function toXY({mag,dir}){
  return{
    x:Math.cos(dir) * mag,
    y:Math.sin(dir) * mag,
  };
}
