window.addEventListener('load',function(){
    // load event is fired when the whole page has been loaded with all its
    // HTML elements, as well as all other dependent resources (stylesheets,images, etc)
    const canvas=document.getElementById('canvas1');
    // note: 'getElementById' is slightly faster than 'querySelector' as it doesn't have to search
    // through all elements but just to go the id.
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 800;
    // console.log(ctx);
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.fillStyle = 'blue';
    ctx.shadowColor = 'black';
    ctx.shadowOffsetY = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowBlur = 10;

    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    // This class handles the creation and drawing of each of our fractal shapes. 
    class Fractal{
        constructor(canvasWidth,canvasHeight){
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.size = this.canvasWidth*0.10;
            this.sides = 5;
            this.maxLevel = 4;
            this.scale = 0.5
            this.spread = Math.random()*2.8+0.1;
            this.branches = 2;
            this.color = 'hsl('+Math.random()*360+',100%,50%)';
        }
        draw(context){
            context.strokeStyle = this.color;
            context.fillStyle = this.color;
            context.save(); 
            context.translate(this.canvasWidth/2,this.canvasHeight/2); 
            context.scale(1,1); 
            context.rotate(0);
            for(let i=0;i<this.sides;i++){
                this.#drawLine(context,0);
                context.rotate((Math.PI*2)/this.sides);
            }
            context.restore(); 
        }
        #drawLine(context,level){
            if(level > this.maxLevel) return;
            context.beginPath(); 
            context.moveTo(0,0); 
            // context.lineTo(this.size,0); 
            context.bezierCurveTo(0,this.size*this.spread*-5,this.size*10,this.size*10*this.spread,0,0);
            context.stroke(); 

            context.beginPath();
            context.arc(this.size*1,0,50,0,Math.PI*2);
            context.stroke();

            for(let i=0;i<this.branches;i++){
                context.save();
                
    
                context.translate(this.size-(this.size/this.branches)*i,0);
                context.scale(this.scale,this.scale);
    
                context.save();
                context.rotate(this.spread);
                this.#drawLine(context,level+1);
                context.restore();
    
                context.save();
                context.rotate(-this.spread);
                this.#drawLine(context,level+1);
                context.restore();
    

                context.restore();
            }


        }

    }

    // This class will draw individual particles and define their behavior and movement.
    // with a particle system we have many different particle objects that together create different
    // effects, such as smoke, some kind of flow or rain effect for example. Today, each of our
    // particles will be one of these complex fractals and they will rain over the canvas. Typically
    // in particle systems we simply draw and erase the particles at 60 fps to give the illusion of
    // movement. But with complex fractal shapes that take 1+ seconds each to create, there's no way
    // to do that. Or is there? YES, there is. canvas is very good at drawing images fast, so the secret
    // is to convert these complex fractals into images and then use those images as the particles which
    // can be drawn in pixels very quickly at 60 fps ;)
    class Particle{
        constructor(canvasWidth,canvasHeight,image){
            // this class also needs to know about width and height because they will need to reset
            // when they fall off screen, so they need to be aware of where they are on the screen
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.image = image;
            this.x = Math.random() * this.canvasWidth;
            this.y = Math.random() * this.canvasHeight;
            this.sizeModifier = Math.random()*0.5+0.1;
            this.width = this.image.width * this.sizeModifier;
            this.height = this.image.height * this.sizeModifier;
            this.speed = Math.random()*1+0.5;
            this.angle = 0;
            this.va = Math.random()*0.01 - 0.005;
        }
        // each particle created by this class will have access to the public update method
        // here we will define behavior and movement. It will be called 60 times per second. And
        // everytime its called it'll push our particle 1 pixel to the right and 1 pixel down
        update(){
            this.angle += this.va
            this.x+=this.speed;
            if(this.x > this.canvasWidth + this.width) this.x = -this.width;
            this.y+=this.speed;
            if(this.y > this.canvasHeight + this.height) this.y = -this.height;
        }
        draw(context){
            context.save();
            context.translate(this.x,this.y);
            context.rotate(this.angle);
            context.drawImage(this.image,-this.width/2,-this.height/2,this.width,this.height);
            context.restore();
        }
    }
    
    // this rain class will handle the entire effect, all the particles at once.
    class Rain{
        constructor(canvasWidth,canvasHeight,image){
            // this class is responsible for keeping all particles on the canvas, so it needs to know
            // the width and height of the canvas
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.image = image;
            // this is the number of particle objects that we will create
            this.numberOfParticles = 30;
            // this array will hold all of our objects/particles
            this.particles = [];
            this.#initialize();
        }
        // this private method will initialize our class, basically filling our particles array with
        // the number of particles desired.
        #initialize(){
            for(let i=0;i<this.numberOfParticles;i++){
                // new Particle finds the 'Particle' class and creates a new particle from the blueprint
                // in its 'constructor'
                this.particles.push(new Particle(this.canvasWidth,this.canvasHeight,this.image));
            }
        }
        run(context){
            this.particles.forEach(particle =>{
                particle.draw(context);
                particle.update();
            })
        }
    }

    const fractal1 = new Fractal(canvas.width,canvas.height);
    fractal1.draw(ctx);
    const fractalImage = new Image();
    fractalImage.src = canvas.toDataURL(); // defaults to png

    // The 'onload' event is triggered when an object has been fully loaded. In this case its when
    // our new fractal image is completely loaded, converted from our fractal, etc
    fractalImage.onload = function(){
        const rainEffect = new Rain(canvas2.width,canvas2.height,fractalImage);
    
        function animate(){
            ctx2.clearRect(0,0,canvas2.width,canvas2.height); 
            rainEffect.run(ctx2);
            requestAnimationFrame(animate);
        }
        animate();
    }


}) 

/*
Notes:

Fractals are infinitely complex patterns that are self-similar across different scales. They are created
by repeating a simply process over and over in an ongoing feedback loop.

Procedural programming is declaring variables and functions line by line as we create our project. Its the
most basic way to write code.

Object Oriented programming will be used today, wrapping variables and functions in objects that operate
on them.

Recursion is a process in which a function calls itself and the method we use to give our fractals a 
limited depth since we can't truly make then infinite. JS would never finish drawing them if they were
and our eyes wouldn't be able to see them anyways. Recursion ALWAYS needs to have a BASE CASE, or a condition
that tells JS when to stop the recursion

JS classes are templates for creating objects. JS class contains a set of instructions in a form of values
and methods that will serve as the blueprint 
    Constructor: is a special method of the js class. It contains the blueprint and when we call the class
        using the 'new' keyword, constructor will create one new blank js object and it will assign it
        values and properties based on the blueprint inside.
    Public Method: A function thats sits on or is connected to an object.
    Private Methods: A function that sits on or is connect to an object that can only be accessed from
        within the class. These are identified starting with a #

4 Principles of OOP:
    Encapsulation: bundling data and methods operate on that data, in objects.
    Abstraction: hiding unnecessary details of the inner workings of our objects from the outside and
        only exposing the essentials. Example: our private method (#drawLine) above


*/