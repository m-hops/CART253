//FILE IN LIVING ROOM//
class File extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,75,65);
    this.x = 780;
    this.y = 510;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('It\'s a file on the young boy who lives here.\nThe writing on the outside of the file seems to indicate it comes directly from\nthe church.');
  }

  onSound(){
    console.log('soundHit');
    // descriptionSet('');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('You flick through the file. Psych evalutions, brain scans, photos, etc.\nIt\'s clear that no doctor was able to find an issue with the child.');
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
