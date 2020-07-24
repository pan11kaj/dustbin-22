
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paper,ground;
var dustbin,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

  ground = new Ground();
  paper = new Paper();    
  


  dustbin = new Dustbin(520,540,130,110);
  log1 = new Log(570,540,10,100); 
  log2 = new Log(465,540,10,50);
  log3 = new Log(520,590,70,10); 
  Engine.run(engine);

}

function draw() {
background("white");
  rectMode(CENTER);
  log1.display();
  log2.display();
log3.display();

  dustbin.display();
  ground.display();

paper.display();
keypressed();

  drawSprites();

 
}
function keypressed(){
if(keyCode===UP_ARROW){
 
  Matter.Body.applyForce(paper.body, paper.body.position,{x:7.8,y:-9.7});


}

}


