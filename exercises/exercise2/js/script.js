/**************************************************
Exercise 2: Dodge 'em
Madeline Zaytsoff

A "simple" dodge game controlled by the keys
**************************************************/
//GLOBAL VARIABLE SETUP//

//BACKGROUND COLOR VARIABLE//
let backgroundTone = 0;

//BLANK VARIABLES//
let pan;
let book;
let spoop;
let hallway;

//VISUAL ASSET VARIABLES//
let panSpecs = {
  x: 1100,
  y: 0,
  vx: 0,
  vy: 0,
  va: 5,
  speed: 6,
  size: 50,
  angle: 0
}
let bookSpecs = {
  x: 1200,
  y: 0,
  vx: 1050,
  vy: 0,
  speed: 7,
  size: 50,
}
let spoopSpecs = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  speed: 5,
  sizeX: 125,
  sizeY: 200,
  alpha: 200,
  alphacolor: 255
}
let hallwaySpecs = {
  x: 0,
  y: 0,
  vx: 0,
  speed: 5
}
let gameoverGhostSpecs = {
  x: 250,
  y: 190,
  alpha: 200,
  alphacolor: 255
}
let gameoverFontSpecs = {
  x: 450,
  y: 50
}
let titleSpecs = {
  x: 110,
  y: 100
}

//INVISIBLE ASSET VARIABLES//
let spoopHitbox = {
  x: 0,
  y: 0,
  width: 112,
  height: 195,
  alpha: 0
}
let panHitbox = {
  x: 1100,
  y: 0,
  width: 100,
  height: 100,
  vx: 0,
  vy: 0,
  alpha: 0
}
let bookHitbox = {
  x: 1200,
  y: 0,
  width: 90,
  height: 90,
  vx: 1050,
  vy: 0,
  alpha: 0
}

//ASSORTED VARIABLES//
let keyboardControl = {
  left: 5,
  right: 5,
  up: 5,
  down: 5
}
let offScreenStart = {
  x: 1100
}
let playerBoundary = {
  top: -100,
  bottom: 400,
  left: 0,
  right: 1000
}

//PRE LOAD IMAGES AND SOUNDS//
function preload() {
  pan = loadImage('assets/images/Pan.png');
  book = loadImage('assets/images/Book.png');
  spoop = loadImage('assets/images/Spoop.png');
  hallway = loadImage('assets/images/hallway.png');
  music = loadSound('assets/sounds/soundtrackshort.mp3');
  gameover = loadSound('assets/sounds/gameover.mp3');
  gameoverGhost = loadImage('assets/images/gameoverghost.png');
  gameoverFont = loadImage('assets/images/gameoverFont.png');
  title = loadImage('assets/images/title.png');
}

//SETUP PARAMETERS//
function setup() {

  start = 0;

  //CANVAS CREATION//
  createCanvas(1000, 500);

  //HIDE CURSOR//
  noCursor();

  //PAN & PAN HITBOX SPEED AND SPAWN VARIABLES//
  panSpecs.y = random(0, height);
  panSpecs.vx = panSpecs.speed;
  panHitbox.y = panSpecs.y + -panSpecs.size;
  panHitbox.x = panSpecs.x + -panSpecs.size;
  panHitbox.vx = panSpecs.speed;

  //BOOK & BOOK HITBOX SPEED AND SPAWN VARIABLES//
  bookSpecs.y = random(0, height);
  bookSpecs.vx = bookSpecs.speed;
  bookHitbox.y = bookSpecs.y;
  bookHitbox.vx = bookSpecs.speed;

  //HALLWAY MOVEMENT//
  hallwaySpecs.vx = hallwaySpecs.speed;

  //CHANGE ANGLE MODE//
  angleMode(DEGREES);

}

function keyPressed() {

  //LINK ENTER KEY TO STARTING MUSIC AND GAME//
  if (keyCode === ENTER) {
    start = 1;

    //MUSIC START//
    music.play();
  }
}

//ACTIVE GAME//
function draw() {

  //CLEAR OUT FORMER SCREEN//
  if (start === 0) {
    image(hallway, hallwaySpecs.x, hallwaySpecs.y);
    image(title, titleSpecs.x, titleSpecs.y);

  //BEGINNING OF GAME IF ENTER PRESSED//
  } else if (start === 1) {

    //BACKGROUND COLOR//
    background(backgroundTone);

    //PAN IMAGE MOVEMENT FORMULA//
    panSpecs.x = panSpecs.x + -panSpecs.vx;
    panSpecs.y = panSpecs.y + panSpecs.vy;
    panSpecs.angle = panSpecs.angle + panSpecs.va;

    //PAN HITBOX MOVEMENT FORMULA//
    panHitbox.x = panHitbox.x + -panHitbox.vx;
    panHitbox.y = panHitbox.y + panHitbox.vy;

    //BOOK IMAGE MOVEMENT FORMULA//
    bookSpecs.x = bookSpecs.x + -bookSpecs.vx;
    bookSpecs.y = bookSpecs.y + bookSpecs.vy;

    //BOOK HITBOX MOVEMENT FORMULA//
    bookHitbox.x = bookHitbox.x + -bookHitbox.vx;
    bookHitbox.y = bookHitbox.y + bookSpecs.vy;

    //HALLWAY MOVEMENT FORMULA//
    hallwaySpecs.x = hallwaySpecs.x + -hallwaySpecs.vx;

    //CONDITIONALS TO RESET PAN AND PAN HITBOX//
    if (panSpecs.x < -100) {
      panSpecs.x = offScreenStart.x;
      panSpecs.y = random(0, height);
      panHitbox.x = panSpecs.x + -panSpecs.size;
      panHitbox.y = panSpecs.y + -panSpecs.size;
    }

    //CONDITIONALS TO RESET BOOK AND BOOK HITBOX//
    if (bookSpecs.x < -200) {
      bookSpecs.x = offScreenStart.x;
      bookSpecs.y = random(0, height);
      bookHitbox.x = bookSpecs.x;
      bookHitbox.y = bookSpecs.y;
    }

    //CONDITIONAL TO RESET HALLWAY//
    if (hallwaySpecs.x < -952) {
      hallwaySpecs.x = 0;
    }

    //MOVEMENT CONTROLS FOR PLAYER/SPOOP//
    if (keyIsDown(LEFT_ARROW)) {
      spoopSpecs.x -= keyboardControl.left;
    } else if (keyIsDown(RIGHT_ARROW)) {
      spoopSpecs.x += keyboardControl.right;
    } else if (keyIsDown(UP_ARROW)) {
      spoopSpecs.y -= keyboardControl.up;
    } else if (keyIsDown(DOWN_ARROW)) {
      spoopSpecs.y += keyboardControl.down;
    }

    //PLAYER/SPOOP MOVEMENT CONSTRAINTS//
    spoopSpecs.x = constrain(spoopSpecs.x, playerBoundary.left, playerBoundary.right);
    spoopSpecs.y = constrain(spoopSpecs.y, playerBoundary.top, playerBoundary.bottom);
    spoopHitbox.x = spoopSpecs.x;
    spoopHitbox.y = spoopSpecs.y;

    //VARIBLES FOR COLLISION DETECTION//
    let panDistanceX = dist(spoopHitbox.x + spoopHitbox.width / 2, 0, panHitbox.x + panHitbox.width / 2, 0);
    let panDistanceY = dist(0, spoopHitbox.y + spoopHitbox.height / 2, 0, panHitbox.y + panHitbox.height / 2);
    let bookDistanceX = dist(spoopHitbox.x + spoopHitbox.width / 2, 0, bookHitbox.x + bookHitbox.width / 2, 0);
    let bookDistanceY = dist(0, spoopHitbox.y + spoopHitbox.height / 2, 0, bookHitbox.y + bookHitbox.height / 2);

    //CALLED UP HALLWAY IMAGE//
    image(hallway, hallwaySpecs.x, hallwaySpecs.y);

    //CONDITIONALS FOR COLLISION SPOOP/PLAYER VS. BOOK/BOOT HITBOX//
    if (bookDistanceX < spoopHitbox.width / 2 + bookHitbox.width / 2 &&
      bookDistanceY < spoopHitbox.height / 2 + bookHitbox.height / 2)

    //KILL IMAGES FOR PAN/BOOK/SPOOP & LOAD GAME OVER SCREEN ASSETS//
    {
      noLoop();
      music.disconnect();
      gameover.play();
      image(gameoverFont, gameoverFontSpecs.x, gameoverFontSpecs.y);
      tint(gameoverGhostSpecs.alphacolor, gameoverGhostSpecs.alpha);
      push();
      image(gameoverGhost, gameoverGhostSpecs.x, gameoverGhostSpecs.y);
      pop();
      return;
    }

    //CONDITIONALS FOR COLLISION SPOOP/PLAYER VS. PAN/PAN HITBOX//
    if (panDistanceX < spoopHitbox.width / 2 + panHitbox.width / 2 &&
      panDistanceY < spoopHitbox.height / 2 + panHitbox.height / 2)

    //KILL IMAGES FOR PAN/BOOK/SPOOP & LOAD GAME OVER SCREEN ASSETS//
    {
      noLoop();
      music.disconnect();
      gameover.play();
      push();
      image(gameoverFont, gameoverFontSpecs.x, gameoverFontSpecs.y);
      tint(gameoverGhostSpecs.alphacolor, gameoverGhostSpecs.alpha);
      image(gameoverGhost, gameoverGhostSpecs.x, gameoverGhostSpecs.y);
      pop();
      return;
    }

    //CALLED UP SPOOP AND SPOOP HITBOX//
    push();
    tint(spoopSpecs.alphacolor, spoopSpecs.alpha);
    image(spoop, spoopSpecs.x, spoopSpecs.y);
    noFill();
    noStroke();
    rect(spoopHitbox.x, spoopHitbox.y, spoopHitbox.width, spoopHitbox.height);
    pop();

    //CALLED UP PAN AND PAN HITBOX AND SETUP ROTATION//
    push();
    noFill();
    noStroke();
    rect(panHitbox.x, panHitbox.y, panHitbox.width, panHitbox.height);
    translate(panSpecs.x, panSpecs.y);
    rotate(panSpecs.angle);
    image(pan, -panSpecs.size, -panSpecs.size);
    pop();

    //CALLED UP BOOK AND BOOK HITBOX//
    push();
    noFill();
    noStroke();
    rect(bookHitbox.x, bookHitbox.y, bookHitbox.width, bookHitbox.height);
    translate(bookSpecs.x, bookSpecs.y);
    image(book, 0, 0);
    pop();
  }
}
