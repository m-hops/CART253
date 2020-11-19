//HORSE HAND IN DINING ROOM//
class Hand extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,155,200);
    this.x = 765;
    this.y = 215;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('It\'s... It\'s Father Balths. It\'s his arm; you recognize the military tattoo.\nIt looks like it\'s been cleanly ripped off while on the top rests someones eye.\nYou wonder where the other one is...');
  }

  onSound(){
    console.log('soundHit');
    // descriptionSet('');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('The arm is luke warm.\nYou assume this was removed and placed here recently.\nThere are punctures in the arm that appear to be a point where fingers dug in.');
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
