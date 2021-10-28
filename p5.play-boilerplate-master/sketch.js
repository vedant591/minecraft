var player1,player2
var arrow1,arrow2
var weapon1,weapon2,weapon3
var sword
var bow
var life
var background
var PLAY=1
var END=0
var gameState=1 

function preload(){
  player1Image=loadImage("player.png")
  player2Image=loadImage("player2.png")
  backgroundImage=loadImage("background.png")
  arrow1Img=loadImage("arrow.png")
  arrow2Img=loadImage("arrow2.png")
  bowImg=loadImage("bow.png")
  lifeImg=loadImage("life.png")
  weapon1Img=loadImage("weapon.png")
  weapon2Img=loadImage("weapon2.png")
  weapon3Img=loadImage("weapon3.png")
  weapon4Img=loadImage("weapon4.png")
}
  


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  player1=createSprite(400,200,100,70)
  player1.addImage("abc",player1Image)
  player1.scale=0.5
  player2=createSprite(600,200,100,70)
  player2.addImage("abc",player2Image)
  player2.scale=0.5
  arrow1=createSprite(550,300,100,660)
  arrow1.addImage("abc",arrow1Img)
  arrow1.scale=0.4
  arrow2=createSprite(400,300,51,70)
  arrow2.addImage("abc",arrow2Img)
  arrow2.scale=0.5
  bow=createSprite(466,200,200,20)
  bow.addImage("abc",bowImg)
  bow.scale=0.4
  weapon1=createSprite(400,200,200,70)
  weapon1.addImage("abc",weapon1Img)
  weapon1.scale=0.5
  weapon2=createSprite(550,200,6,80)
  weapon2.addImage("abc",weapon2Img)
  weapon2.scale=0.3
  weapon3=createSprite(620,200,10,50)
  weapon3.addImage("abc",weapon3Img)
  weapon3.scale=0.15
  weapon4=createSprite(300,200,20,50)
  weapon4.addImage("abc",weapon4Img)
  weapon4.scale=0.1

}

function draw() {
  background(backgroundImage); 
  if(keyDown(LEFT_ARROW)){
  player1.x-=1
  weapon1.x-=1
  bow.x-=1
  }
  if(keyDown(RIGHT_ARROW)){
    player1.x+=1
    weapon1.x+=1
    bow.x+=1
  }


  drawSprites();
}