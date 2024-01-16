class Sensor{
  constructor(car){
    this.car=car;
    // just some notes on 'rayCasting'. This is a common method in games to see or sense other items
    // We have a count of rays with a certain length which means they can only see that far and a spread which
    // simply means the angle at which they will be shooting out.
    this.rayCount=5;
    this.rayLength=150;
    this.raySpread=Math.PI/2;

    this.rays=[];
    this.readings=[];
    
  }

  update(roadBorders,traffic){
    this.#castRays();
    this.readings=[];
    for(let i=0;i<this.rays.length;i++){
      this.readings.push(this.#getReading(this.rays[i],roadBorders,traffic));
    }
  }

  #getReading(ray,roadBorders,traffic){
    let touches=[];

    for(let i=0;i<roadBorders.length;i++){
      const touch=getIntersection(ray[0],ray[1],roadBorders[i][0],roadBorders[i][1]);
      if(touch)touches.push(touch);
    }

    for(let i=0;i<traffic.length;i++){
      const poly=traffic[i].polygon; // so as not to have to write 'traffic[i].polygon[j]' everywhere
      for(let j=0;j<poly.length;j++){
        const value=getIntersection(ray[0],ray[1],poly[j],poly[(j+1)%poly.length]);
        if(value)touches.push(value);
      }
    }
    
    if(touches.length===0){
      return null;
    }else{
      // here we are using array map arrow function to simply return all of the offsets from the touches to their own array 
      const offsets=touches.map(e=>e.offset);
      const minOffset=Math.min(...offsets); // then we ...spread that array to get all the offsets and get the minimum.
      return touches.find(e=>e.offset===minOffset); // then we use that min to pull the entire touch from the touches array. 
    }
  }

  #castRays(){
    this.rays=[];
    for(let i=0;i<this.rayCount;i++){
      // this.rayCount-1 because the max of i can't be the same as rayCount, it will never be equal.
      const rayAngle=lerp(this.raySpread/2,-this.raySpread/2,this.rayCount===1?0.5:i/(this.rayCount-1))+this.car.angle;
      const start={x:this.car.x,y:this.car.y};
      const end={x:this.car.x-Math.sin(rayAngle)*this.rayLength,y:this.car.y-Math.cos(rayAngle)*this.rayLength };
      this.rays.push([start,end]);
    }

  }
  
  draw(ctx){
    for(let i=0;i<this.rayCount;i++){
      let end=this.rays[i][1];
      if(this.readings[i]){
        end=this.readings[i];
      }
      ctx.beginPath();
      ctx.lineWidth=2;
      ctx.strokeStyle='yellow';
      ctx.moveTo(this.rays[i][0].x,this.rays[i][0].y);
      ctx.lineTo(end.x,end.y);
      ctx.stroke();

      // this is so we can see where the sensor would continue casting, so its from the tip of the touch on
      ctx.beginPath();
      ctx.lineWidth=2;
      ctx.strokeStyle='black';
      ctx.moveTo(this.rays[i][1].x,this.rays[i][1].y);
      ctx.lineTo(end.x,end.y);
      ctx.stroke();
    }
  }
}