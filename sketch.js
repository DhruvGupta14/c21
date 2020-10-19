var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 80);
  fixedRect.shapeColor = "Green";
  fixedRect.debug = true;
  movingRect = createSprite(500, 500, 80, 30);
  movingRect.shapeColor = "Green";
  movingRect.debug = true;


 // movingRect.velocityY=-5;
  //fixedRect.velocityY=5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "Green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "Green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "Green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "Green";

}

function draw() {
  background(250,250,250);  
  movingRect.x = World.mouseX;
  movingRect.y= World.mouseY;

  //console.log(movingRect.x);
  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.y-fixedRect.y);
  //isTouching();

  //bounceoff(movingRect,fixedRect);

  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "Green";
  }

  drawSprites();
}
  /*
function bounceoff(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX=object1.velocityX * (-1);
        object2.velocityX=object2.velocityX * (-1);
        }

        if (object1.y - object2.y < object2.height/2 + object1.height/2
            && object2.y - object1.y < object2.height/2 + object1.height/2) {
            object1.velocityY=object1.velocityY * (-1);
            object2.velocityY=object2.velocityY * (-1);
        
        }
}
*/
  function isTouching(object1,object2){

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {

        return true;
      }
  
      else {
      
        return false;
      }
  }