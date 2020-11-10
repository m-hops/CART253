/**************************************************
DRAW AN ALIEN
MADELINE ZAYTSOFF

LET'S DRAW AN ALIEN AND SEE WHAT ELSE WE CAN ADD
**************************************************/

//MAIN BACKGROUND//

let time = 0;

let y;
let BeamTop = 150;

function setup() {

  createCanvas(640, 480);

  noStroke();

  angleMode(DEGREES);

  noCursor();

//FREQUENCY + DISTANCE I WANT IT TO STOP

  y = 100 + BeamTop + 118;
}

function draw() {

  //ADJUSTMENT VARIABLES//

  let offsetX = mouseX - 317;
  let offsetY = mouseY - 118;
  let paralaxX = mouseX / 640;
  let frontClouds = paralaxX * 49;
  let backClouds = paralaxX * 15;
  let stars = paralaxX * 5;
  time = time + deltaTime;
  let dudeFloat = sin(time * 0.3) * 15;

  //LOCATED HERE TO STOP DUPLICATION//
  background(164, 158, 181);

  //CLICK DOWN//
  if (mouseIsPressed) {

    //STARS//
    push();
    stroke(250, 250, 245);
    strokeWeight(5);
    point(85 + stars, 20);
    point(10 + stars, 10);
    point(250 + stars, 5);
    point(200 + stars, 75);
    point(350 + stars, 10);
    point(375 + stars, 13);
    point(420 + stars, 29);
    point(589 + stars, 40);
    point(570 + stars, 100);
    pop();

    //REAR CLOUDS//
    fill(194, 196, 237);
    rect(0, 200, 640, 320);
    circle(0 + backClouds, 200, 300);
    circle(100 + backClouds, 150, 200);
    circle(250 + backClouds, 200, 150);
    circle(350 + backClouds, 150, 250);
    circle(475 + backClouds, 200, 175);
    circle(610 + backClouds, 250, 200);

    //HEAD, BACK//
    fill(132, 240, 141);
    ellipse(320 + offsetX, 160 + offsetY, 100, 150);
    ellipse(290 + offsetX, 120 + offsetY, 50, 75);
    ellipse(350 + offsetX, 120 + offsetY, 50, 75);

    //EYES//
    push();
    fill(54, 54, 54);
    translate(300 + offsetX, 140 + offsetY);
    rotate(350);
    ellipse(0, 0, 30, 75);
    pop();

    push();
    fill(54, 54, 54);
    translate(340 + offsetX, 140 + offsetY);
    rotate(10);
    ellipse(0, 0, 30, 75);
    pop();

    push();
    fill(252, 252, 252);
    translate(348 + offsetX, 115 + offsetY);
    rotate(350);
    ellipse(0, 0, 5, 15);
    pop();

    //NOSE//

    fill(54, 54, 54);
    ellipse(315 + offsetX, 185 + offsetY, 5, 5);
    ellipse(325 + offsetX, 185 + offsetY, 5, 5);

    //MOUTH//
    ellipse(320 + offsetX, 210 + offsetY, 20, 5);

    //NECK//
    fill(132, 240, 141);
    rect(305 + offsetX, 220 + offsetY, 30, 30);

    //SHOULDERS//
    rect(270 + offsetX, 240 + offsetY, 100, 50, 20)

    //GLASS DOME//
    fill(66, 120, 255, 75);
    ellipse(318 + offsetX, 190 + offsetY, 150, 300);

    //DUDE//
    fill(26, 26, 26);
    circle(283 + offsetX, 415 + offsetY + dudeFloat, 20);

    push();
    fill(26, 26, 26);
    translate(295 + offsetX, 412 + offsetY + dudeFloat);
    rotate(10);
    rect(0, 0, 40, 10, 20);
    pop();

    push();
    fill(26, 26, 26);
    translate(300 + offsetX, 412 + offsetY + dudeFloat);
    rotate(250);
    rect(0, 0, 20, 10, 20);
    pop();

    push();
    fill(26, 26, 26);
    translate(307 + offsetX, 425 + offsetY + dudeFloat);
    rotate(90);
    rect(0, 0, 20, 10, 20);
    pop();

    push();
    fill(26, 26, 26);
    translate(335 + offsetX, 428 + offsetY + dudeFloat);
    rotate(70);
    rect(0, 0, 20, 10, 20);
    pop();

    push();
    fill(26, 26, 26);
    translate(345 + offsetX, 420 + offsetY + dudeFloat);
    rotate(30);
    rect(0, 0, 20, 10, 20);
    pop();

    //BEAM//
    fill(255, 254, 179, 99);
    rect(269 + offsetX, 280 + offsetY, 100, 640);

    push();
    fill(255, 203, 92, 95);
    rect(259 + offsetX, 600 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 500 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 400 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 300 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 200 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 100 + offsetY + y, 120,20,8);
    rect(259 + offsetX, 0 + offsetY + y, 120,20,8);
    y = y - 2;
    if (y < BeamTop + 118){
      y = 100 + BeamTop + 118;
    }
    pop();

    //SHIP LIGHTS, UNDER//
    fill(255, 203, 92);
    ellipse(318 + offsetX, 310 + offsetY, 150, 75);

    //SHIP BODY//
    fill(217, 217, 217);
    rect(220 + offsetX, 260 + offsetY, 200, 50, 20);

    //SHIP LIGHTS, OVER//
    fill(255, 203, 92);
    circle(240 + offsetX, 285 + offsetY, 20);
    circle(280 + offsetX, 285 + offsetY, 20);
    circle(320 + offsetX, 285 + offsetY, 20);
    circle(360 + offsetX, 285 + offsetY, 20);
    circle(400 + offsetX, 285 + offsetY, 20);

    //FRONT HILLS//
    fill(225, 235, 237);
    circle(0 + frontClouds, 480, 200);
    circle(150 + frontClouds, 510, 300);
    circle(250 + frontClouds, 500, 200);
    circle(540 + frontClouds, 490, 100);
    circle(640 + frontClouds, 490, 200);

  } else {

    //NO CLICK//

    //STARS//
    push();
    stroke(250, 250, 245);
    strokeWeight(5);
    point(85 + stars, 20);
    point(10 + stars, 10);
    point(250 + stars, 5);
    point(200 + stars, 75);
    point(350 + stars, 10);
    point(375 + stars, 13);
    point(420 + stars, 29);
    point(589 + stars, 40);
    point(570 + stars, 100);
    pop();

    //REAR CLOUDS//
    fill(194, 196, 237);
    rect(0, 200, 640, 320);
    circle(0 + backClouds, 200, 300);
    circle(100 + backClouds, 150, 200);
    circle(250 + backClouds, 200, 150);
    circle(350 + backClouds, 150, 250);
    circle(475 + backClouds, 200, 175);
    circle(610 + backClouds, 250, 200);

    //HEAD, BACK//
    fill(132, 240, 141);
    ellipse(320 + offsetX, 160 + offsetY, 100, 150);
    ellipse(290 + offsetX, 120 + offsetY, 50, 75);
    ellipse(350 + offsetX, 120 + offsetY, 50, 75);

    //EYES//
    push();
    fill(54, 54, 54);
    translate(300 + offsetX, 140 + offsetY);
    rotate(350);
    ellipse(0, 0, 30, 75);
    pop();

    push();
    fill(54, 54, 54);
    translate(340 + offsetX, 140 + offsetY);
    rotate(10);
    ellipse(0, 0, 30, 75);
    pop();

    push();
    fill(252, 252, 252);
    translate(348 + offsetX, 115 + offsetY);
    rotate(350);
    ellipse(0, 0, 5, 15);
    pop();

    //NOSE//

    fill(54, 54, 54);
    ellipse(315 + offsetX, 185 + offsetY, 5, 5);
    ellipse(325 + offsetX, 185 + offsetY, 5, 5);

    //MOUTH//
    ellipse(320 + offsetX, 210 + offsetY, 20, 5);

    //NECK//
    fill(132, 240, 141);
    rect(305 + offsetX, 220 + offsetY, 30, 30);

    //SHOULDERS//
    rect(270 + offsetX, 240 + offsetY, 100, 50, 20)

    //GLASS DOME//
    fill(66, 120, 255, 75);
    ellipse(318 + offsetX, 190 + offsetY, 150, 300);

    //SHIP LIGHTS, UNDER//
    fill(255, 254, 179);
    ellipse(318 + offsetX, 310 + offsetY, 150, 75);

    //SHIP BODY//
    fill(217, 217, 217);
    rect(220 + offsetX, 260 + offsetY, 200, 50, 20);

    //SHIP LIGHTS, OVER//
    fill(255, 254, 179);
    circle(240 + offsetX, 285 + offsetY, 20);
    circle(280 + offsetX, 285 + offsetY, 20);
    circle(320 + offsetX, 285 + offsetY, 20);
    circle(360 + offsetX, 285 + offsetY, 20);
    circle(400 + offsetX, 285 + offsetY, 20);

    //FRONT HILLS//
    fill(225, 235, 237);
    circle(0 + frontClouds, 480, 200);
    circle(150 + frontClouds, 510, 300);
    circle(250 + frontClouds, 500, 200);
    circle(540 + frontClouds, 490, 100);
    circle(640 + frontClouds, 490, 200);
  }

}

/**********************************

OBJECTIVES ACHIEVED:
- DREW ALIEN
- DREW SCENE
- IMPLEMENTED ALPHA FOR SHIELD
- MAPPED ALIEN AND SHIP TO MOUSE X AND MOUSE Y
- IMPLEMENTED IF, ELSE WITH MOUSE CLICK
- IMPLEMENTED PARALAX EFFECT USING VARIABLE ATTACHED TO MOUSE X
- IMPLEMENTED BOBBING EFFECT ON DUDE USING DELTATIME WITH SIN ARCHES

SOURCES:
THE CODING TRAIN: CODE! PROGRAMMING WITH P5.JS (https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
P5JS LIBRARY AND REFERENCE GUIDE (https://p5js.org/)
CART 253 TUTORIALS AND LESSONS (https://github.com/pippinbarr/cart253-2020/)

************************************/
