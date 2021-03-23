
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*var hammer;
var ball;
var ground;
var stone*/


function setup() {
	createCanvas(1500, 710);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	hammer=new Hammer(750,350,100,30);
	sand1= new Sand(150);
	sand2=new Sand(200);
	sand3=new Sand(300);
	sand4=new Sand(400);
	sand5=new Sand(500);
	sand6=new Sand(600);
	sand7=new Sand(700);
	sand8=new Sand(800);
	sand9=new Sand(900);
	sand10=new Sand(1000);
	sand11=new Sand(1200);
	sand12=new Sand(1050);
	sand13=new Sand(250);
	sand14=new Sand(350);
	sand15=new Sand(450);
	sand16=new Sand(750);
	plane= new Plane(750,700,5000,40);
	ball= new Ball();
	stone= new Stone(800,90,50,50)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ball.display();
  plane.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  sand16.display();
  stone.display();
  hammer.display();
  plane.display();
  drawSprites();
}


