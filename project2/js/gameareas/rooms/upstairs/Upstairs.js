class Upstairs extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Navigation(400,322,170,210,'fronthall'));
    this.roomObjects.push(new Navigation(1095,508,130,85,'bedroom'));
    

  }

  draw(){
    image(upstairsBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
