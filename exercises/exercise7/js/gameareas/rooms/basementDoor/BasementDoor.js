class BasementDoor extends UniversalRoom {

  constructor(){
    super(0,0);

//LINKS THE ROOM OBJECTS TO THE ROOM AND KEEPS THEM LOCKED IN PLACE//
    this.roomObjects.push(new SoundFX(900,95,50,50,heartbeatSound,this,0.4));
    this.roomObjects.push(new SoundFX(900,95,50,50,droneMusic,this,0.7));
    this.roomObjects.push(new Navigation(185,262,129,79,'kitchen'));
    this.roomObjects.push(new Navigation(1345,275,135,79,'fronthall'));
  }

  draw(){
    image(basementEntranceBKG,this.backgroundX,this.backgroundY);
    screenFlicker(0,0,80,110);
    super.draw();
  }
}
