//=========================== ZOMBIE GAME ===========================\\


//declaring varibles,

//background variable and image
var bg , bgImg;

//player variable and 2 images for the player
var player, playerImg, player_ShootingImg;

var heart1, heart1_img;

var heart2, heart2_img;

var heart3, heart3_img;

var zombie, zombieImg, zombieGroup; 

//============ PRELOAD FUNCTION ============\\
function preload(){
  //loading all the images;
  bgImg = loadImage("assets/bg1.png");
  playerImg = loadImage("assets/shooter_2.png");
  player_ShootingImg = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie1.png");
  heart1_img = loadImage("assets/heart_1.png");
  heart2_img = loadImage("assets/heart_2.png");
  heart3_img = loadImage("assets/heart_3.png");
}

//============ SETUP FUNCTION ============\\
function setup(){
  // making all sprites
  var canvas = createCanvas(1300,600);

  bg = createSprite(width/2, height/2.5, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 1.5;

  player = createSprite(200, 500);
  player.addImage(playerImg);
  player.scale = 0.4;
  player.debug = true;
  player.setCollider("rectangle", 0, 0, 300, 500);

  zombieGroup = new Group();

  heart1 = createSprite(1120, 50, 20, 20);
  heart1.addImage(heart1_img);
  heart1.scale = 0.2;
  heart1.visible = false;

  heart2 = createSprite(1140, 50, 20, 20);
  heart2.addImage(heart2_img);
  heart2.scale = 0.2;
  heart2.visible = false;

  heart3 = createSprite(1160, 50, 20, 20);
  heart3.addImage(heart3_img);
  heart3.scale = 0.2;

}

//============ DRAW FUNCTION ============\\
function draw(){
  // adding background
  background(9);

  // Moving player
  if(keyDown("UP_ARROW") || touches.length > 0 && player.position.y != 300){
    player.position.y -= 3;  
  }

  if(keyDown("DOWN_ARROW")  || touches.length > 0){
    player.position.y += 3;
    //console.log(player.position.x);
  }

  if(keyDown("RIGHT_ARROW")){
    player.position.x += 3; 
  }
  
  if(keyDown("LEFT_ARROW")){
    player.position.x -= 3;
  }
  // If space Bar is down the player image changes to shooting image
  if(keyWentDown("space")){
    player.addImage(player_ShootingImg);
    //player.changeImage("playerShooting");
    //player.setCollider("rectangle", -10, 0, 430, 500);
  }
  // else changes to normal image
  else if(keyWentUp("space")){
    player.addImage(playerImg);
    //player.changeImage("playerStanding");
    //player.setCollider("rectangle", 0, 0, 300, 500);
  }

  //calling enemy function
  enemy();

  // Drawing all the sprites
  drawSprites();
}

//=========== ENEMY FUNCTION ============\\
function enemy(){
  if(frameCount % 200 === 0){
    zombie = createSprite(random(1200, 1500), random(350, 500), 50, 50);
    zombie.addImage(zombieImg);
    zombie.velocity.x = -2;
    zombie.scale = 0.3;
    console.log(zombie.position.y);

    zombie.lifetime = 400;

    zombieGroup.add(zombie);

    console.log(zombie.position.x);
  }
}
