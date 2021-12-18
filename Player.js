class Player {
  constructor() {
    this.playerName = "";
    this.playerDistance = 0;
    this.playerPosition = null;
  }

  readplayerCount() {
    var ref = database.ref("playerCount");
    ref.on("value", function (data) {
      playerCount = data.val();
    });
  }

  writeplayerCount(x) {
    database.ref("/").update({
      playerCount: x,
    });
  }

  createplayerField() {
    var f = "allPlayers/players" + this.playerPosition;
    database.ref(f).set({
      name: this.playerName,
      distance: this.playerDistance,
    });
  }

  readAllPlayers() {
    var ref = database.ref("allPlayers");
    ref.on("value",function(data) {
      allPlayers = data.val();
    }); 
  }
}
