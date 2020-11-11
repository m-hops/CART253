class DiningRoom extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new FloatingPlant1(width/2,height/2));
    this.roomObjects.push(new Hand(width/2,height/2));
    this.roomObjects.push(new Navigation(92,390,119,98,'livingroom'));
    this.roomObjects.push(new Navigation(1510,395,100,75,'kitchen'));
  }

  draw(){
    image(diningRoomBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
