class FullScreenScare {

  constructor(){
    this.x = -230;
    this.y = 600;
    this.speed1 = -1;
    this.speed2 = -10
  }

  run(){
    this.x = this.x + random(-1,1);

    if (this.y >= 300){
      this.y = this.y + this.speed1;
    }else if (this.y <= 300 && this.y >= 0){
      this.y = this.y + this.speed2;
    }
  }

  draw(){
    image(fullScreenHands,this.x,this.y);
  }
}
