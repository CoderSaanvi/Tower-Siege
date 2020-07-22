const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling";

var engine,world;
var stand;
var score = 0;
var trials;
var bg = "white";

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  //score = 0;
  trials = 1;

  stand = new Ground(470,330,240,15);
  stand2 = new Ground(855,250,180,15);

  ground = new Ground(600,390,width,20);

  block1 = new Block(378,308,30,30);
  block2 = new Block(408,308,30,30);
  block3 = new Block(438,308,30,30);
  block4 = new Block(468,308,30,30);
  block5 = new Block(498,308,30,30);
  block6 = new Block(528,308,30,30);
  block7 = new Block(558,308,30,30);
  block8 = new Block(408,278,30,30);
  block9 = new Block(438,278,30,30);
  block10 = new Block(468,278,30,30);
  block11 = new Block(498,278,30,30);
  block12 = new Block(528,278,30,30);
  block13 = new Block(438,248,30,30);
  block14 = new Block(468,248,30,30);
  block15 = new Block(498,248,30,30);
  block16 = new Block(468,218,30,30);

  block17 = new Block2(793,228,30,30);
  block18 = new Block2(823,228,30,30);
  block19 = new Block2(853,228,30,30);
  block20 = new Block2(883,228,30,30);
  block21 = new Block2(913,228,30,30);
  block22 = new Block2(823,198,30,30);
  block23 = new Block2(853,198,30,30);
  block24 = new Block2(883,198,30,30);
  block25 = new Block2(853,168,30,30);

  var options ={
   density:1,
   friction:1,
   restitution:0.2
  }
  polygon = Bodies.circle(150,115,15,options);
  World.add(world,polygon);

  SlingShot = new Slingshot(polygon,{x:150,y:115});
}

function draw() {
  if(bg){
    background(bg);
  }

  //background(0); 
  Engine.update(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  textSize(30);
  text("Score: "+score,750,50);
  console.log(score);
  fill("yellow");
  strokeWeight(4);
  //text("x:"+mouseX+ " y:"+mouseY,20,20); 
  ellipse(polygon.position.x,polygon.position.y,15,15);

  stand.display();
  stand2.display();

  getBackgroundImg();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  ground.display();

  SlingShot.display();

  drawSprites();
}

function mouseDragged(){
  if(gameState !== "launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  SlingShot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode===32 && trials<5){
      Matter.Body.setPosition(polygon,{x:150,y:115});
      SlingShot.attach(polygon);
      gameState = "onSling";
      trials++;
  }
}

async function getBackgroundImg(){
  var apiCall = await fetch ("http://worldtimeapi.org/api/timezone/America/New_York");
  var apiCallData = await apiCall.json();
  //console.log(apiCallData);

  var hour = apiCallData.datetime.slice(11,13);
  //console.log(hour);

  if(hour>=05 && hour<=17){
      bg = "white";
  }

  else {
      bg = "black";
  }
}