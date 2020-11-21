class Bedroom extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Navigation(155,318,237,155,'upstairs'));
    this.roomObjects.push(new Key(width/2,height/2));

  }

  draw(){
    image(bedroomBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
