//GLOBAL MENU AND SCREEN GLOBALS//
let menu = 0;
let menuOnEnter;
let backgroundShade = 0;
let time = 0;

//GLOBAL TIMERS//
let countdownFont;
let bigTimerSpecs = {
  x: 860,
  y: 105,
  time: 60,
  size: 40,
  color: {
    r: 193,
    g: 17,
    b: 17
  }
}
let handTimesSpecs = {
  x: 0,
  y: 0,
  time: 6
}

//GLOBAL VISUAL VARIABLES//
let canvasSpecs = {
  x: 1000,
  y: 500
}
let titleSpecs = {
  x: 0,
  y: 0,
  speed: 0.005,
  arc: 10
}
let frameSpecs = {
  x: 0,
  y: 0
}
let topWhiteBarSpecs = {
  x: 0,
  y: 0,
  width: 1000,
  height: 10
}
let startScreenBackgroundSpecs = {
  x: -40,
  y: 0,
  width: 1000,
  height: 500,
  paralaxX: 10,
  paralaxY: 10
}
let runSpecs = {
  x: 0,
  y: 0,
  speed: 0.003,
  arc: 5
}
let howToPlaySpecs = {
  x: 0,
  y: 0,
  speed: 0.003,
  arc: 3
}
let howToPlayScreenSpecs = {
  x: 0,
  y: 0
}
let spotlightSpecs = {
  offsetX: -1300,
  offsetY: -800,
}
let pointerSpecs = {
  radius: 5,
  weight: 2,
  color: {
    r: 35,
    g: 36,
    b: 16,
  }
}
let backButtonSpecs = {
  x: 0,
  y: 0,
  speed: 0.005,
  arc: 5
}
let archSpecs = {
  x: 0,
  y: 0,
  paralaxX: 50
}
let hallModule1Specs = {
  x: 0,
  y: 0,
  speed: 5,
  constraint: 180
}
let hallModule2Specs = {
  x: 0,
  y: 0,
  speed: 10,
  constraint: 370
}
let hallModule3Specs = {
  x: 0,
  y: 0,
  speed: 15,
  constraint: 570
}
let hallModule4Specs = {
  x: 0,
  y: 0,
  speed: 20,
  constraint: 770
}
let startVidBKGSpecs = {
  x: 0,
  y: 0
}
let loadingSpecs = {
  x: 550,
  y: 450,
  size: 40,
  time: 4000,
}
let loseSpecs = {
  x: 0,
  y: 0,
}
let againSpecs = {
  x: 725,
  y: 330,
  speed: 0.003,
  arc: 3
}
let bleedScreenSpecs = {
  x: 0,
  y: 0,
  alpha: 255,
  speed: 2,
  color: {
    r: 193,
    g: 17,
    b: 17
  }
}

//HALLWAY CENTERING//
let hall2Offset = {
  x:75,
  y1:100,
  y2:100,
  y3:100,
  y4:100
}
let hall4Offset = {
  y1:30,
  x1:0,
  x2:40,
  x3:45,
  x4:40
}

//GLOBAL VOLUME CONTROL//
let musicOption = true;
let volumeSpecs = {
  x: 0,
  y: 0
}

//GLOBAL INVISIBLE BOXES//
let playerBoundary = {
  left: -100,
  right: 1100,
  top: -150,
  bottom: 650
}

//MENU NAVIGATION AND TRUE FALSE TRIGGER//
function goToMenu(menuID) {
  menu = menuID;
  menuOnEnter = true;
  toggleMusic();
}
//EXTERNAL MEDIA//
function preload() {
  frame = loadImage('assets/images/frame.png');
  title = loadImage('assets/images/Title.png');
  startScreenBackground = loadImage('assets/images/startScreenBackground.png');
  spotlight = loadImage('assets/images/Spotlight Effect.png');
  run = loadImage('assets/images/run.png');
  howToPlay = loadImage('assets/images/howtoplay.png');
  howToPlayScreen = loadImage('assets/images/howtoplayscreen.png');
  backButton = loadImage('assets/images/back.png');
  hand0 = loadImage('assets/images/countdown/0.png');
  hand1 = loadImage('assets/images/countdown/1.png');
  hand2 = loadImage('assets/images/countdown/2.png');
  hand3 = loadImage('assets/images/countdown/3.png');
  hand4 = loadImage('assets/images/countdown/4.png');
  hand5 = loadImage('assets/images/countdown/5.png');
  arch = loadImage('assets/images/hallpieces/arch.png')
  hallModule1 = loadImage('assets/images/hallpieces/module1.png');
  hallModule2 = loadImage('assets/images/hallpieces/module2.png');
  hallModule3 = loadImage('assets/images/hallpieces/module3.png');
  hallModule4 = loadImage('assets/images/hallpieces/module4.png');
  startVidBKG = loadImage('assets/images/startVidBKG.png')
  lose = loadImage('assets/images/gameOver.png');
  again = loadImage('assets/images/again.png');
  win = loadImage('assets/images/win.png');
  volume = loadImage('assets/images/volumeOn.png');
  hall2Module1 = loadImage('assets/images/hallpieces2/hall2piece1.png');
  hall2Module2 = loadImage('assets/images/hallpieces2/hall2piece2.png');
  hall2Module3 = loadImage('assets/images/hallpieces2/hall2piece3.png');
  hall2Module4 = loadImage('assets/images/hallpieces2/hall2piece4.png');
  hall3Module1 = loadImage('assets/images/hallpieces3/hall3piece1.png');
  hall3Module2 = loadImage('assets/images/hallpieces3/hall3piece2.png');
  hall3Module3 = loadImage('assets/images/hallpieces3/hall3piece3.png');
  hall3Module4 = loadImage('assets/images/hallpieces3/hall3piece4.png');
  hall4Module1 = loadImage('assets/images/hallpieces4/hall4piece1.png');
  hall4Module2 = loadImage('assets/images/hallpieces4/hall4piece2.png');
  hall4Module3 = loadImage('assets/images/hallpieces4/hall4piece3.png');
  hall4Module4 = loadImage('assets/images/hallpieces4/hall4piece4.png');
  countdownFont = loadFont('assets/font/countDownFont.ttf');
  gtfo = loadSound('assets/sounds/GTFO.mp3');
  theme = loadSound('assets/sounds/theme.wav');
  hall = loadSound('assets/sounds/hall.mp3');
  loseSong = loadSound('assets/sounds/Lose.mp3');
  winSong = loadSound('assets/sounds/win.mp3');
}
//BASIC BACKGROUND SETUP//
function setup() {
  createCanvas(canvasSpecs.x, canvasSpecs.y);

  noStroke();

  noCursor();

  toggleMusic();
}
//MUSIC CONDITIONAL//
function toggleMusic() {

  if (musicOption == false) {
    theme.stop();
  } else if (menu != 0 && menu != 1) {
    theme.stop();
  } else if (!theme.isPlaying()) {
    theme.loop();
  }

  if (musicOption == false) {
    gtfo.stop();
  } else if (menu != 'loading') {
    gtfo.stop();
  } else if (!gtfo.isPlaying()) {
    gtfo.play();
  }

  if (musicOption == false) {
    hall.stop();
  } else if (menu != 2 && menu != 3 && menu != 4 && menu != 5) {
    hall.stop();
  } else if (!hall.isPlaying()) {
    hall.play();
  }

  if (musicOption == false) {
    loseSong.stop();
  } else if (menu != 'lose') {
    loseSong.stop();
  } else if (!loseSong.isPlaying()) {
    loseSong.loop();
  }

  if (musicOption == false) {
    winSong.stop();
  } else if (menu != 'win') {
    winSong.stop();
  } else if (!winSong.isPlaying()) {
    winSong.loop();
  }
}
//CROSSHAIR//
function pointer() {
  push();
  stroke(pointerSpecs.color.r, pointerSpecs.color.g, pointerSpecs.color.b);
  strokeWeight(pointerSpecs.weight);
  noFill();
  circle(mouseX, mouseY, pointerSpecs.radius);
  pop();
}
//DEOCRATIVE FRAME//
function outerFrame() {
  push();
  noStroke();

  //WHITE BARRIER BAR AT TOP OF SCREEN//
  rect(topWhiteBarSpecs.x, topWhiteBarSpecs.y, topWhiteBarSpecs.width, topWhiteBarSpecs.height);

  //OUTER FRAME//
  image(frame, frameSpecs.x, frameSpecs.y);
  pop();
}
//STATIC EFFECT//
function staticEffect() {

  //STATIC EFFECT//
  for (let i = 0; i < 1000; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(150);
    strokeWeight(1);
    point(x, y);
  }
}
//COUNTDOWN FORMULA//
function countDownFormula() {
  handTimesSpecs.time -= deltaTime / 1000;
  if (handTimesSpecs.time < 0) {
    goToMenu('lose');
  };

  //HAND COUNTDOWN//
  if (floor(handTimesSpecs.time) == 5) {
    image(hand5, handTimesSpecs.x, handTimesSpecs.y);
  } else if (floor(handTimesSpecs.time) == 4) {
    image(hand4, handTimesSpecs.x, handTimesSpecs.y);
  } else if (floor(handTimesSpecs.time) == 3) {
    image(hand3, handTimesSpecs.x, handTimesSpecs.y);
  } else if (floor(handTimesSpecs.time) == 2) {
    image(hand2, handTimesSpecs.x, handTimesSpecs.y);
  } else if (floor(handTimesSpecs.time) == 1) {
    image(hand1, handTimesSpecs.x, handTimesSpecs.y);
  } else if (floor(handTimesSpecs.time) == 0) {
    image(hand0, handTimesSpecs.x, handTimesSpecs.y);
  }
}
//HALLWAY 1 MOVEMENT CONSTRAINTS//
function hallConstraints() {
  hallModule1Specs.x = constrain(hallModule1Specs.x, -hallModule1Specs.constraint, hallModule1Specs.constraint);
  hallModule2Specs.x = constrain(hallModule2Specs.x, -hallModule2Specs.constraint, hallModule2Specs.constraint);
  hallModule3Specs.x = constrain(hallModule3Specs.x, -hallModule3Specs.constraint, hallModule3Specs.constraint);
  hallModule4Specs.x = constrain(hallModule4Specs.x, -hallModule4Specs.constraint, hallModule4Specs.constraint);
}
//MOUSE CONTROLS//
function mouseClicked() {
  if (menu == 0) {
    if (mouseX > 540 && mouseX < 740) {
      if (mouseY > 295 && mouseY < 395) {
        goToMenu(1);
      }
    }
    if (mouseX > 885 && mouseX < 935) {
      if (mouseY > 60 && mouseY < 110) {
        musicOption = !musicOption;
        toggleMusic();
      }
    }
    if (mouseX > 482 && mouseX < 682) {
      if (mouseY > 175 && mouseY < 275) {
        goToMenu('loading');
      }
    }
  }
  if (menu == 1) {
    if (mouseX > 730 && mouseX < 930) {
      if (mouseY > 287 && mouseY < 387) {
        goToMenu(0);
      }
    }
  }
  if (menu == 'lose') {
    if (mouseX > 725 && mouseX < 925) {
      if (mouseY > 330 && mouseY < 430) {
        goToMenu(0);
      }
    }
  }
  if (menu == 'win') {
    if (mouseX > 725 && mouseX < 925) {
      if (mouseY > 330 && mouseY < 430) {
        goToMenu(0);
      }
    }
  }
}
//60 SECOND COUNTDOWN//
function bigCountdown() {
  if (frameCount % 60 == 0 && bigTimerSpecs.time > 0) {
    bigTimerSpecs.time--;
  }

  if (bigTimerSpecs.time == 0) {
    goToMenu('lose')
  }

  push();
  textFont(countdownFont);
  textSize(bigTimerSpecs.size);
  fill(bigTimerSpecs.color.r, bigTimerSpecs.color.g, bigTimerSpecs.color.b);
  text(bigTimerSpecs.time, bigTimerSpecs.x, bigTimerSpecs.y);
  pop();
}
//BIG CLOCK RESET//
function bigClockReset() {
  bigTimerSpecs.time = 60;
}
//SMALL CLOCK RESET//
function smallClockReset() {
  handTimesSpecs.time = 5;
}
//RESET START ROOM POSITION//
function roomReset() {
  hallModule1Specs.x = 0;
  hallModule2Specs.x = 0;
  hallModule3Specs.x = 0;
  hallModule4Specs.x = 0;
  archSpecs.x = 0;
}
//RED SCREEN RESET//
function bloodReset(){
  bleedScreenSpecs.alpha = 255;
}
//SPOTLIGHT EFFECT//
function spotlightOverlay() {
  //MOUSE CONSTRAINTS//
  let mouseConstrainX = constrain(mouseX, playerBoundary.left, playerBoundary.right);
  let mouseConstrainY = constrain(mouseY, playerBoundary.top, playerBoundary.bottom);

  push();
  image(spotlight, mouseConstrainX + spotlightSpecs.offsetX, mouseConstrainY + spotlightSpecs.offsetY);
  pop();
}
//HALLWAY 1 USER CONTROLS//
function hallwayUserControls() {
  if (keyIsDown(65)) {
      hallModule1Specs.x -= hallModule1Specs.speed;
      hallModule2Specs.x -= hallModule2Specs.speed;
      hallModule3Specs.x -= hallModule3Specs.speed;
      hallModule4Specs.x -= hallModule4Specs.speed;
    } else if (keyIsDown(68)) {
      hallModule1Specs.x += hallModule1Specs.speed;
      hallModule2Specs.x += hallModule2Specs.speed;
      hallModule3Specs.x += hallModule3Specs.speed;
      hallModule4Specs.x += hallModule4Specs.speed;
    }
}
//MAZE LAYOUT//
function keyPressed(){

if (menu == 2){
  if (keyIsDown(72)) {
    roomReset();
    smallClockReset();
    goToMenu(3);
  } else if (keyIsDown(85)) {
    roomReset();
    smallClockReset();
    goToMenu(4);
  } else if (keyIsDown(80)) {
    roomReset();
    smallClockReset();
    goToMenu(5);
  } else if (keyIsPressed === true) {
    if (keyIsDown(65)) {return;}
    if (keyIsDown(68)) {return;}
    roomReset();
    smallClockReset();
    bigClockReset();
    goToMenu('lose');
  }
}

else if (menu == 3){
  if (keyIsDown(66)) {
    roomReset();
    smallClockReset();
    goToMenu(4);
  } else if (keyIsDown(84)) {
    roomReset();
    smallClockReset();
    goToMenu(5);
  } else if (keyIsDown(83)) {
    roomReset();
    smallClockReset();
    goToMenu(2);
  }else if (keyIsPressed === true) {
    if (keyIsDown(65)) {return;}
    if (keyIsDown(68)) {return;}
    roomReset();
    smallClockReset();
    bigClockReset();
    goToMenu('lose');
  }
}

else if (menu == 4){
  if (keyIsDown(87)) {
    roomReset();
    smallClockReset();
    goToMenu(5);
  }else if (keyIsDown(77)) {
    roomReset();
    smallClockReset();
    goToMenu(2);
  }else if (keyIsDown(81)) {
    roomReset();
    smallClockReset();
    goToMenu(3);
  }else if (keyIsDown(71)) {
    roomReset();
    smallClockReset();
    bigClockReset();
    goToMenu('win');
  }else if (keyIsPressed === true) {
    if (keyIsDown(65)) {return;}
    if (keyIsDown(68)) {return;}
    roomReset();
    smallClockReset();
    bigClockReset();
    goToMenu('lose');
  }
}

else if (menu == 5) {
  if (keyIsDown(90)) {
    roomReset();
    smallClockReset();
    goToMenu(2);
  }else if (keyIsDown(67)) {
    roomReset();
    smallClockReset();
    goToMenu(3);
  }else if (keyIsDown(70)) {
    roomReset();
    smallClockReset();
    goToMenu(4);
  }else if (keyIsPressed === true) {
    if (keyIsDown(65)) {return;}
    if (keyIsDown(68)) {return;}
    roomReset();
    smallClockReset();
    bigClockReset();
    goToMenu('lose');
  }
}
}
//HALLWAY 1//
function hallway1() {
  image(hallModule4, hallModule4Specs.x, hallModule4Specs.y);

  image(hallModule3, hallModule3Specs.x, hallModule3Specs.y);

  image(hallModule2, hallModule2Specs.x, hallModule2Specs.y);

  image(hallModule1, hallModule1Specs.x, hallModule1Specs.y);
}
//HALLWAY 2//
function hallway2() {
  image(hall2Module4, hallModule4Specs.x + hall2Offset.x, hallModule4Specs.y + hall2Offset.y1);

  image(hall2Module3, hallModule3Specs.x + hall2Offset.x, hallModule3Specs.y + hall2Offset.y2);

  image(hall2Module2, hallModule2Specs.x + hall2Offset.x, hallModule2Specs.y + hall2Offset.y3);

  image(hall2Module1, hallModule1Specs.x + hall2Offset.x, hallModule1Specs.y + hall2Offset.y4);
}
//HALLWAY 3//
function hallway3() {
  image(hall3Module4, hallModule4Specs.x, hallModule4Specs.y);

  image(hall3Module3, hallModule3Specs.x, hallModule3Specs.y);

  image(hall3Module2, hallModule2Specs.x, hallModule2Specs.y);

  image(hall3Module1, hallModule1Specs.x, hallModule1Specs.y);
}
//HALLWAY 4//
function hallway4() {
  image(hall4Module4, hallModule4Specs.x + hall4Offset.x4, hallModule4Specs.y + hall4Offset.y1);

  image(hall4Module3, hallModule3Specs.x + hall4Offset.x3, hallModule3Specs.y + hall4Offset.y1);

  image(hall4Module2, hallModule2Specs.x + hall4Offset.x2, hallModule2Specs.y + hall4Offset.y1);

  image(hall4Module1, hallModule1Specs.x, hallModule1Specs.y + hall4Offset.y1);
}
//ARCHWAY//
function archway() {

  let paralaxX = map(mouseX, 0, canvasSpecs.x, -1.5, 1);
  paralaxX = constrain(paralaxX, -1.5, 1.5);

  image(arch, archSpecs.x + paralaxX * archSpecs.paralaxX, archSpecs.y);
}
//START SCREEN BACKGROUND WITH PARALAX//
function startScreenBackgroundWithParalax() {

  let paralaxX = map(mouseX, 0, canvasSpecs.x, -1, 1);
  paralaxX = constrain(paralaxX, -0.5, 1.5);
  let paralaxY = map(mouseY, 0, canvasSpecs.y, -1, 1);
  paralaxY = constrain(paralaxY, -0.5, 1.5);

  image(startScreenBackground, startScreenBackgroundSpecs.x + paralaxX * startScreenBackgroundSpecs.paralaxX, startScreenBackgroundSpecs.y + paralaxY * startScreenBackgroundSpecs.paralaxY, startScreenBackgroundSpecs.width, startScreenBackgroundSpecs.height);

}

function draw() {

  background(backgroundShade);

  //FLOAT EFFECTS//
  time = time + deltaTime;
  let titleFloat = sin(time * titleSpecs.speed) * titleSpecs.arc;
  let runFloat = sin(time * runSpecs.speed) * runSpecs.arc;
  let howToPlayFloat = sin(time * howToPlaySpecs.speed) * howToPlaySpecs.arc;
  let backButtonFloat = sin(time * backButtonSpecs.speed) * backButtonSpecs.arc;
  let againFloat = sin(time * againSpecs.speed) * againSpecs.arc;

  //START MENU//
  if (menu == 0) {

    bigClockReset();

    smallClockReset();

    bloodReset();

    startScreenBackgroundWithParalax();

    //SPOTLIGHT//
    spotlightOverlay();

    //RUN GRAPHIC ON HOME SCREEN//
    image(run, runSpecs.x, runSpecs.y + runFloat);

    //HOW TO PLAY GRAPHIC ON HOME SCREEN//
    image(howToPlay, howToPlaySpecs.x, howToPlaySpecs.y + howToPlayFloat);

    //TITLE GRAPHIC ON HOME SCREEN//
    image(title, titleSpecs.x, titleSpecs.y + titleFloat);

    //VOLUME ICON//
    image(volume, volumeSpecs.x, volumeSpecs.y);

    pointer();

    outerFrame();
  }

  //HOWTO MENU//
  if (menu == 1) {

    //GAME INSTRUCTIONS//
    image(howToPlayScreen, howToPlayScreenSpecs.x, howToPlayScreenSpecs.y);

    //BACK BUTTON//
    image(backButton, backButtonSpecs.x, backButtonSpecs.y + backButtonFloat);

    //60 SECOND COUNTDOWN//
    push();
    textFont(countdownFont);
    textSize(bigTimerSpecs.size);
    fill(bigTimerSpecs.color.r, bigTimerSpecs.color.g, bigTimerSpecs.color.b);
    text(bigTimerSpecs.time, bigTimerSpecs.x, bigTimerSpecs.y);
    pop();

    pointer();

    outerFrame();
  }

  //START GAME//
  if (menu == 2) {

    //TIMER START//
    if (menuOnEnter) {
      handTimesSpecs.time = 6;
      menuOnEnter = false;
    }

    hallwayUserControls();

    hallConstraints();

    hallway1();

    spotlightOverlay();

    archway();

    countDownFormula();

    bigCountdown();

    pointer();

    outerFrame();
  }

  //HALLWAY 2//
  if (menu == 3) {

    //TIMER START//
    if (menuOnEnter) {
      handTimesSpecs.time = 6;
      menuOnEnter = false;
    }

    hallwayUserControls();

    hallConstraints();

    hallway2();

    spotlightOverlay();

    archway();

    countDownFormula();

    bigCountdown();

    pointer();

    outerFrame();
  }

  //HALWAY 3//
  if (menu == 4) {

    //TIMER START//
    if (menuOnEnter) {
      handTimesSpecs.time = 6;
      menuOnEnter = false;
    }

    hallwayUserControls();

    hallConstraints();

    hallway3();

    archway();

    spotlightOverlay();

    archway();

    countDownFormula();

    bigCountdown();

    pointer();

    outerFrame();
  }

  //HALLWAY 4//
  if (menu == 5) {

    //TIMER START//
    if (menuOnEnter) {
      handTimesSpecs.time = 6;
      menuOnEnter = false;
    }

    hallwayUserControls();

    hallConstraints();

    hallway4();

    archway();

    spotlightOverlay();

    archway();

    countDownFormula();

    bigCountdown();

    pointer();

    outerFrame();
  }

  //LOADING VIDEO//
  if (menu == 'loading') {

    roomReset();

    //theme.stop();

    //SINGLE RUN OF AUDIO//
    if (menuOnEnter) {
      loadingSpecs.time = 4000;
      menuOnEnter = false;
    }

    //BACKGROUND GRAPHIC//
    image(startVidBKG, startVidBKGSpecs.x, startVidBKGSpecs.y);

    //LOADING...//
    push();
    textFont(countdownFont);
    textSize(loadingSpecs.size);
    text('Loading...', loadingSpecs.x, loadingSpecs.y);
    pop();

    staticEffect();

    outerFrame();

    //TIME DELAY TO NEXT MENU//
    loadingSpecs.time -= deltaTime;

    if (loadingSpecs.time < 0) {
      goToMenu(2);
    }
  }

  //GAME OVER BAD//
  if (menu == 'lose') {

    if (menuOnEnter) {
      menuOnEnter = false;
    }

    //GAME OVER SPLASH//
    image(lose, loseSpecs.x, loseSpecs.y);

    image(again, againSpecs.x, againSpecs.y + againFloat);

    push();

    if (bleedScreenSpecs.alpha >= 0) {
      bleedScreenSpecs.alpha -= bleedScreenSpecs.speed

      fill(bleedScreenSpecs.color.r, bleedScreenSpecs.color.g, bleedScreenSpecs.color.b, bleedScreenSpecs.alpha);
      rect(bleedScreenSpecs.x, bleedScreenSpecs.y, width, height);
    }
    pop();


    pointer();

    outerFrame();
  }

  //GAME OVER GOOD//
  if (menu == 'win') {

    image(win, 0, 0);

    staticEffect();

    image(again, againSpecs.x, againSpecs.y + againFloat);

    pointer();

    outerFrame();

  }

}
