/**************************************************
EXERCISE 5: JUGGLE GARDEN
MADELINE ZAYTSOFF

BREAKOUT FOR SADISTS
**************************************************/
"use strict";

//GLOBAL VARIABLES FOR OBJECT FILES//
let player;
let ball;
let tile;

//GLOBAL VARIABLE NAMES FOR IMAGES//
let startSplash;
let loseSplash;
let winSplash;
let blankBKG;
let ballOverlay;
let playerOverlay;
let tileOverlay;
let borderOverlay;

//VARIABLES FOR MENU CONDITIONALS//
let menu = 'start';
let menuOnEnter;

//GLOBAL TILE ARRAY AND PARAMETERS//
let tiles = [];
let row = 6;
let col = 5;
let spacingX = 105;
let spacingY = 25;
let tileOffsetX = 5;
let tileOffsety = 5;

//INITIAL TILE SETUP CALLED DURING SETUP//
function tilesSetup() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let tile = new Tile(j * spacingX + tileOffsetX, i * spacingY + tileOffsety);
      tiles.push(tile);
    }
  }
}

//MENU NAVIGATION//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
}

//MOUSE CLICK IS USED TO PROGRESS BETWEEN START, WIN, AND LOSE SCREENS//
function mousePressed() {
  if (menu == 'start') {
    goToMenu('play');
  }
  if (menu == 'lose' || menu == 'win'){
    goToMenu('start');
  }
}

//CALLS IMAGES FOR TILES//
function callTileDraw() {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].drawTile();
  }
}

//SETS TILES IN ARRAY TO FALSE ONCE BALL MAKES CONTACT AS WELL AS SPEED & DIRECTION ADJUSTMENTS//
function tilesCollision() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].active) {
      if (tiles[i].distanceToPoint(ball.x, ball.y) < ball.size / 2) {

        //REMOVES TILE IN ARRAY FROM SCREEN//
        tiles[i].active = false;

        //ADJUSTS BALL VELOCITY DEPENDING ON POINT OF IMPACT//
        if (ball.x < tiles[i].x || ball.x > tiles[i].x + tiles[i].w) {
          ball.vx *= -1.02;
        } else {
          ball.vy *= -1.02;
        }
      }
    }
  }
}

//WHEN BALL HITS BOTTOM OF SCREEN//
function loseGame() {
  if (menu == 'play') {
    if (ball.y >= height) {
      goToMenu('lose')
    }
  }
}

//WHEN ALL TILES ARE REMOVED AND PLAYER WINS//
function winGame() {
  if (menu == 'play') {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].active) {
        return
      }
    }
    goToMenu('win');
  }
}

//RESETS TILE POSITION AND BALL POSITION AFTER A GAME PLAYED//
function resetGamePieces() {
      ball.reset();
for (let i = 0; i < tiles.length; i++){
      tiles[i].reset();
    }
}

//PLAY MENU FUNCTIONS AND OBJECTS//
function playMenu(){

image(blankBKG,0,0);

callTileDraw();

player.drawPlayer();
player.controls();

ball.drawBall();
ball.move();
ball.bounce(player);

tilesCollision();

loseGame();
winGame();
}

//START MENU FUNCTIONS AND OBJECTS//
function startMenu(){
  resetGamePieces();

  image(startSplash,0,0);
}

//LOSE MENU OVERLAY IMAGE//
function loseMenu(){
  image(loseSplash,0,0);
}

//WIN MENU OVERLAY IMAGE//
function winMenu(){
  image(winSplash,0,0);
}

//IMAGE PRELOADS//
function preload(){
  startSplash = loadImage('assets/images/start.png');
  blankBKG = loadImage('assets/images/blankBKG.png');
  playerOverlay = loadImage('assets/images/player.png');
  ballOverlay = loadImage('assets/images/ball.png');
  tileOverlay = loadImage('assets/images/tile.png');
  borderOverlay = loadImage('assets/images/border.png');
  loseSplash = loadImage('assets/images/lose.png');
  winSplash = loadImage('assets/images/win.png');
}

//DIMENSION OF CANVAS,REMOVAL OF CURSOR, AND PRIME TILES TO BE CALLED//
function setup() {
  createCanvas(530, 400);

  noCursor();

  tilesSetup();

//DEFINE OBJECT FILES//
  ball = new Ball(width / 2, height / 2);
  player = new Player(125, 25);
}

function draw() {
  background(0);

//MENU ENVIROMENTS//
  if (menu == 'start') {
  startMenu();
  }

  if (menu == 'play') {
    playMenu();
  }

  if (menu == 'lose') {
    loseMenu();
  }

  if (menu == 'win') {
    winMenu();
  }

  image(borderOverlay,0,0);
}
