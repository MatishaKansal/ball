const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var circle1;

function setup(){
 createCanvas(400, 400);

    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bbVel = [];
    bbSize = 105;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(5.25, 10.25)));
    }
}


function draw(){
  background(0);
// circle1.display();
// circle2.display();
// circle3.display();
// circle4.display();
// circle5.display();
// circle6.display();
// circle7.display();

updatePlayer();
updateBubbles();
updateLasers();
}
