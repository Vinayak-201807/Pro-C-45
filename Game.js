class Game {
  constructor() {}

  readgameState() {
    var ref = database.ref("gameState");
    ref.on("value", function (data) {
      gameState = data.val();
    });
  }

  writegameState(x) {
    database.ref("/").update({
      gameState: x,
    });
  }

  startTheGame() {
    player.readAllPlayers();
    form.greeting.hide();
    form.inputBox.hide();
    form.button.hide();
    form.heading.hide();

    var h = 560,i=0;
    image(tImg,0,-displayHeight*4,displayWidth,displayHeight*5);
    for(var plr in allPlayers) {
       cArray[i].x = h;
       h = h + 300;
       if(i+1 == player.playerPosition) {
         camera.position.x = displayWidth/2;
         camera.position.y = cArray[i].y;
        }
       cArray[i].y = displayHeight - allPlayers[plr].distance;
       i = i + 1;
    }

    if(keyDown(UP_ARROW)) {
      player.playerDistance += 30;
      player.createplayerField();
    }

    drawSprites();
  }
}
