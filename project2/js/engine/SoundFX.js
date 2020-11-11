//UNIVERSAL SOUND EFFECT WITH A PAN EFFECT//
class SoundFX extends Interactable {
  constructor(x,y,w,h,soundFX,hostRoom,volume) {
    super(x,y,w,h);
    this.soundFX = soundFX;
    this.hostRoom = hostRoom;
    this.volume = volume;
  }

  //MAPS PAN EFFECT TO ADJUST LEVELS DEPENDING ON PLAYER VIEWPORT//
  run() {
    let cameraX = width/2 - this.hostRoom.backgroundX;
    let panning = (this.x - cameraX)/(width/2);
    this.soundFX.pan(panning);

  }

  //DRAWS TARGET SHAPE//
  draw() {
    push();
    // fill(255,100);
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

  //TURNS SOUND EFFECT ON UPON ENTERING ROOM//
  onEnter() {
    this.soundFX.setVolume(this.volume)
    this.soundFX.loop();
  }

  //TURNS SOUND EFFECT OFF OPON LEAVING ROOM//
  onExit() {
    this.soundFX.stop();
  }
}
