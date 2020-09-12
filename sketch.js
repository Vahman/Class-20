var move,fixed
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 300, 50, 50);
  move=createSprite(400,100,50,50);
  fixed.shapeColor="green"
  move.shapeColor="blue"
  move.velocityY=5
  fixed.velocityY=-5
}

function draw() {
  background(255,255,255);  
  //move.y=World.mouseY
  //move.x=World.mouseX
  if(move.y-fixed.y<move.height/2+fixed.height/2&&
   fixed.y-move.y<move.height/2+fixed.height/2&&
   move.x-fixed.x<move.width/2+fixed.width/2&&
   fixed.x-move.x<move.width/2+fixed.width/2 ){
     //fixed.shapeColor="red"
     //move.shapeColor="red"
   }
else{
  //fixed.shapeColor="green"
  //move.shapeColor="blue"
}
if(move.x-fixed.x<move.width/2+fixed.width/2&&
  fixed.x-move.x<move.width/2+fixed.width/2 ){
    move.velocityX=move.velocityX*(-1)
    fixed.velocityX=fixed.velocityX*(-1)
  }
  if(move.y-fixed.y<move.height/2+fixed.height/2&&
    fixed.y-move.y<move.height/2+fixed.height/2){
      move.velocityY=move.velocityY*(-1)
      fixed.velocityY=fixed.velocityY*(-1)
    }
  drawSprites();
}