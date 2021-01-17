
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine 
var roof

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof()
	b1 = new Bob(windowWidth/2,600)
	b2 = new Bob(windowWidth/2+70,600)
	b3 = new Bob(windowWidth/2+140,600)
	b4 = new Bob(windowWidth/2-70,600)
	b5 = new Bob(windowWidth/2-140,600)

	rope1= new Rope(b5.body,roof.body,-140)
	rope2= new Rope(b4.body,roof.body,-70)
	rope3= new Rope(b1.body,roof.body,0)
	rope4= new Rope(b2.body,roof.body,70)
	rope5= new Rope(b3.body,roof.body,140)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background(51, 0, 51);
  background(0);
  

  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  console.log(windowWidth)

 
}

function mouseDragged(){
	
	Matter.Body.setPosition(b3.body, {x: mouseX , y: mouseY});
//Matter.Body.setPosition(b5.body, {x: mouseX , y: mouseY});
    
}


