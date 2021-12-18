class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputBox = createInput("Enter Your Name");
    this.button = createButton("Register");
    this.greeting = createElement("h1");
    this.reset = createButton("reset");
  }

  display() {
    this.heading.html("Welcome to car buster");
    this.heading.position(displayWidth - 800, displayHeight - 700);
    this.inputBox.position(displayWidth - 750, displayHeight - 600);
    this.button.position(displayWidth - 700, displayHeight - 550);
    this.button.mousePressed(() => {
      this.heading.hide();
      this.inputBox.hide();
      this.button.hide();
      player.playerName = this.inputBox.value();
      this.greeting.html("Hello " + player.playerName);
      this.greeting.position(displayWidth - 700, displayHeight - 500);
      playerCount = playerCount + 1;
      player.playerPosition = playerCount;
      player.writeplayerCount(playerCount);
      player.createplayerField()
    });

    this.reset.mousePressed(() => {
      game.writegameState(0);
      player.writeplayerCount(0);
      var ref = database.ref("allPlayers");
      ref.remove()
    })
  }
}
