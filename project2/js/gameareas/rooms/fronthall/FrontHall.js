class FrontHall extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Navigation(1495,470,80,135,'basementdoor'));
    this.roomObjects.push(new Navigation(500,180,110,55,'livingroom'));
    this.roomObjects.push(new VisualSpook(1205,200,110,55,shadowMirrorFrontHall,this,300,2,255,-15));
  }


  draw(){
    image(frontHallBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
