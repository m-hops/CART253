class VisualSpook extends Interactable {

  constructor(x,y,w,h,image,hostRoom,td,speed,alpha,alphaSpeed,sound) {
    super(x,y,w,h);
    this.image = image;
    this.hostRoom = hostRoom;
    this.state = 'yes';
    this.triggerDistance = td;
    this.alpha = alpha;
    this.speed = speed;
    this.alphaSpeed = alphaSpeed;
    this.originalX = x;
    this.originalY = y;
    this.originalAlpha = alpha;
    this.sound = sound;
  }

  onClick(){

  }

  run() {

    if (this.state == 'yes'){

      let cameraX = width/2 - this.hostRoom.backgroundX;
      let distanceToCam = abs(this.x - cameraX);

      if (distanceToCam < this.triggerDistance) {
        this.sound.play();
        this.state = 'move';
      }
    }

    else if (this.state == 'move') {
      this.x += this.speed;
      this.alpha += this.alphaSpeed;
    }
  }

  onEnter(){
    let chance = random(0,1);

    if (chance < 0.5){
      this.x = this.originalX;
      this.y = this.originalY;
      this.alpha = this.originalAlpha;
      this.state = 'yes';
    } else this.state = 'no';
  }

  draw() {

    if (this.state != 'no'){
      push();
      // fill(255,100);
      noFill();
      noStroke();
      tint(255,this.alpha);
      image(this.image,this.x,this.y);
      pop();
    }
  }


}
