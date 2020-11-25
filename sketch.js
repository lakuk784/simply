
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall,wall1,wall2,ground;

function preload()
{
	
}

function setup() {
	createCanvas(900, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall = new rect1(750,250,150,10)
	wall1= new rect1(820,220,10,50)
	wall2= new rect1(680,220,10,50)

	ground= new rect1(450,270,900,20)
	Engine.run(engine);

	ball= Bodies.circle(100,240,5)
	World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall.display();
  wall1.display();
  wall2.display();
  ground.display();
  
  fill ("red")
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
  Matter.Body.applyFroce(ball.body,ball.body.position,{x:85,y:-85});
}
}


