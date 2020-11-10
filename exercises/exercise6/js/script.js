/**************************************************
EXERCISE 6: MAKE SOME NOISE
MADELINE ZAYTSOFF

DESIGN TEST: ADJUST AUDIO VOLUME AND PAN DEPENDING ON LOCATION OF OBJECT ON SCREEN
**************************************************/
"use strict";

//GLOBAL VARIABLE NAMES//
let bell;
let track;
let loudness;

//USER CIRCLE IMAGE//
let circle = {
  x: 250,
  y: 250,
  size: 50,
  speed: 3
}

//YELLOW INSTRUCTIONS//
function sideText() {
  push();
  textSize(16);
  fill(216,219,48);
  textAlign(CENTER);
  text('Move with WASD.\nClick anywhere to\nactivate bell.', 420, height/2);
  pop();
}

//MOVEMENT CONTROL FOR USER//
function userControl() {
  userStartAudio();

  circle.x = constrain(circle.x, 0, width);
  circle.y = constrain(circle.y, 0, height);

  if (keyIsDown(65)) {
    circle.x -= circle.speed;
  } else if (keyIsDown(68)) {
    circle.x += circle.speed;
  } else if (keyIsDown(83)) {
    circle.y += circle.speed;
  } else if (keyIsDown(87)) {
    circle.y -= circle.speed;
  }
}

//VOLUME CONTROLS FOR KEYS//
function volumeControl() {

  //MAP OUT AUDIO LIMITS//
  loudness = map(circle.y,0,height,2.0,0.0);

  track.setVolume(loudness);

  //TEXT OUTPUT OF VOLUME NUMBERS//
  push();
  textSize(16);
  fill(50,168,82);
  text('Volume = ' + loudness,50,50);
  pop();
}

//PAN CONTROLS FOR KEYS//
function panControl() {

  //MAP OUT PAN LIMITS//
  let panning = map(circle.x, 0, width, -1.0, 1.0);

  track.pan(panning);

  //TEXT OUTPUT OF PAN NUMBERS//
  push();
  textSize(16);
  fill(168,62,50);
  text('Pan = ' + panning,50,450);
  pop();
}

//CONTROLS FOR BELL//
function mousePressed() {

  //CREATE AND MAP VARIABLES FOR VOLUME AND PAN TO MOUSEPRESSED//
  let clickLocationPan = map(mouseX,0,width,-1.0,1.0);
  let clickLocationVolume = map(mouseY,0,height,1.0,0.0);

  //LIMIT MOUSE CLICKS TO CANVAS//
  if (mouseX >= 0
    && mouseX <= width
    && mouseY >= 0
    && mouseY <= height){
  bell.play();
  bell.pan(clickLocationPan);
  bell.setVolume(clickLocationVolume);
} else return;

}

//PRELOADED AUDIO//
function preload() {
  track = loadSound('assets/sounds/audioTest.mp3');
  bell = loadSound('assets/sounds/zenBell.mp3');
}

function setup() {
  createCanvas(500, 500);

  //LOOP TONE//
  track.loop();
}

function draw() {
  background(0);

  userControl();

  push();
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();

  panControl();

  volumeControl();

  sideText();
}
