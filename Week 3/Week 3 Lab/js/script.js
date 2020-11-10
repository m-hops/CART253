/**************************************************
MADELINE ZAYTSOFF
WEEK 3 TEST LAB
**************************************************/

//GLOBAL VARIABLE SETUP//

let bg = {
  r: 0,
  g: 0,
  b: 0
}
let circle1 = {
  x: 0,
  y:250,
  size: 150,
  fill: 255,
  alpha: 200
}
let circle2 = {
  x: 1000,
  y: 250,
  size: 100,
  fill: 255,
  alpha:200

  //INITIAL CANVAS SETUP//
}
function setup() {
  createCanvas(1000, 500);
  noStroke()
}

function draw() {
  //BACKGROUND//
  background(bg.r,bg.g,bg.b);
  bg.r = bg.r + 1;

  //LEFT CIRCLE//
  circle1.x = circle1.x + 1;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + 1;
  circle1.size = constrain(circle1.size,0,height);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  //RIGHT CIRCLE//
  circle2.x = circle2.x + -1;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * 0.75;
  fill(circle2.fill,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);
}
