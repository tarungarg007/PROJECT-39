var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var fruit1,fruit2,fruit3,fruit4,fruits;
var track,appleimg,bananaimg,cherryimg,orangeimg;

function preload(){
  
track=loadImage("track.jpg");
appleimg=loadImage("apple.png");
bananaimg=loadImage("BANANA.png");
cherryimg=loadImage("cherry.png");
orangeimg=loadImage("orange.png");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
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
}
