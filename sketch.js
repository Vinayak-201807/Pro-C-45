var database;
var form,
  allPlayers,
  c1Img,
  c2Img,
  tImg,
  c1s,
  c2s,
  cArray = [];
var gameState = 0;
var playerCount = 0;

function preload() {
  c1Img = loadImage("car1.png");

  c2Img = loadImage("car2.png");

  tImg = loadImage("track.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.readgameState();

  c1s = createSprite(200, 50, 20, 20);
  c1s.addImage(c1Img);

  c2s = createSprite(400, 50, 20, 20);
  c2s.addImage(c2Img);

  cArray.push(c1s);
  cArray.push(c2s);

  if (gameState === 0) {
    player = new Player();
    player.readplayerCount();
    form = new Form();
    form.display();
  }
}

function draw() {
  background("white");
  if (playerCount === 2) {
    game.writegameState(1);
  }

  if (gameState === 1) {
    game.startTheGame();
  }
}
