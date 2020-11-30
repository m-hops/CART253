class VisualSpook extends Interactable {

  constructor(x,y,w,h,image,hostRoom,td,speed,alpha,alphaSpeed,soundVolume,sound) {
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
    this.volume = soundVolume;
  }

  onClick(){
    //HANDLED IN INTERACTABLE//
  }

  run() {

    //IF SCARE IS ACTIVE//
    if (this.state == 'yes'){

      //LOCKS TRIGGER POINT FOR SCARE IN PLACE AND MONITORS FOR ACTIVATION RANGE//
      let cameraX = width/2 - this.hostRoom.backgroundX;
      let distanceToCam = abs(this.x - cameraX);

      if (distanceToCam < this.triggerDistance) {

        this.sound.setVolume(this.volume);
        this.sound.play();
        this.state = 'move';
      }
    }

    //ACTIVATES MOVEMENTS//
    else if (this.state == 'move') {
      this.x += this.speed;
      this.alpha += this.alphaSpeed;
    }
  }

  //RANDOM EVENT GENERATOR//
  onEnter(){

    let odds = random(0,1);

    if (odds < 0.5){
      this.x = this.originalX;
      this.y = this.originalY;
      this.alpha = this.originalAlpha;
      this.state = 'yes';
    } else this.state = 'no';
  }

  draw() {

    if (this.state != 'no'){
      push();
      fill(255,100);
      // noFill();
      // noStroke();
      tint(255,this.alpha);
      image(this.image,this.x,this.y);
      pop();
    }
  }


}
