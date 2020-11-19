//TV IN LIVING ROOM//
class TV extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,170,135);
    this.x = 20;
    this.y = 165;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = true;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionImageSet('The news anchors have stopped talking and look like\n they\'re staring right at you. \nThe unnatural smiles on their faces cause your stomach to drop.',television);
  }

  onSound(){
    console.log('soundHit');
    descriptionSet('The electric hum of the television blends into the rooms ambient noise.');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('You slide your finger across the screen and inspect the red liquid.\nThe metalic smell confirms your suspicion as to what it is.');
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
