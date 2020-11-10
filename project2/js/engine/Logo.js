//PARAMETERS FOR AUDIO PLAYBACK ON LOGO//
class LogoOBJ {

  constructor() {
    this.x = -250;
    this.y = -20;
    this.alpha = 0;
    this.shade = 255;
    this.speed = 4;
  }

//NOTE: THIS WILL NOT WORK ON CHROME DUE TO AUTOPLAY, CONSIDER USING A MENU WITH CLICK TO PLAY AHEAD OF TIME//
  sfx() {
    logoSound.play(1);
  }

//DRAWS LOGO WITH A VALUE ASSIGNED TO ALPHA CHANNEL//
  drawIntro(alpha) {

    push();
    tint(this.shade, alpha);
    image(logo, this.x, this.y);
    pop();
  }
}
