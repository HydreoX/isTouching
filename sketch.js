var fixedrect
var movingrect

function setup() {
  createCanvas(800,400);
  
  fixedrect = createSprite(400, 200, 50, 80);
  fixedrect.shapeColor = "green"

  movingrect = createSprite(600, 200, 80, 30);
  movingrect.shapeColor = "green"
}

function draw() {
  background(0,0,0);  

  movingrect.y  = World.mouseY
  movingrect.x  = World.mouseX

  if (movingrect.x - fixedrect.x < (movingrect.width+fixedrect.width)/2
  && fixedrect.x - movingrect.x < (movingrect.width+fixedrect.width)/2
  && fixedrect.y - movingrect.y < (movingrect.height+fixedrect.height)/2
  && movingrect.y - fixedrect.y < (movingrect.height+fixedrect.height)/2

  ) {
  movingrect.shapeColor = "red"
  }
else{
  movingrect.shapeColor = "green"
}


  drawSprites();



}


