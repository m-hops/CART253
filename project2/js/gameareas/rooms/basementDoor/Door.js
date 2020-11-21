//DOOR ON BASEMENT SCREEN//
class Door extends WheelObject {

//ADJUSTS DIMENSIONS OF HITBOX//
  constructor(x,y){
    super(x,y,230,465);
    this.x = 690;
    this.y = 124;

  //FLIP TRUE AND FALSE IN ACCORDANCE TO WHETHER ATTRIBUTE IS ACTIVE//
    this.soundActive = true;
    this.sightActive = true;
    this.touchActive = true;
  }

  //FILL IN DESCRIPTION SET TO PRODUCE TEXT//
  onSight(){
    console.log('sightHit');
    descriptionSet('What... What is this?\nIt\'s blasphemous!\nWho did this??');
  }

  onSound(){
    console.log('soundHit');
    descriptionSet('A low, unearthly drone emits from the door\nalong with a faint heartbeat that\nalmost rattles the otherwise sturdy door.');
  }

  onTouch(){
    console.log('touchHit');

    if (haveKey == false){
      descriptionSet('You try and open the door, but it won\'t budge.\nIt\'s locked\nPerhaps there\'s a key around here somewhere...');
    } else {
      unlockSound.play();
      time = 0;
      fadeOutUnlock = true;
    }
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
