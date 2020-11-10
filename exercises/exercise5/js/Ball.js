//OBJECT ATTRIBUTES FOR BALL//
class Ball {

//OBJECT DIMENSIONS//
constructor(x,y) {
  this.x = x;
  this.y = y;
  this.size = 30;
  this.vx = 3.5;
  this.vy = 3.5;
}

//MOVEMENT FORMULA FOR BALL//
move(){
this.x = this.x + this.vx;
this.y = this.y + this.vy;

//CONSTRAINS BALL TO CANVAS//
this.x = constrain(this.x,0,width);
this.y = constrain(this.y,0,height);
}

//WHAT HAPPENS WHEN BALL HITS PLAYER PADDLE OR SIDES//
bounce(player){
if (this.x > player.x - player.w/2 &&
    this.x < player.x + player.w/2 &&
    this.y + this.size/2 > player.y - player.h/2 &&
    this.y - this.size/2 < player.y + player.h/2 ) {
      this.vy *= -1.02;
    }

if (this.y == 0) {
    this.vy *= -1.02;
}

if (this.x >= width || this.x <= 0) {
    this.vx *= -1.02;
}
}

//WHAT HAPPENS WHEN BALL HITS BELOW SCREEN//
lose(){
  if (ball.y > height){
    goToMenu('lose');
  }
}

//RESET POSITION OF BALL//
reset(){
  this.x = width / 2;
  this.y = height / 2;
  this.vx = 3.5;
  this.vy = 3.5;
}

//BALL VISUALS//
drawBall() {
  push();
  noStroke();
  noFill();
  ellipse(this.x,this.y,this.size);
  image(ballOverlay,this.x,this.y);
  pop();
}

}
