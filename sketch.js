
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const render = Matter.render;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var world;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(90,100,1400,30);

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	bob1 = new Bob(100,600,10);
	bob2 = new Bob(110,600,10);
	bob3 = new Bob(120,600,10);
	bob4 = new Bob(130,600,10);
	bob5 = new Bob(140,600,10);

	var render = Render.create({
		element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	})

	rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)

	rope2=new rope(bob.body,roof.body,-bobDiameter*1, 0)
	rope3=new rope(bob.body,roof.body,0, 0)
	rope4=new rope(bob.body,roof.body,bobDiameter*1, 0)
	rope5=new rope(bob.body,roof.body,bobDiameter*2, 0)

	constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}
	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}
	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}
	}
	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	
	}
	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}
	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)
	
	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	
	Engine.run(engine);
	//Render.run(render);
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(250);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y

	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
