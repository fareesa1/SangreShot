var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distanceY = 0;
var distanceX = 0;
var database;
var ground, groundImage;
var form, player, game;
var grass_up, grass_down, grass_left,grass_right;
var users, user1, user2, user3, user4;

var track, user1_img, user2_img, user3_img, user4_img;

function preload(){
  track = loadImage("../images/ground.png");
  grass_down = loadImage("../images/grass.jpg");
  grass_up = loadImage("../images/grass.jpg");
  user1_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user2_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user3_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user4_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  groundImage = loadImage("../images/block.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  ground = createSprite(100,100)
  ground.addImage(groundImage)
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
