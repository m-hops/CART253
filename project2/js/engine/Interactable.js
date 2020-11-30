class Interactable extends GameOBJ {

  constructor(x,y,w,h) {
    super(x,y,w,h);
    super.init(x,y,w,h);
  }

//ACTIVATES INTERACTABLES ON MOUSE EVENT//
  processMouseEvent(){
    this.onClick();
    return true;
  }

  onMouseEnter(){
    //HANDLED IN ATTACHED OBJECTS//
  }

  onMouseLeave(){
    //HANDLED IN ATTACHED OBJECTS//
  }

  onClick(){
    //HANDLED IN ATTACHED OBJECTS//
  }

}
