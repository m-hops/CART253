//WALLCRACK IN LIVING ROOM//
class Wallcrack extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,40,80);
    this.x = 665;
    this.y = 130;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = true;
    this.sightActive = true;
    this.touchActive = false;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('Behind the painting is a hole punched in the wall.\nA couple of flies go in and out.');
  }

  onSound(){
    console.log('soundHit');
    descriptionSet('You lean in and hear the faintest noise of what sounds like a\n100 voices whispering.');
  }

  onTouch(){
    console.log('touchHit');
    // descriptionSet();
  }

  run(){
    //HANDLED IN UNIVERSALROOM//
  }

  //DRAWS HITBOX; LEAVE ALONE FOR COLLISION DETECTION TO WORK//
  draw(){
    push();
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
