//BOOKSHELF IN LIVING ROOM//
class Bookshelf extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,65,85);
    this.x = 460;
    this.y = 320;

    //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('A small collection of books on philosophy');
  }

  onSound(){
    console.log('soundHit');
  }

  onTouch(){
    console.log('touchHit');
    descriptionSet('You find a photo of the family used as a bookmark \n in a book on René Descartes. \nAll the faces have been scratched out.')
  }

  run(){
  //HANDLED IN UNIVERSALROOM//
  }

  draw(){
    push();
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
