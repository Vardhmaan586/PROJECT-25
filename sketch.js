var trash;
var floor;
var d1, d2,d3;
var engine, world;
var dustbinImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	trash = new Paper(100,550,100,100);
    floor = new ground(400,690,800,50);
	d1 = new dustbin(500,620,20,100);
	d2 = new dustbin(690,620,20,100);
	d3 = new dustbin(595,680,200,20);
	Engine.run(engine);
}

function draw() {
	background("cyan");
    trash.display();
	floor.display();
	d1.display();
	d2.display();
	d3.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(trash.body,trash.body.position,{x:150,y:-300})
}
}