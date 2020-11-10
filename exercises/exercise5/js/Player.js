//OBJECT ATTRIBUTES FOR PLAYER PADDLE//
class Player {

//PADDEL DIMENSIONS//
  constructor(w,h) {
    this.x = 0;
    this.y = height - 20;
    this.w = w;
    this.h = h;
  }

//ATTACH PADDLE TO MOUSEX AXIS//
  controls() {
    this.x = width - mouseX;
    this.x = constrain(this.x,0,width);
  }

//CALL VISUALS FOR PADDLE//
  drawPlayer() {
    push();
    noFill();
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
    imageMode(CENTER);
    image(playerOverlay,this.x,this.y);
    pop();
  }
}
