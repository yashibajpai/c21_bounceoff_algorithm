var mr, fr

function setup() {
  createCanvas(800,400);
  mr= createSprite(400, 200, 80, 50);
  fr = createSprite(200,200, 50, 80);
  mr.shapeColor = "green";
  fr.shapeColor = "green";
  mr.velocityX = -2
  fr.velocityX = 3
}

function draw() {
  background(255,255,255);  
  
  bounceoff(mr,fr);
  drawSprites();
  
  
}

