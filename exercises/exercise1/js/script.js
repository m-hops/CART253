/**************************************************
EXERCISE 01: I LIKE TO MOVE IT MOVE IT!
MADELINE ZAYTSOFF

THE PURPOSE OF THIS PROJECT IS TO DEMONOSTRATE COMPETENCY
AND UNDERSTANDING OF MATERIALS LEARNED IN CART 253 SO FAR.

FOR FURTHER DETAILS, PLEASE CONSULT README

ALSO PLEASE NOTE THAT AUDIO WILL NOT WORK WITH CHROME;
ADVISE USING FIREFOX FOR FULL USER EXPERIENCE
**************************************************/

//GLOBAL VARIABLE SETUP//

//VARIABLES FOR HILLS//
let middleHillsSpecs = {
  fill: 150,
  paralax: 20
}
let backHillsSpecs = {
  fill: 87,
  paralax: 10
}
let frontHillsSpecs = {
  fill: 219,
  paralax: 30
}
//VARIABLE FOR SUN//
let screamingSun = {
  fill: 97
}
//VARIABLES SETUP FOR IMPORTED IMAGES//
let screamingSunImage;
let birdImage;
let birdImageSpecs = {
  x: 1200,
  y: 150,
};

function preload() {
  //PRELOAD SCREAMINGSUN IMAGE//
  screamingSunImage = loadImage('assets/images/screamingSunwithbkg.png')

  //PRELOAD BIRD IMAGE//
  birdImage = loadImage('assets/images/bird.png')

  //PRELOAD MUSIC//
  song = loadSound('assets/sounds/bkgTrack.mp3');
}

//INITIAL CANVAS SETUP//
function setup() {

  let centerCanvas = createCanvas(1000, 500);

  centerCanvas.position(100, 100, 'relative');

  noStroke();

  noCursor();

  //AUTOPLAY SONG//
  song.play();
}

function draw() {

  //TRACKING EFFECT FOR HILLS//
  let paralaxX = map(mouseX, 0, width, -1, 1);
      paralaxX = constrain(paralaxX, -1, 1);

  let frontHills = paralaxX * frontHillsSpecs.paralax;
  let middleHills = paralaxX * middleHillsSpecs.paralax;
  let backHills = paralaxX * backHillsSpecs.paralax;

  //FADE EFFECT//
  let colorFade = map(mouseY, 0, height, 0, 1);
      colorFade = constrain(colorFade, 0, 1);

  //COLOR SETTINGS & MAPPING//
  let bgr = map(colorFade, 0, 1, 255, 130);
  let bgg = map(colorFade, 0, 1, 255, 130);
  let bgb = map(colorFade, 0, 1, 158, 130);

  let backHillsR = map(colorFade, 0, 1, 179, frontHillsSpecs.fill);
  let backHillsG = map(colorFade, 0, 1, 240, frontHillsSpecs.fill);
  let backHillsB = map(colorFade, 0, 1, 165, frontHillsSpecs.fill);

  let middleHillsR = map(colorFade, 0, 1, 92, middleHillsSpecs.fill);
  let middleHillsG = map(colorFade, 0, 1, 128, middleHillsSpecs.fill);
  let middleHillsB = map(colorFade, 0, 1, 84, middleHillsSpecs.fill);

  let frontHillsR = map(colorFade, 0, 1, 49, backHillsSpecs.fill);
  let frontHillsG = map(colorFade, 0, 1, 59, backHillsSpecs.fill);
  let frontHillsB = map(colorFade, 0, 1, 43, backHillsSpecs.fill);

  let screamingSunSizeX = map(colorFade, 0, 1, 236, 10);
  let screamingSunSizeY = map(colorFade, 0, 1, 251, 10);

  //BACKGROUND//
  background(bgr, bgg, bgb);

  //SCREAMING SUN//
  image(screamingSunImage, mouseX + -65, mouseY + -50, screamingSunSizeX, screamingSunSizeY);

  //BIRD//
  birdImageSpecs.x = birdImageSpecs.x + -1.05;
  birdImageSpecs.x = constrain(birdImageSpecs.x, -350, width + 300);
  image(birdImage, birdImageSpecs.x, birdImageSpecs.y);

  //BACK HILLS//
  fill(backHillsR, backHillsG, backHillsB);
  ellipse(50 + backHills, 530, 600, 500);
  ellipse(500 + backHills, 530, 650, 550);
  ellipse(1000 + backHills, 530, 800, 400);

  //MIDDLE HILLS//
  fill(middleHillsR, middleHillsG, middleHillsB);
  ellipse(50 + middleHills, 530, 300, 400);
  ellipse(250 + middleHills, 530, 400, 150);
  ellipse(500 + middleHills, 530, 450, 220);
  ellipse(600 + middleHills, 530, 300, 500);
  ellipse(800 + middleHills, 530, 190, 400);
  ellipse(1000 + middleHills, 530, 280, 200);

  //FRONT HILLS//
  fill(frontHillsR, frontHillsG, frontHillsB);
  ellipse(0 + frontHills, 530, 200, 200);
  ellipse(250 + frontHills, 530, 400, 200);
  ellipse(500 + frontHills, 530, 150, 100);
  ellipse(600 + frontHills, 530, 300, 50);
  ellipse(800 + frontHills, 530, 200, 110);
  ellipse(1000 + frontHills, 530, 250, 180);

  //BORDER//
  fill(117, 96, 74);
  rect(0, 0, 1000, 20);
  rect(0, 480, 1000, 20);
  rect(0, 0, 20, 500);
  rect(980, 0, 20, 500);
}
