//DAGGER IN THE DINING ROOM//
class Dagger extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,45,70);
    this.x = 1120;
    this.y = 361;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('A silver goblet.\nFrom the inscriptions on the outside, you recognize it\'s purpose as a\ncontainer for holy water in exorcism ceremonies.');
  }

  onSound(){
    console.log('soundHit');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('You attempt to pick up the cup but are met with a sharp pain at your fingertips.\nThe cup feels as hot as a stove top. But how?');
  }

  run(){
    //HANDLED IN UNIVERSALROOM//
  }

  //DRAWS HITBOX; LEAVE ALONE FOR COLLISION DETECTION TO WORK//
  draw(){
    push();
    // fill(255,125);
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
