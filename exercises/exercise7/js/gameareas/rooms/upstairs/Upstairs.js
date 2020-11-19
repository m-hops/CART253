class Upstairs extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Bookshelf(width/2,height/2));

  }

  draw(){
    image(livingRoomBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
