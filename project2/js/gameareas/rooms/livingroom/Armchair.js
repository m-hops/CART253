//ARMCHAIR IN LIVING ROOM//
class Armchair extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,130,200);
    this.x = 325;
    this.y = 350;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('A well worn armchair that appears to have been heavily scratched\nacross the bottom.\nThese marks look recent.');
  }

  onSound(){
    console.log('soundHit');
    // descriptionSet('');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('The polyester cloth feels smooth beneath your fingertips.');
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
