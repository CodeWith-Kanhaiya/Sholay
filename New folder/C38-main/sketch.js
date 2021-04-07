var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  console.log(displayWidth)
  console.log( displayHeight);  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  // Mam Actually I am sorry Its displaying Car racing game at bottom I forgot to save everything
  // Mafi kabul Karo.....................
  // pls see the message
  //pls see the message
  //pls see the message
  //pls
  textSize(10);
  text(mouseX +","+mouseY, displayWidth-500,displayHeight-400);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
