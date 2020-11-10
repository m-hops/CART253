/**************************************************
EXERCISE 4
AGE OF AQUARIUM

VIRUS FARM
PLAY AS AN ANTI-VIRUS WHOSE TASK IS TO DESTROY VIRUSES
KEPT IN QUARANTINE
**************************************************/
"use strict";

//EMPTY IMAGE LET STATEMENTS//
let plyrIcon;
let overlay;
let enemy;
let startScreen;
let border;
let loseScreenSplash;
let winSplashScreen;

//MENY NAVIGATION VARIABLES//
let menu = 0;
let menuOnEnter;

//ARRAYS FOR MOBS//
let virus = [];
let enemyVirus = [];
let virusImages = [];

//POPULATION CONTROL FOR MOBS//
let smVirusPop = 5;
let medVirusPop = 6;
let lrgVirusPop = 7;
let enemyVirusPop = 2;

//MOB DIMENSION VARIABLES//
let smVirusSpec = {
  x: 0,
  y: 0,
  speed: 1,
  height: 25,
  width: 50,
  vx: 0,
  vy: 0,
  overlay: 0
}
let medVirusSpec = {
  x: 0,
  y: 0,
  speed: 3,
  height: 50,
  width: 75,
  vx: 0,
  vy: 0,
  overlay: 1
}
let lrgVirusSpec = {
  x: 0,
  y: 0,
  speed: 2,
  height: 75,
  width: 100,
  vx: 0,
  vy: 0,
  overlay: 2
}
let enemyVirusSpec = {
  x: 0,
  y: 0,
  speed: 8,
  height: 30,
  width: 50,
  vx: 0,
  vy: 0,
  overlay: 3
}

//PLAYER VARIABLE//
let player = {
  x: 0,
  y: 0,
  width: 75,
  height: 40,
  color: 255
}

//MENU NAVIGATION FUNCTION//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
}

//VIRUS CREATOR THAT GENERATES REQUIRED DIMENSIONAL PARAMTERES INTO ONE FUNCTION//
function createVirus(spec) {
  let virus = {
    x: random(0, width),
    y: random(0, height),
    height: spec.height,
    width: spec.width,
    vx: 0,
    vy: 0,
    speed: spec.speed,
    overlay: spec.overlay,
    alive: true,
  };
  return virus;
}

//ENEMY CREATOR THAT THAT GENERATES REQUIRED DIMENSIONAL PARAMETERS INTO ONE FUNCTION//
//NOTE: THIS WAS CREATED IN ADDITION TO STANDARD VIRUS CREATOR DUE TO START POINT DIFFERENCES//
function createEnemy(spec) {
  let enemyVirus = {
    x: random(100, width),
    y: random(0, 100),
    height: spec.height,
    width: spec.width,
    vx: 0,
    vy: 0,
    speed: spec.speed,
    overlay: spec.overlay,
    alive: true,
  };
  return enemyVirus;
}

//MOB MOVEMENT PARAMETERS//
function moveVirus(spec) {

//CONDITIONAL TO CHECK IF MOB IS STILL PRESENT ON SCREEN AND NOT BEEN DEACTIVATED BY USER//
  if (spec.alive) {
    let move = random(0, 1);
    if (move < 0.1) {
      spec.vx = random(-spec.speed, spec.speed);
      spec.vy = random(-spec.speed, spec.speed);
    }

//STANDARD MOVEMENT FORMULA//
    spec.x = spec.x + spec.vx;
    spec.y = spec.y + spec.vy;

//CONSTRAIN ALL MOVEMENT FOR MOBS TO IN THE CANVAS BORDER//
    spec.x = constrain(spec.x, 19, width - 115);
    spec.y = constrain(spec.y, 12, height - 100);
  }
}

//VIRUS HITBOX GENERATION AND OVERLAY//
function drawVirus(spec) {
  if (spec.alive) {
    push();
    noFill();
    rect(spec.x, spec.y, spec.width, spec.height);
    pop();

    push();
    image(virusImages[spec.overlay], spec.x, spec.y);
    pop();
  }
}

//ENEMY HITBOX GENERATION AND OVERLAY//
function drawEnemy(spec) {
  if (spec.alive) {
    push();
    noFill();
    rect(spec.x, spec.y, spec.width, spec.height);
    pop();

    push();
    image(enemy, spec.x, spec.y);
    pop();
  }
}

//CALL FOR GENERATION OF DIFFERENT VIRUSES USING ARRAYS//
function virusSetup() {

//NOTE: IN THE INTEREST OF WORKFLOW OPTIMIZATION IN LATER FUNCTIONS, VIRUS [I] HAS ALL POPULATIONS OF VIRUSES ADDED TO IT//
  for (let i = 0; i < smVirusPop; i++) {
    virus[i] = createVirus(smVirusSpec);
  }

  for (let i = 0; i < medVirusPop; i++) {
    virus[i + smVirusPop] = createVirus(medVirusSpec);
  }

  for (let i = 0; i < lrgVirusPop; i++) {
    virus[i + smVirusPop + medVirusPop] = createVirus(lrgVirusSpec);
  }
}

//ENEMY POPULATION CREATION USING ENEMYVIRUSPOP VARIABLE//
function enemySetup() {
  for (let i = 0; i < enemyVirusPop; i++) {
    enemyVirus[i] = createVirus(enemyVirusSpec);
  }
}

//SPAWNS VIRUSES USING PREVIOUS FUNCTIONS AND LINKS ALL NECESSARY INFORMATION TOGETHER//
function virusSpawn() {
  for (let i = 0; i < smVirusPop + medVirusPop + lrgVirusPop; i++) {
    moveVirus(virus[i]);
    drawVirus(virus[i]);
  }
}

//SPAWNS ENEMIES USING PREVIOUS FUNCTIONS AND LINKS ALL NECESSARY INFORMATION TOGETHER//
function enemySpawn() {
  for (let i = 0; i < enemyVirusPop; i++) {
    moveVirus(enemyVirus[i]);
    drawEnemy(enemyVirus[i]);
  }
}

//SQUARE BOX HIT DETECTION FORMULA PT.1 OF 3//
function isPointInBox(x, y, boxX, boxY, boxWidth, boxHeight) {
//CHECKS PLAYER DIMENSIONS AGAINST A MOB//
  return (x >= boxX && y >= boxY && x <= boxX + boxWidth && y <= boxY + boxHeight);
}

//SQUARE BOX HIT DETECTION FORMULA PT.2 OR 3//
function boxIntersection(boxAX, boxAY, boxAWidth, boxAHeight, boxBX, boxBY, boxBWidth, boxBHeight) {
//RUNS CHECK ON ALL KNOWN CONFIGURATION OF TWO BOXES COLLIDING//
  if (isPointInBox(boxAX, boxAY, boxBX, boxBY, boxBWidth, boxBHeight)) {
    return true;
  }
  if (isPointInBox(boxAX + boxAWidth, boxAY, boxBX, boxBY, boxBWidth, boxBHeight)) {
    return true;
  }
  if (isPointInBox(boxAX + boxAWidth, boxAY + boxAHeight, boxBX, boxBY, boxBWidth, boxBHeight)) {
    return true;
  }
  if (isPointInBox(boxAX, boxAY + boxAHeight, boxBX, boxBY, boxBWidth, boxBHeight)) {
    return true;
  }
  if (isPointInBox(boxBX, boxBY, boxAX, boxAY, boxAWidth, boxAHeight)) {
    return true;
  }
  return false;
}

//NAVIGATION CONTROLS & VIRUS HIT DETECTION FORMULA PT.3 OF 3//
function mousePressed() {
//STANDARD MENU NAV FOR MENU 0//
  if (menu == 0) {
    goToMenu(1)
  }

  if (menu == 1) {
//CHECKS IF VIRUS IS IN PLAYER HITBOX//
    for (let i = 0; i < smVirusPop + medVirusPop + lrgVirusPop; i++) {
      if (boxIntersection(player.x, player.y, player.width, player.height, virus[i].x, virus[i].y, virus[i].width, virus[i].height)) {
        virus[i].alive = false;
      }
    }
  }

//STANDARD MENU NAV FOR MENU LOSE//
  if (menu == 'lose') {
    goToMenu(0);
  }

//STANDARD MENU NAV FOR MENU WIN//
  if (menu == 'win') {
    goToMenu(0);
  }
}

//FUNCTION WHICH DICTATES WHAT HAPPENS IF ENEMY TOUCHES PLAYER//
function gameOver() {
  if (menu == 1) {
    for (let i = 0; i < enemyVirusPop; i++) {
      if (boxIntersection(player.x, player.y, player.width, player.height, enemyVirus[i].x, enemyVirus[i].y, enemyVirus[i].width, enemyVirus[i].height)) {
        goToMenu('lose');
      }
    }
  }
}

//FUNCTION WHICH DICTATES WHAT HAPPENS IF ALL VIRUSES ARE DELETED//
function youWin() {
  let population = smVirusPop + medVirusPop + lrgVirusPop;

  if (menu == 1) {
    for (let i = 0; i < population; i++) {
      if (virus[i].alive) {
        return
      }
    }
    goToMenu('win');
  }
}

//RESETS MOBS AFTER GAME IS RESET//
function resetGame() {
  smVirusPop = 5;
  medVirusPop = 6;
  lrgVirusPop = 7;
  enemyVirusPop = 2;

  enemyVirusSpec.x = 0;
  enemyVirusSpec.y = 0;
}

//DRAWS OUT PLAYER CROSSHAIRS, HITBOX, AND CONSTRAINS MOVEMENT TO CANVAS//
function playerCall() {
  let mouseConstrainX = constrain(mouseX, 0, width);
  let mouseConstrainY = constrain(mouseY, 0, height);

  player.x = mouseConstrainX - player.width / 2;
  player.y = mouseConstrainY - player.height / 2;

  push();
  noFill();
  rect(player.x, player.y, player.width, player.height);
  pop();

  push();
  tint(player.color);
  image(plyrIcon, player.x, player.y);
  pop();
}

//PRELOAD OF EXTERNAL IMAGES//
function preload() {
  plyrIcon = loadImage('assets/images/player.png');
  overlay = loadImage('assets/images/overlay.png');
  virusImages[0] = loadImage('assets/images/smVirus.png');
  virusImages[1] = loadImage('assets/images/medVirus.png');
  virusImages[2] = loadImage('assets/images/lrgVirus.png');
  enemy = loadImage('assets/images/enemy.png');
  startScreen = loadImage('assets/images/start.png');
  border = loadImage('assets/images/border.png');
  loseScreenSplash = loadImage('assets/images/lose.png');
  winSplashScreen = loadImage('assets/images/win.png');
}

//GRAPHICAL OVERLAY OF COMPUTER LINES//
function overlayLines() {
  image(overlay, 0, 0);
}

//DOTTED LINES OCCASIONALLY CALLED UP AROUND CANVAS//
function borderWalls() {
  image(border, 0, 0);
}

//STANDARD CANVAS CREATION; ONLY NOTE IS REMOVAL OF STROKES TO SHAPES AND REMOVAL OF VISUAL CURSOR//
function setup() {

  createCanvas(600, 600);

  noCursor();

  noStroke();
}

function draw() {
  background(0);

//START SCREEN PARAMETERS//
  if (menu == 0) {

    virusSetup();

    enemySetup();

    resetGame();

    image(startScreen, 0, 0);

    overlayLines();
  }

//PLAY SCREEN PARAMETERS//
  if (menu == 1) {

    borderWalls();

    virusSpawn();

    enemySpawn();

    gameOver();

    youWin();

    overlayLines();

  }

//WIN SCREEN PARAMETERS//
  if (menu == 'win') {

    image(winSplashScreen,0,0);

    overlayLines();

  }

//LOSE SCREEN PARAMETERS//
  if (menu == 'lose') {

    image(loseScreenSplash, 0, 0);

    overlayLines();
  }

//PLAYER MOUSE OVERLAY AND CONTROLS//
  playerCall();

}
