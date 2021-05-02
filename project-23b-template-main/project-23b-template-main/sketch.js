const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box2;
var box1;
function preload()
{
	helicopter1=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();

     now = createSprite(400,150);
	now.visible = false;
    world = engine.world;
	helicopter = createSprite(-300,50);
	helicopter.addImage(helicopter1);
	helicopter.scale = 0.6;
	helicopter.velocityX = 7;

    box1 = new Box(300,-750,30,30);
	box2 = new Box(320,-750,30,30);
    box3 = new Box(310,-750,30,30);
	box4 = new Box(320,-760,30,30);
    box5 = new Box(310,-760,30,30);

	ground1 = new ground(250,600,250,30);
	ground2 = new ground(250,500,30,250);
	ground3 = new ground(520,500,30,250);
	ground4 = new ground(400,600,150,30);

	


}


function draw() {

	    Engine.update(engine);
  background(0);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

ground1.display();
ground2.display();
ground3.display();
ground4.display();

  drawSprites();
  
  
 
}
