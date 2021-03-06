/**************************************************
FINAL PROJECT: THE LESSOR KEY
MADELINE ZAYTSOFF

A POINT AND CLICK HORROR ADVENTURE
**************************************************/

'use strict'

//GLOBAL VARIABLE FOR MENU NAVIGATION//
let menu = 'clickToStart';
let menuOnEnter;

//OBJ NAMES//
let startScreen;
let interactWheelObject;
let livingRoomScene;
let kitchenRoomScene;
let diningRoomScene;
let frontHallScene;
let basementDoorScene;
let upstairsScene;
let bedroomScene;
let introVideoSpecs;
let userNotepadOBJ;
let fullScreenScareOBJ;
let logoIntro;
let howToScreen;
let userNotepad;

//FONT PRELOAD NAMES//
let glitchFont;
let glitchFontBold;

//IMAGE PRELOAD NAMES//
let mBlock;
let blankBKG;
let logo;
let startScreenBKG;
let howTo1;
let howTo2;
let livingRoomBKG;
let kitchenBKG;
let diningRoomBKG;
let frontHallBKG;
let bedroomBKG;
let bedroomScratchBKG;
let basementEntranceBKG;
let basementEntranceNoNavBKG;
let basementEntranceOpenBKG;
let upstairsBKG;
let interactWheelOverlay;
let touchIconOverlay;
let sightIconOverlay;
let soundIconOverlay;
let blackBorderOverlay;
let next;
let back;
let blackBar;
let userNotepadIMG;
let shadowMirrorFrontHall;
let fullScreenHands;
let television;
let fullScreenHead;
let fullScreenLeftHand;
let fullScreenRightHand;
let fullScreenShoulders;
let keyImage;
let scratchesImage;
let countBlank;
let count3;
let count2;
let countOverlay;
let filmScratch;
let dsImage;

//SOUND PRELOAD NAMES//
let startMusic;
let droneMusic;
let ambientMusic;
let bigScareFinalSound;
let clockSound;
let runCarpetSound;
let leaveRustleSound;
let heartbeatSound;
let unlockSound;
let keySound;
let scratchSound;
let logoSound;
let finalVO1Sound;
let finalVO2Sound;
let dripSound;
let vinylSound;
let countSound;
let doorSlamSound;

//DEFAULT STATE FOR INTERACT WHEEL//
let haveInteractWheel = false;

//ASSET DIMENSIONS//
let canvasSize = {
  x: 1200,
  y: 700
}
let titleSpec = {
  x: 750,
  y: 170,
  size: 50,
  color: 255
}
let descriptiveTextBKG = {
  bbX: 50,
  bbY: 510,
  textY: 545,
  textSize: 30,
  textColor: 255
}
let bkgColor = {
  color: {
    r: 9,
    g: 20,
    b: 20
  }
}
let clickToStartSpecs = {
  fColor: 255,
  fSize: 30
}
let screenFlickerSpecs = {
  x: 0,
  y: 0,
  color: 0,
  alpha: 20
}
let dsImageSpec = {
  offsetX: -250,
  offsetY: 0
}
let fadeOutScreen = {
  alpha: 0,
  speed: 5
}

//TEXT GENERATOR TITLES//
let description;
let descriptionActive = false;
let descriptionImage = false;

//GLOBAL VOLUME CONTROL//
let musicOption = true;
let volumeSpecs = {
  x: 0,
  y: 0
}

//TIMER CONTROLS FOR INTRO LOGO//
let time = 0;
let introLogoSpec = {
  fadeInTime: 1000,
  fullAlphaTime: 2000,
  fadeOutTime: 1000
}

//BORDER CONTROL//
let borderActive = true;

//PATH CHANGE AFTER OBTAINING KEY//
let haveKey = false;
let fadeOutUnlock = false;
let activeScratch = false;

//CLICK START SCREEN; BEGINNING OF GAME//
function clickToStartFunction() {

  //STATIC BACKGROUND//
  image(blankBKG, 0, 0);

  //VARIOUS FLICKERING BACKGROUND TEXT//
  textDynamicShadow('help me', 30, 500, 810, 250, 420);
  textDynamicShadow('im sorry mom & dad', 30, 500, 810, 250, 420);
  textDynamicShadow('im in hell', 30, 500, 810, 250, 420);
  textDynamicShadow('the flies stole my soul', 30, 500, 810, 250, 420);

  //MOVEMENT FOR CLICK ANYWHERE TEXT//
  let movement = random(-2, 1);

  //CLICK ANYWHERE TEXT//
  push();
  fill(clickToStartSpecs.fColor);
  textFont(glitchFontBold);
  textSize(clickToStartSpecs.fSize);
  text('click anywhere to start', width / 2 + movement, height / 2 + movement);
  pop();

  screenFlicker(0, 50, 15, 20);
}

//HIDDEN BLACKBORDER//
function blackBorder() {
  image(blackBorderOverlay, 0, 0);
}

//FADEOUT TRANSITION AFTER UNLOCKING DOOR//
function fadeToBlack() {

  time = time + deltaTime;

  if (time <= 2000){
    push();
    fill(0,fadeOutScreen.alpha);
    rect(0,0,width,height);
    pop();
  }else if (time <= 4000){
    fadeOutScreen.alpha = fadeOutScreen.alpha + fadeOutScreen.speed;

    push();
    fill(0,fadeOutScreen.alpha);
    rect(0,0,width,height);
    pop();
  } else {
    goToMenu('finalScene');
    fadeOutUnlock = false;
  }
}

//TIMING CONTROLS AND SOUND TRIGGER FOR OPENING LOGO//
function introLogo() {

  let ratio = 0;

  time += deltaTime;

  if (time <= introLogoSpec.fadeInTime) {
    ratio = time / introLogoSpec.fadeInTime
  } else if (time <= introLogoSpec.fadeInTime + introLogoSpec.fullAlphaTime) {
    ratio = 1;
  } else if (time <= introLogoSpec.fadeInTime + introLogoSpec.fullAlphaTime + introLogoSpec.fadeOutTime) {
    ratio = (time - (introLogoSpec.fadeInTime + introLogoSpec.fullAlphaTime)) / introLogoSpec.fadeOutTime;
    ratio = 1 - ratio;
  } else {
    // logoIntro.active = false;
    goToMenu('start');
  }

  logoIntro.drawIntro(ratio * 255);
}

//START SCREEN COMPONENTS//
function startScreenFunction() {
  startScreen.drawStartScreen();

  screenFlicker(0, 100, 20, 20);

  startScreen.titleText();

  startScreen.menuText();

  fadeOutUnlock = false;
}

//HOW TO SCREEN 1 COMPONENTS//
function howToScreen1Function() {
  howToScreen.page1();
  howToScreen.nextButton();
  howToScreen.backButton();
  screenFlicker();
}

//HOW TO SCREEN 2 COMPONENTS//
function howToScreen2Function() {
  howToScreen.page2();
  howToScreen.backButton();
  screenFlicker();
}

//"LIVING" ROOM COMPONENETS//
function livingRoomFunction() {
  livingRoomScene.run();
  livingRoomScene.draw();
}

//KITCHEN ROOM COMPONENTS//
function kitchenRoomFunction() {
  kitchenRoomScene.run();
  kitchenRoomScene.draw();
}

//DINING ROOM COMPONENETS//
function diningRoomFunction() {
  diningRoomScene.run();
  diningRoomScene.draw();
}

//FRONT HALL COMPONENETS//
function frontHallFunction() {
  frontHallScene.run();
  frontHallScene.draw();
}

//BASEMENT DOOR COMPONENTS//
function basementDoorFunction() {
  basementDoorScene.run();
  basementDoorScene.draw();
}

//UPSTAIRS COMPONENTS//
function upstairsFunction() {
  upstairsScene.run();
  upstairsScene.draw();
}

//UPSTAIRS COMPONENTS//
function bedroomFunction() {
  bedroomScene.run();
  bedroomScene.draw();
}

//FULL SCREEN FINAL SCENE//
function finalSceneFunction() {
  fullScreenScareOBJ.run();
  fullScreenScareOBJ.draw();
}

//MENU NAVIGATION TREE//
function menuNav() {

  if (menu == 'clickToStart') {
    clickToStartFunction();
  }

  if (menu == 'introduction') {
    introLogo();
  }

  if (menu == 'start') {
    startScreenFunction();
  }

  if (menu == 'howto1') {
    howToScreen1Function();
  }

  if (menu == 'howto2') {
    howToScreen2Function();
  }

  if (menu == 'livingroom') {
    livingRoomFunction();
  }

  if (menu == 'kitchen') {
    kitchenRoomFunction();
  }

  if (menu == 'diningroom') {
    diningRoomFunction();
  }

  if (menu == 'fronthall') {
    frontHallFunction();
  }

  if (menu == 'basementdoor') {
    basementDoorFunction();
  }

  if (menu == 'upstairs') {
    upstairsFunction();
  }

  if (menu == 'bedroom') {
    bedroomFunction();
  }

  if (menu == 'finalScene') {
    finalSceneFunction();
  }
}

//DYNAMIC SHADOW GENERATOR//
function textDynamicShadow(writing, size, xmin, xmax, ymin, ymax) {

  push();

  let color;
  let x;
  let y;
  let alpha;

  color = random(0, 50);

  alpha = random(50, 100);

  x = random(xmin, xmax);
  y = random(ymin, ymax);

  fill(color, alpha);
  textFont(glitchFontBold);
  textSize(size);
  text(writing, x, y);

  pop();
}

//SCREEN FLICKER EFFECT FOR START MENU//
function screenFlicker(cLow, cHigh, aLow, aHigh) {
  screenFlickerSpecs.color = random(cLow, cHigh);
  screenFlickerSpecs.alpha = random(aLow, aHigh);

  push();
  fill(screenFlickerSpecs.color, screenFlickerSpecs.alpha);
  rect(screenFlickerSpecs.x, screenFlickerSpecs.y, width, height);
  pop();
}

//STANDARD SHADOW GENERATOR//
function textStaticShadow() {
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 12;
  drawingContext.shadowColor = 'black';
}

//CHANGES STATE OF DESCRIPTIVE TEXT SO IT CAN BECOME ACTIVE//
function descriptionSet(writing) {
  description = writing;
  descriptionActive = true;
  descriptionImage = false;
}

//CHANGES STATE OF DESCRIPTIVE TEXT WITH IMAGE SO IT CAN BECOME ACTIVE//
function descriptionImageSet(writing, optImage) {
  description = writing;
  dsImage = optImage;
  descriptionActive = true;
  descriptionImage = true;

}

//DESCRIPTION GENERATOR FOR BOTTOM SCREEN//
function descriptionDraw() {
  if (descriptionActive) {
    push();
    image(blackBar, descriptiveTextBKG.bbX, descriptiveTextBKG.bbY);
    pop();

    if (descriptionImage) {
      push();
      image(dsImage, dsImageSpec.offsetX, dsImageSpec.offsetY);
      pop();
    }

    push();
    fill(descriptiveTextBKG.textColor);
    textAlign(CENTER);
    textSize(descriptiveTextBKG.textSize);
    textFont(glitchFont);
    text(description, width / 2, descriptiveTextBKG.textY);
    pop();
  }
}

//CLEARS DESCRIPTIVE TEXT//
function descriptionRemove() {
  descriptionActive = false;
}

//CALL FOR MOTION IMPLEMENTATION UPON BEING TURNED TRUE//
function interactWheelMotion() {
  if (haveInteractWheel) {
    interactWheelObject.run();
  }
}

//SPAWNS INTERACT WHEEL//
function spawnInteractWheel(object) {
  //DEFINE INTERACTWHEEL INTO SCRIPT//
  interactWheelObject = new InteractWheel(mouseX, mouseY, object);
  haveInteractWheel = true;
}

//MENU NAVIGATION//
function goToMenu(menuID) {

  //USED FOR DEACTIVATION OF SOUND WHEN LEAVING ROOM//
  if (menu == 'livingroom') {
    livingRoomScene.onExit();
  } else if (menu == 'fronthall') {
    frontHallScene.onExit();
  } else if (menu == 'diningroom') {
    diningRoomScene.onExit();
  } else if (menu == 'basementdoor') {
    basementDoorScene.onExit();
  } else if (menu == 'upstairs') {
      upstairsScene.onExit();
  } else if (menu == 'bedroom') {
      bedroomScene.onExit();
  }

  //STANDARD MENU NAVIGATION//
  menu = menuID;
  menuOnEnter = true;
  toggleMusic();

  //USED FOR ACTIVATION OF SOUND WHEN LEAVING ROOM//
  if (menu == 'livingroom') {
    livingRoomScene.onEnter();
  } else if (menu == 'fronthall') {
    frontHallScene.onEnter();
  } else if (menu == 'diningroom') {
    diningRoomScene.onEnter();
  } else if (menu == 'basementdoor') {
    basementDoorScene.onEnter();
  } else if (menu == 'upstairs') {
      upstairsScene.onEnter();
  } else if (menu == 'bedroom') {
      bedroomScene.onEnter();
  } else if (menu == 'finalScene') {
    fullScreenScareOBJ.goToState('stage1');
  }
}

//MUSIC CONDITIONAL//
function toggleMusic() {

  if (menu == 'introduction') {
    logoIntro.sfx();
  }

  if (musicOption == false) {
    startMusic.stop();
  } else if (menu != 'start' && menu != 'howto1' && menu != 'howto2') {
    startMusic.stop();
  } else if (!startMusic.isPlaying()) {
    startMusic.setVolume(0.3);
    startMusic.loop();
  }

  if (musicOption == false) {
    ambientMusic.stop();
  } else if (menu == 'start' || menu == 'howto1' || menu == 'howto2' || menu == 'finalScene' || menu == 'clickToStart' || menu == 'introduction'){
    ambientMusic.stop();
  } else if (!ambientMusic.isPlaying()){
    ambientMusic.setVolume(0.2);
    ambientMusic.loop();
  }
}

//MOUSE INTERACTIONS//
function mouseClicked() {

  //CALL INTERACTWHEEL FROM INTERACTWHEEL.JS//
  if (haveInteractWheel) {
    if (interactWheelObject.processMouseEvent()) {
      return
    }
  }

  if (menu == 'clickToStart') {
    goToMenu('introduction');
  }

  //START MENU BUTTON LOCATIONS//
  else if (menu == 'start') {
    if (mouseX >= 760 &&
      mouseX <= 862 &&
      mouseY >= 290 &&
      mouseY <= 330) {
      goToMenu('howto1');
    } else if (mouseX >= 760 &&
      mouseX <= 830 &&
      mouseY >= 220 &&
      mouseY <= 250) {
      goToMenu('fronthall');
    }
  }

  //HOW TO MENU 1 BUTTON LOCATION//
  else if (menu == 'howto1') {
    if (mouseX >= 970 &&
      mouseX <= 1089 &&
      mouseY >= 550 &&
      mouseY <= 609) {
      goToMenu('howto2');
    } else if (mouseX >= 100 &&
      mouseX <= 219 &&
      mouseY >= 550 &&
      mouseY <= 609) {
      goToMenu('start');
    }
  }

  //HOW TO MENU 2 BUTTON LOCATION//
  else if (menu == 'howto2') {
    if (mouseX >= 100 &&
      mouseX <= 219 &&
      mouseY >= 550 &&
      mouseY <= 609) {
      goToMenu('howto1');
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR LIVING ROOM//
  if (menu == 'livingroom') {
    if (livingRoomScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR FRONT HALL//
  else if (menu == 'fronthall') {
    if (frontHallScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR DINING ROOM//
  else if (menu == 'diningroom') {
    if (diningRoomScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR KITCHEN//
  else if (menu == 'kitchen') {
    if (kitchenRoomScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR KITCHEN//
  else if (menu == 'basementdoor') {
    if (basementDoorScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR UPSTAIRS//
  else if (menu == 'upstairs') {
    if (upstairsScene.processMouseEvent()) {
      return;
    }
  }

  //ACTIVATES NAVIGATION WHEEL AND INTERACTABLAES FOR UPSTAIRS//
  else if (menu == 'bedroom') {
    if (bedroomScene.processMouseEvent()) {
      return;
    }
  }

  haveInteractWheel = false;
}

//HIGHLIGHTS INTERACTABLES BY CHANGING MOUSE COLOR//
function mouseMoved() {

  //ACTIVATES INTERACTABLE DETECTION FOR LIVING ROOM//
  if (menu == 'livingroom') {
    if (livingRoomScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR FRONT HALL//
  else if (menu == 'fronthall') {
    if (frontHallScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR DINING ROOM//
  else if (menu == 'diningroom') {
    if (diningRoomScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR KITCHEN//
  else if (menu == 'kitchen') {
    if (kitchenRoomScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR KITCHEN//
  else if (menu == 'basementdoor') {
    if (basementDoorScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR UPSTAIRS//
  else if (menu == 'upstairs') {
    if (upstairsScene.processMouseMove()) {
      return;
    }
  }

  //ACTIVATES INTERACTABLE DETECTION FOR BEDROOM//
  else if (menu == 'bedroom') {
    if (bedroomScene.processMouseMove()) {
      return;
    }
  }
}

//EXTERNAL MEDIA PRELOAD//
function preload() {

  //FONTS//
  glitchFont = loadFont('assets/font/Parametric Glitch.ttf');
  glitchFontBold = loadFont('assets/font/Parametric Glitch Bold.ttf');

  //BLACK BORDER//
  blackBorderOverlay = loadImage('assets/images/blackBorder.png');

  //LEVEL BACKGROUNDS//
  startScreenBKG = loadImage('assets/images/startScreen/startScreenBKG.png');
  howTo1 = loadImage('assets/images/howToScreen/howTo1.png');
  howTo2 = loadImage('assets/images/howToScreen/howTo3.png');
  livingRoomBKG = loadImage('assets/images/rooms/Living Room/livingRoom.png');
  kitchenBKG = loadImage('assets/images/rooms/Kitchen/kitchenBKG.png');
  diningRoomBKG = loadImage('assets/images/rooms/Dining Room/diningRoomBKG.png');
  frontHallBKG = loadImage('assets/images/rooms/Front Hall/fronthallBKG.png');
  upstairsBKG = loadImage('assets/images/rooms/Upstairs/upstairsBKG.png');
  bedroomBKG = loadImage('assets/images/rooms/Bedroom/bedroomBKG.png');
  bedroomScratchBKG = loadImage('assets/images/rooms/Bedroom/bedroomBKGScratch.png');
  basementEntranceBKG = loadImage('assets/images/rooms/BasementDoor/basementDoor.png');
  basementEntranceOpenBKG = loadImage('assets/images/rooms/BasementDoor/basementDoorOpen.png');
  basementEntranceNoNavBKG = loadImage('assets/images/rooms/BasementDoor/basementDoorNoNav.png');

  //LEVEL ASSETS//
  shadowMirrorFrontHall = loadImage('assets/images/rooms/Front Hall/shadowMirror.png');

  //CLICK WHEEL//
  interactWheelOverlay = loadImage('assets/images/Interact Wheel/interactWheel.png');
  touchIconOverlay = loadImage('assets/images/Interact Wheel/touch.png');
  sightIconOverlay = loadImage('assets/images/Interact Wheel/sight.png');
  soundIconOverlay = loadImage('assets/images/Interact Wheel/sound.png');

  //ASSORTED IMAGE OVERLAYS//
  next = loadImage('assets/images/next.png');
  back = loadImage('assets/images/back.png');
  blackBar = loadImage('assets/images/blackBar.png');
  userNotepad = loadImage('assets/images/playerNotebook.png');
  logo = loadImage('assets/images/introLogo/companyLogo.png');
  blankBKG = loadImage('assets/images/blankBKG.png');
  fullScreenHands = loadImage('assets/images/openHands.png');
  television = loadImage('assets/images/rooms/Living Room/tv.png');
  keyImage = loadImage('assets/images/rooms/Bedroom/Key.png');
  scratchesImage = loadImage('assets/images/rooms/Bedroom/scratches.png');
  countBlank = loadImage('assets/images/countdown/blank.png');
  count2 = loadImage('assets/images/countdown/2.png');
  count3 = loadImage('assets/images/countdown/3.png');
  countOverlay = loadImage('assets/images/countdown/countdownOverlay.png');
  filmScratch = loadImage('assets/images/countdown/film.png');

  //FULL SCREEN SCARE//
  fullScreenHead = loadImage('assets/images/bigScare/head.png');
  fullScreenLeftHand = loadImage('assets/images/bigScare/leftHand.png');
  fullScreenRightHand = loadImage('assets/images/bigScare/rightHand.png');
  fullScreenShoulders = loadImage('assets/images/bigScare/torso.png');

  //SFX//
  logoSound = loadSound('assets/sounds/logoSoundFinal.mp3');
  clockSound = loadSound('assets/sounds/clockTick.mp3');
  runCarpetSound = loadSound('assets/sounds/runCarpet.mp3');
  leaveRustleSound = loadSound('assets/sounds/leaveRustle.mp3');
  heartbeatSound = loadSound('assets/sounds/heartbeat.mp3');
  unlockSound = loadSound('assets/sounds/unlock.mp3');
  keySound = loadSound('assets/sounds/keyTone.mp3');
  scratchSound = loadSound('assets/sounds/scratch.mp3');
  finalVO1Sound = loadSound('assets/sounds/finalVO1.mp3');
  finalVO2Sound = loadSound('assets/sounds/finalVO2.mp3');
  dripSound = loadSound('assets/sounds/drip.mp3');
  bigScareFinalSound = loadSound('assets/sounds/bigScareAmbience.mp3');
  countSound = loadSound('assets/sounds/countdownSound.mp3');
  vinylSound = loadSound('assets/sounds/vinylCrackle.mp3');
  doorSlamSound = loadSound('assets/sounds/doorSlam.mp3');

  //MUSIC//
  startMusic = loadSound('assets/sounds/startMenu.mp3');
  droneMusic = loadSound('assets/sounds/droneTone.mp3');
  ambientMusic = loadSound('assets/sounds/houseAmbient.mp3');

  //SHAPE FOR MEASURING OBJECT POSITION (FOR FOR USE IN FINAL GAME)//
  mBlock = loadImage('assets/images/measureBlock.png');
}

//ONE TIME CALLS//
function setup() {

  textFont(glitchFont);

  createCanvas(canvasSize.x, canvasSize.y);

  //LINKING CLASSES/
  logoIntro = new LogoOBJ();
  startScreen = new StartScreenObj(0, 0);
  howToScreen = new HowToScreen();

  livingRoomScene = new LivingRoom();
  kitchenRoomScene = new Kitchen();
  diningRoomScene = new DiningRoom();
  frontHallScene = new FrontHall();
  basementDoorScene = new BasementDoor();
  upstairsScene = new Upstairs();
  bedroomScene = new Bedroom();

  fullScreenScareOBJ = new FullScreenScare();

  //ACTIVATE CUSTOM CURSOR//
  cursor('assets/images/cursorIconOverlay.png');

  //ENABLE MUSIC NOT TO RUN DURING DRAW//
  toggleMusic();
}

//EVERY FRAME CALLS//
function draw() {

  //USED TO ACTIVATE INTERACT WHEEL//
  interactWheelMotion();

  //STANDARD BACKGROUND FILL//
  background(bkgColor.color.r, bkgColor.color.g, bkgColor.color.b);

  menuNav();

  if (fadeOutUnlock){
    fadeToBlack();
  }

  //TURNS OFF OUTER BORDER WHEN REQUIRED//
  if (borderActive) {
    blackBorder();
  } else return;
}
