var options={
	isStatic:false,
	restituition:0.3,
	friction:0.5,
	density:1.2,


} 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	boxY=610
	boxPosition=width/2-100
	boxleftSprite = createSprite(boxPosition,boxY,20,100)
	boxleftSprite.shapeColor=color(255,0,0)
	
	boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100 , {isStatic:true} );
	World.add(world,boxLeftBody)
	
	boxBase = createSprite(boxPosition+100,boxY+40,200,20)
	boxBase.shapeColor=color(255,0,0)
	
	boxBottomBody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,  {isStatic:true} );
	World.add(world,boxBottomBody)
	
	boxleftSprite = createSprite(boxPosition+200,boxY,20,100)
	boxleftSprite.shapeColor=color(255,0,0)
	
	boxRightBody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,  {isStatic:true} );
	World.add(world,boxRightBody)
	
	Engine.run(engine);

	function keyPressed(){
      if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paperObject.body.position,{x:85,y=-85}); 	
	 
	 
	  }

	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



