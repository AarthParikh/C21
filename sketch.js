var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  car = createSprite(200,300,50,50);
  car.shapeColor = "red"
  car.velocityX = 3
  wall = createSprite(600,300,60,150);
  wall.shapeColor = "darkblue"
  wall.velocityX = -3
}

function draw() {
  background(0,0,0);  
bounceoff(car,wall);
 
  drawSprites();
}
