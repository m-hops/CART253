class SoundFX extends Interactable {
  constructor(x,y,w,h,soundFX,hostRoom) {
    super(x,y,w,h);
    this.soundFX = soundFX;
    this.hostRoom = hostRoom;
  }

  run() {
    let cameraX = width/2 - this.hostRoom.backgroundX;
    let panning = (this.x - cameraX)/(width/2);
    this.soundFX.pan(panning);

  }

  draw() {
    push();
    // fill(255,100);
    noFill();
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

  onEnter() {
    this.soundFX.loop();
  }

  onExit() {
    this.soundFX.stop();
  }
}
