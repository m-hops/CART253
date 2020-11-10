let backgroundShade = 0;
let circle = {
  x:0,
  y:250,
  size: 100,
  speed: 2
}


function setup() {
  createCanvas(500,500);
}


function draw() {

}

function keyPressed() {

if (keyCode === UP_ARROW) {
  background(0);
} else if (keyCode === DOWN_ARROW) {
  background(255);
}
}
