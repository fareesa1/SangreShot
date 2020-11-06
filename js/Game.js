class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    user1 = createSprite(100,200);
    user1.addAnimation("user1",user1_img);
    user2 = createSprite(300,200);
   // user2.addImage("user2",user2_img);
    user3 = createSprite(500,200);
   // user3.addImage("user3",user3_img);
    user4 = createSprite(700,200);
   // user4.addImage("user4",user4_img);
    users = [user1, user2, user3, user4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getusersAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth*5, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the users
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the users a little away from each other in x direction
        x = displayWidth - allPlayers[plr].distanceX;
        //use data form the database to display the users in y direction
        y = displayHeight - allPlayers[plr].distanceY;
        users[index-1].x = x;
        users[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          users[index - 1].shapeColor = "red";
          camera.position.x = users[index-1].x;
          camera.position.y = users[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distanceY -=10
      player.update();
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distanceY +=10
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distanceX +=10
      player.update();
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distanceX -=10
      player.update();
    }

    if(player.distanceY > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateusersAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
