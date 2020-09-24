var fixed_object,moving_object;

function setup() {
  createCanvas(800,400);
  fixed_object = createSprite(100,200,20,40);
  moving_object = createSprite(700,200,20,40);
  fixed_object.shapeColor = "blue";
  moving_object.shapeColor = "red";
  fixed_object.debug = true;
  moving_object.debug = true;


}

function draw() {
  background(0,0,0);  
moving_object.y = mouseY;
moving_object.x = mouseX;
console.log(moving_object.x - fixed_object.x);

isTouching();

  drawSprites();
}


function isTouching()
{
  if (moving_object.x - fixed_object.x < moving_object.width/2 + fixed_object.width/2 && 
    fixed_object.x - moving_object.x < fixed_object.width/2 + moving_object.width/2 && 
    moving_object.y - fixed_object.y < moving_object.height/2 + fixed_object.height/2 && 
    fixed_object.y - moving_object.y < fixed_object.height/2 + moving_object.height/2)
{
  moving_object.shapeColor = "green";
  fixed_object.shapeColor = "purple";
}

else {
  moving_object.shapeColor = "blue";
  fixed_object.shapeColor = "red";
}

}