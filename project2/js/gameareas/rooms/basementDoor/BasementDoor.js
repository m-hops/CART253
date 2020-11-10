class BasementDoor extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Navigation(185,262,129,79,'kitchen'));
    this.roomObjects.push(new Navigation(1460,280,135,79,'fronthall'));
  }

  draw(){
    image(basementEntranceBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
