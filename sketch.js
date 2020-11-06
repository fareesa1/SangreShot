var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distanceY = 0;
var distanceX = 0;
var database;
var ground, groundImage;
var form, player, game;

var users, user1, user2, user3, user4;

var track, user1_img, user2_img, user3_img, user4_img;

function preload(){
  track = loadImage("../images/ground.png");
  user1_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  // user2_img = loadImage("../images/user2.png");
  // user3_img = loadImage("../images/user3.png");
  // user4_img = loadImage("../images/user4.png");
  groundImage = loadImage("../images/block.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
