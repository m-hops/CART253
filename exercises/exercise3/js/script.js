/**************************************************
EXERCISE 3: LOVE, ACTUALLY
MADELINE ZAYTSOFF

"LIGHT OF MY LIFE"
PLAYER (WHO IS A PUMPKIN) NEEDS TO DODGE 19TH CENTURY POETS TO REACH THE CANDLE
**************************************************/

//GLOBAL VARIABLES//
let state = 'title';

let canvas = {
  x:1000,
  y:500,
  bkg:145
}

let userHitbox = {
  x:100,
  y:0,
  size:100,
  speed:5
}
let candleHitbox = {
  x:900,
  y:300,
  size:75,
  xspeed:1,
  yspeed:3,
  limit:0
}
let wildeHitbox = {
  x:1100,
  y:0,
  size:100,
  xspeed:0,
  yspeed:0,
  speed:6
}
let poeHitbox = {
  x:1100,
  y:0,
  size:100,
  xspeed:0,
  yspeed:0,
  speed:4.5
}

let stickOffset ={
  x:-53,
}
let candleOffset = {
  x:-39,
  y:-40
}

let titleSplashSpecs = {
  x:0,
  y:0
}
let forestBKGSpecs = {
  x:0,
  y:0,
  speed:-2
}
let loseSplashSpecs = {
  x:0,
  y:0
}
let winSplashSpecs = {
  x:0,
  y:0
}
let soundToggleSpecs = {
  x:800,
  y:-10
}

let start = {
  x:500,
  y:250,
  w:200,
  h:100
}

//SOUND ON OFF//
function toggleMusic(){
  if (!song.isPlaying()) {
  song.loop();
} else if (song.isPlaying()) {
  song.stop();
}
}

//MEDIA PRELOADS//
function preload(){
  poeImage = loadImage("assets/images/poeIcon.png");
  wildeImage = loadImage('assets/images/wildeIcon.png');
  stick1 = loadImage('assets/images/stick1.png');
  stick2 = loadImage('assets/images/stick2.png');
  candle = loadImage('assets/images/candle.png');
  pumpkin = loadImage('assets/images/playerPumpkin.png');
  titleSplash = loadImage('assets/images/title.png');
  forestBKG = loadImage('assets/images/forestBKG.png');
  loseSplash = loadImage('assets/images/lose.png');
  winSplash = loadImage('assets/images/WIN.png');
  soundToggle = loadImage('assets/images/volumeOn.png');
  song = loadSound('assets/sounds/song.mp3');
}

//SHADOW EFFECTS//
function shadowEffect(){
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
}
function shadowEffectSmall(){
  drawingContext.shadowOffsetX = 4;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 2;
  drawingContext.shadowColor = 'black';
}

//PLAYER CONTROL AND RESTRAINTS//
function userAndControls(){

  if (keyIsDown(87)) {
      userHitbox.y -= userHitbox.speed;
  } else if (keyIsDown(83)) {
      userHitbox.y += userHitbox.speed;
    }

  userHitbox.y = constrain(userHitbox.y,0,height);

  push();
  noFill();
  noStroke();
  circle(userHitbox.x,userHitbox.y,userHitbox.size);
  pop();

  push();
  imageMode(CENTER);
  shadowEffectSmall();
  image(pumpkin,userHitbox.x,userHitbox.y);
  pop();

}

//MOB SPAWN AND MOVEMENT FORMULAS//
function candleAndMovement(){

if (candleHitbox.y < candleHitbox.limit){
  candleHitbox.y += candleHitbox.yspeed;
  if (candleHitbox.y >= candleHitbox.limit){
    candleHitbox.limit = random(100,400);
  }
} else if (candleHitbox.y > candleHitbox.limit){
  candleHitbox.y -= candleHitbox.yspeed;
  if (candleHitbox.y <= candleHitbox.limit){
    candleHitbox.limit = random(100,400);
  }
}

candleHitbox.x = candleHitbox.x - candleHitbox.xspeed;

push();
noFill();
noStroke();
circle(candleHitbox.x,candleHitbox.y,candleHitbox.size);
pop();

push();
shadowEffectSmall();
image(candle,candleHitbox.x + candleOffset.x,candleHitbox.y+candleOffset.y);
pop();

}
function oscarWildSpawn(){

  wildeHitbox.x = wildeHitbox.x + -wildeHitbox.xspeed;
  wildeHitbox.y = wildeHitbox.y + -wildeHitbox.yspeed;
  if (wildeHitbox.x < -100){
    wildeHitbox.x = 1100;
    wildeHitbox.y = random(0, height);
  }

  push();
  shadowEffect();
  image(stick1,wildeHitbox.x + stickOffset.x,wildeHitbox.y);
  pop();

  push();
  circle(wildeHitbox.x,wildeHitbox.y,wildeHitbox.size);
  pop();

  push();
  shadowEffect();
  imageMode(CENTER);
  image(wildeImage,wildeHitbox.x,wildeHitbox.y);
  pop();
}
function poeSpawn(){

  poeHitbox.x = poeHitbox.x + -poeHitbox.xspeed;
  poeHitbox.y = poeHitbox.y + -poeHitbox.yspeed;
  if (poeHitbox.x < -100){
    poeHitbox.x = 1100;
    poeHitbox.y = random(0, height);
  }

  push();
  shadowEffect();
  image(stick1,poeHitbox.x + stickOffset.x,poeHitbox.y);
  pop();

  push();
  circle(poeHitbox.x,poeHitbox.y,poeHitbox.size);
  pop();

  push();
  shadowEffect();
  imageMode(CENTER);
  image(poeImage,poeHitbox.x,poeHitbox.y);
  pop();
}
function enemySpawn(){
  wildeHitbox.y = random(0,height);
  wildeHitbox.xspeed = wildeHitbox.speed;

  poeHitbox.y = random(0,height);
  poeHitbox.xspeed = poeHitbox.speed;
}

//MOVING BKG//
function movingBKG(){

  forestBKGSpecs.x = forestBKGSpecs.x + forestBKGSpecs.speed;

  image(forestBKG,forestBKGSpecs.x,forestBKGSpecs.y);
}

//DETERMINES OUTCOME OF IMPACTS//
function collision(){
  let poeDistanceX = dist(userHitbox.x + userHitbox.size / 2, userHitbox.y + userHitbox.size / 2, poeHitbox.x + poeHitbox.size / 2, poeHitbox.y + poeHitbox.size / 2);
  let wildeDistanceX = dist(userHitbox.x + userHitbox.size / 2, userHitbox.y + userHitbox.size / 2, wildeHitbox.x + wildeHitbox.size / 2, wildeHitbox.y + wildeHitbox.size / 2);
  let candleDistanceX = dist(userHitbox.x + userHitbox.size / 2, userHitbox.y + userHitbox.size / 2, candleHitbox.x + candleHitbox.size / 3, candleHitbox.y + candleHitbox.size / 3);


  if (poeDistanceX < userHitbox.size / 2){
    state = 'lose';
  }else if (wildeDistanceX < userHitbox.size / 2){
    state = 'lose';
  }else if (candleDistanceX < userHitbox.size / 2){
    state = 'win';
  }else if (candleHitbox.x < 0){
    state = 'lose';
  }
}

//MENUS//
function title(){

reset();

image(titleSplash,titleSplashSpecs.x,titleSplashSpecs.y);

image(soundToggle,soundToggleSpecs.x,soundToggleSpecs.y);

}
function play(){

  collision()

  movingBKG();

  candleAndMovement();

  userAndControls();

  oscarWildSpawn();

  poeSpawn();

}
function lose(){

image (loseSplash,loseSplashSpecs.x,loseSplashSpecs.y);

}
function win(){

image(winSplash,winSplashSpecs.x,winSplashSpecs.y);

}

//RESET GAME UPON REPLAY//
function reset(){
  candleHitbox.x = 900;
  wildeHitbox.x = 1100;
  poeHitbox.x = 1100;
  forestBKGSpecs.x = 0;
}

//MENU NAVIGATION//
function mousePressed(){
  if (state === 'title'){
    if (mouseX > 895 && mouseX < 945){
      if (mouseY > 40 && mouseY < 90){
        toggleMusic();
      }
    }
  }
  if (state === 'title'){
    if (mouseX > 829 && mouseX < 979){
      if (mouseY > 300 && mouseY < 480){
        state ='play';
      }
    }
  }
  if (state === 'lose'){
    state = 'title';
  }
  if (state === 'win'){
    state = 'title';
  }
}

//PROGRAM SETUP COMMANDS//
function setup() {

createCanvas(canvas.x,canvas.y);

noStroke();

candleHitbox.limit = random(0,height);

enemySpawn();

toggleMusic();

song.loop();
}

//MENU HIERARCHY//
function draw() {

background(canvas.bkg);

if (state === 'title'){
  title();
}else if (state === 'play'){
  play();
}else if (state === 'lose'){
  lose();
}else if (state === 'win'){
  win();
}
}
