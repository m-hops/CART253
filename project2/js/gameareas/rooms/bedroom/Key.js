//BOOKSHELF IN LIVING ROOM//
class Key extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,100,100);
    this.x = 1450;
    this.y = 448;

    //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = false;
    this.sightActive = false;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
  }

  onSound(){
    console.log('soundHit');
  }

  onTouch(){

    //CONDITIONALS SETUP FOR ONCE THE KEY IS ACQUIRED//
    if (haveKey == false) {
      console.log('touchHit');
      descriptionSet('You open the drawer and find a small key\ncovered in dried blood.\nYou pocket the key.')
      haveKey = true;
    } else {
      descriptionSet('The drawer is empty.')
    }


  }

  run(){
  //HANDLED IN UNIVERSALROOM//
  }

  draw(){
    push();
    noFill();
    // noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
