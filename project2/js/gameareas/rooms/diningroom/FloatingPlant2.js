//HRIGHT FLOATING PLANT IN THE DINING ROOM//
class FloatingPlant2 extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,225,325);
    this.x = 1405;
    this.y = 35;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = true;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('A plant, floating upside down and in midair.\nNo movement, but no indication as to what is causing this.\nA couple of leaves fall to the ground.');
  }

  onSound(){
    console.log('soundHit');
    descriptionSet('The leaves move ever so slightly from a light breeze you can\'t feel.\nThe vines playfully brush up against each other.');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('You put your hand into the plant and immediately recoil.\nYou swear one of the vines attempted to grab you.');
    leaveRustleSound.play();
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
