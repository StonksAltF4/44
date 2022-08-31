var player
var ground                      

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  player = createSprite(200,200,50,50);
  player.shapeColor = "red";
  ground = createSprite(windowWidth/2,windowHeight- 100,windowWidth*5,40)
  
  

}

function draw() {
  background(0); 

  player.velocityY +=1
  




  if(keyDown('D')){
    player.x = player.x + 3
  }
  if(keyDown('W')&& player.collide(ground)){
 player.velocityY = - 20

  }
  if(keyDown('A')){
    player.x = player.x - 3
  }
  if(keyDown('S')){
    player.y = player.y + 10         
  }
  camera.position.x = player.x                 
  player.collide(ground)
  drawSprites();
}
