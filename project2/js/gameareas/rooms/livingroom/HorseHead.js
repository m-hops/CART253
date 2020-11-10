//HORSE HEAD IN LIVING ROOM//
class HorseHead extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,85,65);
    this.x = 1080;
    this.y = 368;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('A statue of a pale horse head.\nIt looks like it\'s made out of marble');
  }

  onSound(){
    console.log('soundHit');
    // descriptionSet('');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('It feels weighty. ');
  }

  run(){
    //HANDLED IN UNIVERSALROOM//
  }

  //DRAWS HITBOX; LEAVE ALONE FOR COLLISION DETECTION TO WORK//
  draw(){
    push();
    fill(255,125);
    // noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
