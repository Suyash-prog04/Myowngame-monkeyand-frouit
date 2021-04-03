var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var timer=60;

function preload(){
backgroundimg=loadImage("jungle.jpg");
monkeyimg=loadImage("monkey.png");
fruitimg=loadImage("fruit.png");

}
function setup(){
    var canvas= createCanvas(windowWidth,windowHeight);
    monkey= createSprite(70,550);
    monkey.addImage(monkeyimg);
    monkey.scale=0.5;
    eatgroup=new Group();

}
function draw(){
    background(backgroundimg);
    drawSprites();
    if (gameState === PLAY) {
       timer = timer - 0.05;
       textSize(25);
       text("TIME REMANING:" + Math.round(timer), 500, 30);
        text("score= " + score, 50, 30); 
        edges = createEdgeSprites();
         monkey.collide(edges);

    if(keyDown(LEFT_ARROW)){
        monkey.velocityX=-8;
      }
      else if(keyDown(RIGHT_ARROW)){
    monkey.velocityX=8;
      }
      else if(keyDown(UP_ARROW)){
        monkey.velocityY=-8
      }
      else if(keyDown(DOWN_ARROW)){
        monkey.velocityY=8;
    }
    fruit();
if(eatgroup.isTouching(monkey)){
  eatgroup.destroyEach();
  monkey.scale += 0.05;
  score++;
}

if (timer < 0) {
   gameState = END;
   } 
  }
  if (gameState === END) { 
    monkey.velocityX = 0;
     monkey.velocityY = 0; 
     eatgroup.destroyEach();
     }

   
}
function fruit(){
    if(frameCount % 60 === 0){
      fruits= createSprite(random(50, 750), 200, 5, 5);
      fruits.y = random(50, 550);
      fruits.addImage(fruitimg);
      fruits.scale=0.5;
      fruits.lifetime=50
      eatgroup.add(fruits);
    }
}  