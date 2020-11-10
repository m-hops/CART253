class Navigation extends Interactable {

  constructor(x,y,w,h,destinationRoom) {
    super(x,y,w,h);
    this.destinationRoom = destinationRoom;
  }

  onClick(){
    haveInteractWheel = false;
    descriptionRemove();
    goToMenu(this.destinationRoom);
  }

  run() {

  }

  draw() {
    push();
    fill(255,100);
    // noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}
