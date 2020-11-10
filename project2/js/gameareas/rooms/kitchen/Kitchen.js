class Kitchen extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Navigation(40,520,150,100,'diningroom'));
    this.roomObjects.push(new Navigation(1300,120,120,100,'fronthall'));
  }

  draw(){
    image(kitchenBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
