//UNIVERSAL ROOM CONTROLS FOR ANY ROOM AVAILABLE DURING EXPLORATION//
class UniversalRoom extends Interactable {

  constructor(){
    super(0,0);
    this.backgroundX = 0;
    this.backgroundY = 0;
    this.backgroundSpeed = 5;
    this.roomObjects = [];
  }

  //ARRAY FOR ROOMS CALLED ONCE MOUSE IS CLICKED IN LINKED ROOM//
  processMouseEvent(){

    descriptionRemove();

    for (let i = 0; i < this.roomObjects.length; i++){
      if (this.roomObjects[i].isPointInside(mouseX,mouseY)){
        if(this.roomObjects[i].processMouseEvent()) return true;
      }
    }
    spawnInteractWheel(new DummyObject());
    return true;
  }

  //ATTACHES UNIVERSAL ROOM CONTROL TO RELATED ROOM//
  run(){
    let offsetX = 0;
    let offsetY = 0;

    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].run();
    }

    //PLAYER NAVIGATION CONTROLS VIA WASD//
    if (keyIsDown(65)){
      offsetX = this.backgroundSpeed;
      haveInteractWheel = false;
      descriptionRemove();
    } else if (keyIsDown(68)){
      offsetX =- this.backgroundSpeed;
      haveInteractWheel = false;
      descriptionRemove();
    } else if (keyIsDown(83)){
      offsetY =- this.backgroundSpeed;
      haveInteractWheel = false;
      descriptionRemove();
    } else if (keyIsDown(87)){
      offsetY = this.backgroundSpeed;
      haveInteractWheel = false;
      descriptionRemove();
    }

    if (this.backgroundX + offsetX >= 50 || this.backgroundX + offsetX <= -500){
      offsetX = 0;
    }

    if (this.backgroundY + offsetY >= 50 || this.backgroundY + offsetY <= -100){
      offsetY = 0;
    }

    this.backgroundX += offsetX;
    this.backgroundY += offsetY;

    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].x += offsetX;
      this.roomObjects[i].y += offsetY;
    }
  }

  draw(){
    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].draw();
    }

    if (haveInteractWheel) {
      interactWheelObject.draw();
    }

    descriptionDraw();
  }

  onEnter() {

    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].x -= this.backgroundX;
      this.roomObjects[i].y -= this.backgroundY;
    }
    this.backgroundX = 0;
    this.backgroundY = 0;

    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].onEnter();
    }
  }

  onExit() {
    for (let i = 0; i < this.roomObjects.length; i++){
      this.roomObjects[i].onExit();
    }

  }
}
