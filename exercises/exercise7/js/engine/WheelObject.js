class WheelObject extends Interactable {

  constructor(x,y,w,h){
    super(x,y,w,h);
    this.soundActive = false;
    this.sightActive = false;
    this.touchActive = false;
  }
  onSight(){
    //HANDLED IN SIGHTB.JS//
  }

  onTouch(){
    //HANDLED IN TOUCHB.JS//
  }

  onSound(){
    //HANDLED IN SOUNDB.JS//
  }

  //SPAWNS INTERACT WHEEL WITH ALL COMPONENTS ONCE CALLED//
  onClick(){
    spawnInteractWheel(this);
  }

  onMouseEnter() {
    cursor('assets/images/cursorIconOverlayRed.png');
  }

  onMouseLeave(){
    cursor('assets/images/cursorIconOverlay.png');
  }

}
