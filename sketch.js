
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var thief1;
var button1,button2,button3;
var cup1,cup2,cup3,cup4;


function setup() {
  var canvas = createCanvas(1500,700);
  engine = Engine.create();

  thief1 = new thief(1200,450,35,35);
  //cup1 = new cup(550,550,20,20)
  
}

 function draw() {
  background("white");

  Engine.update(engine);

  thief1.display();

  m1=createSprite(25,50,50,50);
  m1.shapeColor="red"
  m2=createSprite(50,100,200,20);
  m3=createSprite(150,50,20,120);
  m4=createSprite(550,600,2000,20);
  m5=createSprite(1110,100,20,800);
  m6=createSprite(400,500,1200,20);
  m7=createSprite(1300,100,20,1000);
  m8=createSprite(550,10,2000,20);
  m9=createSprite(800,300,500,20);
  m10=createSprite(550,300,20,200);
  m11=createSprite(630,200,20,200);
  m12=createSprite(400,100,20,650);
  m13=createSprite(250,150,20,100);
  m14=createSprite(150,300,300,20);

  button1=createSprite(1098,100,10,10)
  button2=createSprite(1098,150,10,10)
  button3=createSprite(1098,200,10,10)


/*if(thief1.isToching(button2)){
  m1.destroy();
}*/








  drawSprites();

  textSize(20);
  fill("black")
  text("EXIT",5,50);


  textSize(20);
  fill("black")
  text("touch the rigth button in oder to exit ▶",600,50);


}
