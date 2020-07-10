const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var circle1;

function setup(){
 createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  circle1 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  circle2 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));
  
  circle3 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  circle4 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  circle5 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  circle6 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  circle7 = new Ball(Math.round(random(0,400)), Math.round(random(0,400)));

  Engine.run(engine);
}


function draw(){
  background(0);
circle1.display();
circle2.display();
circle3.display();
circle4.display();
circle5.display();
circle6.display();
circle7.display();
}
