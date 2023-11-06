// let's start to work on our canvas by creating a var to hold the canvas object
const canvas = document.getElementById('canvas1');

// then we get the drawing context of that canvas which is basically a JS object 
// which holds all the canvas drawing methods and properties. We pass it the 
// context type which for us today is '2d'
const ctx = canvas.getContext('2d');

// we then want to see the element size. Canvas element has 2 independent sizes
// element size: the actual size of the element itself. and
// drawing-surface size: the actual area where we can draw in the element. We want to 
// make sure that both of them are the same. We do this by not defining canvas size
// in CSS and just setting its width and height in the this script
canvas.width = 800;
canvas.height = 850;

/*
// context fillStyle will color in our shape
ctx.fillStyle = 'red';
// context fillRect gives us a solid rectangle with the x,y,width,height data
ctx.fillRect(100,150,200,150);
// context lineWidth allows us to change the width of the lines used to draw
ctx.lineWidth = 10;
// we then turn that line stroke to blue
ctx.strokeStyle = 'blue';
// and with that new context pen ready we draw an empty rectangle with the same 
// arguments leaving us with a blue outline of our red rectangle.
ctx.strokeRect(100,150,200,150);

*/

// global settings
ctx.lineWidth = 10;

// canvas shadows
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = 'black';

// gradients
const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient1.addColorStop('0.2', 'pink');
gradient1.addColorStop('0.3', 'red');
gradient1.addColorStop('0.4', 'orange');
gradient1.addColorStop('0.5', 'yellow');
gradient1.addColorStop('0.6', 'green');
gradient1.addColorStop('0.7', 'turquoise');
gradient1.addColorStop('0.8', 'violet');
ctx.strokeStyle = gradient1;
const gradient2 = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 70, canvas.width * 0.5, canvas.height * 0.5, 400);
gradient2.addColorStop('0.4', 'green');
gradient2.addColorStop('0.5', 'red');
gradient2.addColorStop('0.8', 'blue');

// canvas pattern
const patternImage = document.getElementById('patternImage');
const pattern1 = ctx.createPattern(patternImage, 'no-repeat');

ctx.strokeStyle = pattern1;


/*
// DRawing lines are a little different than basic shapes. We start with the 
// beginPath method which will start a path of a line and automatically close all 
// existing paths already open.
ctx.beginPath(); // this is like lifting our pen from an already draw line or putting
// it in the air ready to put it to paper at some point
// then we use moveTo to set the starting x and y coords of the line
ctx.moveTo(150,300); // its like putting our pen or brush on paper
ctx.lineTo(250,700); // then we draw to our ending x,y coords
// Although I think of these methods as drawing, in actuality we are just setting up our
// line. in order to actually draw we need to stroke 
ctx.stroke();
*/

// LESSON 4
// We can also change .lineTo calls together to add segments to our line at different
// points. IF we then go removing the previous segments we can make it look like 
// our line is moving like a snake. A little animation.

// ctx.beginPath();
// ctx.moveTo(250,700);
// ctx.lineTo(350,600);
// ctx.lineTo(450,700);
// ctx.lineTo(350,800);

// ctx.stroke();

// we'll automate the adding and removing of lines with JS and make then eventually
// flow around imageas in our advanced lessons.

// LESSON 5
// Since we know what we want now we can scale it up with OOP in JS
// Let's start with a class that will draw the lines for us 
class Line {
    constructor(canvas) {
        // a constructor is a special function that when used with 'new' will create a js object
        // according to the blueprint we put inside of the 
        // we start with random x,y coords for start and end on the canvas 
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history = [{ x: this.x, y: this.y }];
        // this.endX = Math.random() * this.canvas.width;
        // this.endY = Math.random() * this.canvas.height;
        // let's give our line a random width as well within a range using a JS idiom
        this.lineWidth = Math.floor(Math.random() * 30 + 1); // the +1 ensures we don't get anything under 1 or over 16
        this.hue = Math.floor(Math.random() * 360);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        this.speedX = Math.random() * 1 - 0.5;;
        this.speedY = 7;
        this.lifeSpan = this.maxLength * 2;
        this.timer = 0;
    }
    // then we add methods to this class starting with a draw method 
    draw(context) {
        // context.strokeStyle = 'hsl(' + this.hue + ',100%,50%)';
        context.lineWidth = this.lineWidth;
        context.beginPath(); // to put our pen in the air 
        context.moveTo(this.history[0].x, this.history[0].y); // move our hand over the starting point
        // we need another loop for the animation to create randomized start positions.
        // for (let i=0;i<30;i++){
        //   this.x = Math.random() * this.canvas.width;
        //   this.y = Math.random() * this.canvas.height;
        //   this.history.push({x:this.x,y:this.y});
        // }
        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y); // iden60tify to what point our line will reach
        }
        context.stroke(); // to put pen to paper and execute the line.
    }
    // our update method will add one new segment to our line every time its called
    update() {
        this.timer++;
        if (this.timer < this.lifeSpan) {
            this.x += this.speedX + Math.random() * 20 - 10;
            this.y += this.speedY + Math.random() * 20 - 10;
            // this.x = Math.random() * this.canvas.width;
            // this.y = Math.random() * this.canvas.height;
            this.history.push({ x: this.x, y: this.y });
            if (this.history.length > this.maxLength) {
                this.history.shift();
            }
        } else if (this.history.length <= 1) {
            this.reset();
        } else {
            this.history.shift();
        }
    }
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history = [{ x: this.x, y: this.y }];
        this.timer = 0;
    }
}



// MULTIPLE LINES:
const linesArray = [];
const numberOfLines = 200;
for (let i = 0; i < numberOfLines; i++) {
    linesArray.push(new Line(canvas));
}
console.log(linesArray);


function animate() {
    // use builtin clearRect method to clear out old paint between each animation frame.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    linesArray.forEach(line => {
        line.draw(ctx);
        line.update();
    });
    // draw a line 
    // linesArray.forEach((line) => line.draw(ctx));
    // update the line 
    requestAnimationFrame(animate);

}
// call our function to start the first loop 
animate();

// ONE LINE (now segmented):
// const line1 = new Line(canvas); // we create our object instance and put it in our constant line1 
// line1.draw(ctx);

// LESSON 6 - DYNAMIC COLORS WITH HSL
// Now we want to assign random colors so we need to put that into our draw method
// We can use any standard color declaration like:
// RedGreenBlue = rgb(0,255,255) 
// #RRedGGreenBBlue = #ff7347
// HueSaturationLightness = hsl(0,100% 50%) 
// h = the hue which is a degree from 1 to 360 on the color wheel. Main colors run in 60 degree steps
//     360 & 0 are Red; 60 is yellow; 120 is green; 180 is cyan; 240 is blue; and 300 is magenta
//     Once we get to 360 it starts again at 0 in the color circle. Even if we go higher than 360
//     let's say to 500, we are still just cycling through the same circle so its actually just 200.
// s = saturation which means if we want the full color we go with 100%, then it'll get duller and duller
//     which looks like it means it will gradually move to the center of the color wheel with grey and white
// l = lightness and if we don't want it effected by light or dare we put 50%


// LESSON 7 - Randomized Line Art 
// JS classes are blueprints to create many objects, so will now start to create more lines.
// We'll do this by creating a linesArray and a for loop to create multple lines to work with. as
// we see above in the code. 
// When then can use an Array.forEach method which using a callback to draw each of the lines.
// As we refresh the page we get a different design of 50 lines drawn on convas. This is 
// Procedurally Generated Art or Generative Art - a collaboration between human and macine.

// LESSON 8 - Drawing Multi-Segmented Lines 
// Let's start animating. And to do that we are going to go back to 1 line so we can see what 
// we are doing. The idea will be to add and remove segments of lines so that it looks like the 
// line is crawling. We will make some changes to our class to do this.
// 1. We only need one set of coords 
// 2. We will keep a history of those coords so we know what we are adding and removing. For now 
//    our history will be a single object, but later it'll be an array of objects
// 3. We use our x and y from our array of objects for both our start and end x and y values. We use 
//    a for loop to create our random coords and then another one to create the .lineTo method calls, 
//    remember creating a subpath, which are doing the connecting of segments one to the next. 

// LESSON 9 - Animating Lines 
// Now to animate our line we will use a custom functiom which will first draw a line and then 
// update the line. We will then call 'requestAnimationFrame(function)', which is a built-in browser
// function which will tell the browser to run our function before each repaint.
// To address the neverending line, we set a max length and then when we reach that length we start 
// removing old segments. We remove old segments with .shift(). So push adds new segments to the 
// end of the array and shift removes old segments from the beginning, thus giving us the animation. 

// To get closer to flowfields we need to think of the lines as particles. And give them speeds to 
// travel on the screen. Also there needs to be some relation between them. So everytime we update 
// we will increase the coord by speedX and speedY instead of starting at random points. This will give 
// our paths continuity rather than just appear on the canvas willy nilly 

// LESSON 10 - Rainbow Lightning Storm Effect
// We get this by adding a random value to our speedx and speedy from 0 to 10 as we change this to hire numbers
// we see that we can get some freaky paths for our lines which seem like little lightning bolts. By changing the
// actual speedx and speedy starting numbers we can get them to flow vertically instead of so horizontally

// Now let's get them to reset automatically. We need to determine if the screen is clear or we can give them 
// a lifespan. so by putting the maxLength * 10 we are saying that each line will have a max of 100 frames
// and add a timer and put our drawing code inside of it. The timer is simply counting up to the lifespan by 1
// As long as the timer is less than the lifespan add and remove segments making the line crawl
// If the length is less or equal to 1, reset it
// else if the timer is more than the lifespan  but length isn't <= 1 keep removing one segment at a time

// LESSON 11 - Linear Gradients
// This is done using:
// const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient1.addColorStop('0.2', 'pink');
// gradient1.addColorStop('0.3', 'red');
// then we set colorStroke to our gradient var and comment out our random color code to allow the gardient to show.
// This creates an invisible line from 0,0 to the bottom right corner and the color stops are where we fade in and out colors.

// LESSON 12 - Radial Gradients
// Very similar to linear Gradients but circular, we need 6 args. Rather than starting from a corner  to a corner
// we start from a point in the circle and radius out from there
// const gradient2 = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 70, canvas.width * 0.5, canvas.height * 0.5, 400);
// gradient2.addColorStop('0.4', 'green');
// gradient2.addColorStop('0.5', 'red');
// gradient2.addColorStop('0.8', 'blue');
// ctx.strokeStyle = gradient2;

// LESSON 13 - Fill Shapes with a Pattern
// Not only a patten but an image. To avoid CORS (Cross Origin Resource Sharing)
// errors we turn the image to base64 code and put it right in the html src. Instead of using the website to do this I looked up how to do it 
// with JS and I created my own Base-64 Converter with HTML and JS. Convertetd an image to Base-64 and put it in this HTML. Then using the builtin
// context functions, similar to gradient:
// canvas pattern
// const patternImage = document.getElementById('patternImage');
// const pattern1 = ctx.createPattern(patternImage, 'no-repeat');
// ctx.strokeStyle = pattern1;
// Now the lines are being drawn with the image, pretty cool.

// LESSON 14 - Improve the Effects with Shadows
// We are giving white shadows to our lines with:
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2;
// ctx.shadowColor = 'white';
// this gives us a look of 3d cracking of the pattern
// Next we'll change the code drastically and make some different shapes, so let's move this to another folder to preserve.


