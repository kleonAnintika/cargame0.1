var bg,bgImg;
var car,carimg;
var obs,coneImg,barImg,obsGroup;
var l1,l2
var  gameState="play";
var Score=0
function preload(){
bgImg=loadImage("background2.jpg")
carimg=loadImage("car img.png")
coneImg=loadImage("cone-traffic.png")
barImg=loadImage("barrigate.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight-160);

    bg=createSprite(800,100,2000,700);
    bg.scale= 3
    bg.addImage(bgImg)
    bg.velocityX= -3

    car=createSprite(200,500,60,10);
    car.addImage(carimg)
    car.debug = true
    car.setCollider("rectangle",0,0,400,120)

    l1=createSprite(100,550,360,5)
    l1.shapeColor = "red"
    l1.visible= false;

l2=createSprite(100,250,360,5);
l2.shapeColor= "green"
l2.visible= false;

obsGroup= new Group()
}

function draw(){
    background("lightgreen")
  
  
    if(gameState==="play"){
    if(bg.x<500){
        bg.x=800
            }
            car.collide(l1)
            car.collide(l2)
        createObs();
        textSize(25)
        //Score= Score+1
        fill("black")
        text("Score"+Score,displayWidth/2-30,80)

        if(obsGroup.isTouching(car)){
            gameState ="end"
        }
     drawSprites();
  }
  if(gameState ==="end"){
console.log("Game End")
background("yellow")
textSize(40)
fill("black")
text("GAME END",displayWidth/2-30,displayHeight/2)
Restart=createSprite(displayWidth/2,displsyHeight/2+50,50,30)

  }
    
   
}

function keyPressed(){
if(keyCode=== UP_ARROW){
    car.y= car.y-20
    
}
if(keyCode=== DOWN_ARROW){
    car.y= car.y+20

}
}

function createObs(){
if(frameCount%250 ===0){
obs= createSprite(displayWidth+20,380,30,40);
obs.velocityX=-5;
obs.lifetime= 1000;
obs.scale=0.5
obs.y=random(300,500);

var i=round(random(1,2));
if(i===1){
    obs.addImage(coneImg)
}
else{
    obs.addImage(barImg);
}
obsGroup.add(obs);
}
}
