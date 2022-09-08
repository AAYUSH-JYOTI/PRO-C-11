
var trex ,trex_running;
var ground, groundimg;

function preload(){
 trex_running=loadImage("trex1.png","trex3.png","trex4.png"); 
groundimg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,150,30,80)
 trex.addAnimation("walking",trex_running)
ground=createSprite(300,180,600,10);
ground.addImage("groundimg")
 trex.scale=0.7
 
}
console.logtrex.y
function draw(){
  background("grey")
drawSprites();

}
