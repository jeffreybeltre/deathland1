var ted, tedImage;
var jeff, jeffImage;
var zombie, zombieImage;
var bg;

function preload() {
  tedImage = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png");
  zombieImage = loadImage("Zombie1.png");
  bg = loadImage("bg.jpg");
}


function setup() {
  createCanvas(1500,750);
  
  ted = createSprite(500,200);
  ted.addAnimation("ted",tedImage);
}

function draw() {
  background(bg); 
  
  
  if(keyDown("up")){
    ted.y = ted.y -5;
  }
  if(keyDown("down")){
    ted.y = ted.y +5;
  }
  if(keyDown("left")){
    ted.x = ted.x -5;
  }
  if(keyDown("right")){
    ted.x = ted.x +5;
  }











  
  drawSprites();
}