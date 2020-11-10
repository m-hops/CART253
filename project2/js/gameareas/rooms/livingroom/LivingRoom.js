class LivingRoom extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new Bookshelf(width/2,height/2));
    this.roomObjects.push(new TV(width/2,height/2));
    this.roomObjects.push(new Wallcrack(width/2,height/2));
    this.roomObjects.push(new Armchair(width/2,height/2));
    this.roomObjects.push(new File(width/2,height/2));
    this.roomObjects.push(new Navigation(1430,470,80,152,'diningroom'));
    this.roomObjects.push(new Navigation(36,360,100,70,'fronthall'));
    this.roomObjects.push(new SoundFX(1295,95,50,50,clockSound,this));
  }

  draw(){
    image(livingRoomBKG,this.backgroundX,this.backgroundY);
    super.draw();
  }
}
