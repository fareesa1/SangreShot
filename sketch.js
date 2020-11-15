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

var track1, user1_img, user2_img, user3_img, user4_img;
var shoot1;

function preload(){
  track = loadImage("../images/track_full.png");
  tree1_img = loadImage("../images/tree.png")
  user1_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user2_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user3_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  user4_img = loadAnimation("../images/3.png","../images/2.png","../images/1.png");
  grass_img = loadImage("../images/grass.jpg");
  shootImg = loadImage("../images/shoot1.png")
}

function setup(){
  canvas = createCanvas(1600,1200);
  database = firebase.database();
  var rand = random(100,800)
  for(var x = -200; x < 2600; x += 1000){
    for(var y = -200; y < 2000; y += 1000){
    tree1 = createSprite(x,y)
  tree1.addImage(tree1_img)
  }
}
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
