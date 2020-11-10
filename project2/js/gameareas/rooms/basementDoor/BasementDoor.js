class BasementDoor extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
  }

  draw(){
    image(basementEntranceBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
