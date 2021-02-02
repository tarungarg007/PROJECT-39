class Game {
  constructor(){}

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
    fruit1=createSprite(100,300)
    fruit1.addImage(appleimg)
    fruit1.scale=0.3;
    fruit2=createSprite(300,300)
    fruit2.addImage(bananaimg)
    fruit2.scale=0.1;
    fruit3=createSprite(500,300)
    fruit3.addImage(cherryimg)
    fruit3.scale=0.7;
    fruit4=createSprite(700,300)
    fruit4.addImage(orangeimg)
    fruit4.scale=0.3;
    fruits=[fruit1,fruit2,fruit3,fruit4]
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      var index = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        fruits[index-1].x = x;
        fruits[index-1].y = y;
        if (index === player.index){
          fruits[index - 1].shapeColor = "red";
          camera.position.x = displayWidth;
          camera.position.y = fruits[index-1].y
        }
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
      console.log(player.distance)
    }
    drawSprites();
  }
}
