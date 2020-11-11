var car , wall ;
var speed,weight;

function setup() {
  createCanvas(800,400);
 
  weight = random(500,1000);
  speed = random(10,50);

  car = createSprite(50, 200, 40, 40);
 car.shapeColor = "grey"; 
 car.velocityX = speed;
 
 wall = createSprite(700,200,50,height/2);
 wall.shapeColor = "black";
 
 
}
function draw() {
  background("white");  
 
  if(wall.x-car.x < (car.width + wall.width)/2){
 car.velocityX = 0;
  var deformation =   Math.round(0.5*weight*car.velocityX*car.velocityX/2250);
  if(deformation < 50){
    car.shapeColor = "green";
    console.log("<100")
  }
else if(deformation >50 && deformation < 100){
  car.shapeColor = "yellow";
  console.log(">100&<180")
}
else if(deformation <100){
  car.shapeColor = "red";
  console.log(">180")
}
}

  drawSprites();
}