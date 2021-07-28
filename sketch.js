const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var rope3;

var bg_img;
var food;

var button,button2;
var mute_btn;

var bk_song;

function preload()
{
  bg_img = loadImage('rescue.jpeg');
  food = loadImage('food.jpeg');
  
  bk_song = loadSound('music.aac');
  
}

function setup() 
{
  createCanvas(600,700);
  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;

  //btn 1
  button = createImg('helicopter.jpeg');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

   //btn 2
   button2 = createImg('helicopter.jpeg');
   button2.position(450,90);
   button2.size(50,50);
   button2.mouseClicked(drop2);
 
   rope = new Rope(7,{x:120,y:90});
   rope2 = new Rope(7,{x:490,y:90});
  
   ground = new Ground(300,height,width,20);
  
   fruit = Bodies.circle(300,300,20);
   Matter.Composite.add(rope.body,fruit);

   fruit_con = new Link(rope,fruit);
   fruit_con_2 = new Link(rope2,fruit);

   rectMode(CENTER);
   ellipseMode(RADIUS);
   textSize(50);
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();
  rope2.show();

  Engine.update(engine);
  ground.show();
   
}

function drop()
{

  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}

function drop2()
{
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
}




