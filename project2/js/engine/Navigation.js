class Navigation extends Interactable {

  constructor(x,y,w,h,destinationRoom) {
    super(x,y,w,h);
    this.destinationRoom = destinationRoom;
  }

  //PREVENTS INTERACT WHEEL FROM LAUNCHING//
  onClick(){
    haveInteractWheel = false;
    descriptionRemove();
    goToMenu(this.destinationRoom);
  }

  run() {
    //LEFT BLANK FOR NOW; RELATED TO GAMEOBJ//
  }

  //TARGETING SHAPE//
  draw() {
    push();
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
