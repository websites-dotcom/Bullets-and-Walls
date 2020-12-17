var wall;
var bullet;
var speed;
var weight;
var thickness;
var damage;


function setup(){

  createCanvas(1600,400);

  weight = Math.round(random(30,50));
  thickness = Math.round(random(20,80));

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "green";

  bullet = createSprite(50,200,50,70);
  bullet.shapeColor = "white";
  
  speed = Math.round(random(20,30));

}


function draw(){

  background("orange");

  if (keyDown("space")){

    bullet.velocityX = speed;

  }

  if (collide(bullet, wall)){

    damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;

    if (damage < 0.5){

      wall.shapeColor = "green";
      bullet.shapeColor = "red";

    }

    if (damage > 0.5){

      wall.shapeColor = "red";
      bullet.shapeColor = "green";

    }

  }

  drawSprites();

}


