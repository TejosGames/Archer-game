const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computer,cb,pb
var playerarcher,computerarcher
var arrow

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cb=new ComputerBase(width-300,random(450,height-300),180,150)
  pb=new PlayerBase(300,random(450,height-300),180,150)

  computer=new Computer(width-280,cb.body.position.y-150,50,180)
  player=new Player(285,pb.body.position.y-150,50,180)
  playerarcher=new PlayerArcher(340,pb.body.position.y-175,120,120);
  computerarcher=new ComputerArcher(width-350,cb.body.position.y-175,120,120)

  arrow=new PlayerArrow(playerarcher.body.position.x,playerarcher.body.position.y,100,100)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    pb.display();
    cb.display();
    computer.display();
  player.display();
  

   //display Player and computerplayer
playerarcher.display();
computerarcher.display();
arrow.display();
if(keyCode==32){
  arrow.shoot(playerarcher.body.angle)
}

}
