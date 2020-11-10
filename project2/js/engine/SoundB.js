//SOUND ICON ON INTERACT WHEEL//
class SoundB extends Interactable {

  constructor(x, y, object) {
    super(x, y, 100, 100);
    super.init(x, y, 100, 100);
    this.targetObject = object;
    this.size = 0;
    this.rotationspeed = 0.15;
    this.activate = false;
    this.alpha = 255;
    this.tint = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.fade = 5;
  }

  //SPAWNS SOUND ICON ON CLICK//
  onClick() {
    if (this.targetObject.soundActive) {
      this.targetObject.onSound();
      console.log("soundD");
    } else {
      //CREATES RED ERROR GRADIENT//
      this.tint.g = 0;
      this.tint.b = 0;
    }
  }

  draw() {

    //CREATES RED ERROR GRADIENT//
    if (this.tint.g < 255) {
      this.tint.g += this.fade;
    }

    if (this.tint.b < 255) {
      this.tint.b += this.fade;
    }

    //IMAGE OVERLAY WITH HITBOX//
    push();
    noFill();
    noStroke();
    ellipse(this.x, this.y, this.size);
    imageMode(CENTER);
    tint(this.tint.r, this.tint.g, this.tint.b, this.alpha);
    image(soundIconOverlay, this.x, this.y, this.size, this.size);
    pop();
  }
}
