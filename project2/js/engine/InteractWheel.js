//MASTER CLASS FOR THE INTERACTIVE WHEEL//
class InteractWheel extends GameOBJ {
  constructor(x, y, object) {
    super(x,y,200,200);
    super.init(x,y,200,200);
    this.targetObject = object;
    this.size = 0;
    this.speed = 15;
    this.buttonspeed=9;
    this.rotationspeed=0.2;
    this.activate = false;
    this.rotate = 0;
    this.sight = new SightB(x,y,object);
    this.sound = new SoundB(x,y,object);
    this.touch = new TouchB(x,y,object);
  }

  //COLLISION DETECTION FOR INTERACTABLE OPTIONS//
  processMouseEvent(){

    //DEFINES DISTANCES BETWEEN MOUSE AND INTERATICE ICONS//
    let sightD = dist(mouseX,mouseY,this.sight.x,this.sight.y);
    let soundD = dist(mouseX,mouseY,this.sound.x,this.sound.y);
    let touchD = dist(mouseX,mouseY,this.touch.x,this.touch.y);

    //CALLS UP FUNCTIONS TO IMPLEMENT EVENT//
   if (sightD <= this.sight.size/2){
     this.sight.onClick();
     return true;
   } else if (soundD <= this.sound.size/2){
     this.sound.onClick();
    return true;
  } else if (touchD <= this.touch.size/2){
     this.touch.onClick();
     return true;
   }

   return false;
  }

  //MOVEMENT FORUMLAS FOR INTERACTWHEEL WHEN CALLED AS WELL AS CONSTRAINTS//
  run() {
        this.size = this.size + this.speed;
        this.size = constrain(this.size, 0, 200);

        this.sight.size = this.sight.size + this.buttonspeed;
        this.sight.size = constrain(this.sight.size, 0, 100);

        this.sound.size = this.sound.size + this.buttonspeed;
        this.sound.size = constrain(this.sound.size, 0, 100);

        this.touch.size = this.touch.size + this.buttonspeed;
        this.touch.size = constrain(this.touch.size, 0, 100);

        this.rotate = this.rotate + this.rotationspeed;

        this.sight.x = cos(this.rotate) * this.size/2 + this.x;
        this.sight.y = sin(this.rotate) * this.size/2 + this.y;

        this.sound.x = cos(this.rotate + 120) * this.size/2 + this.x;
        this.sound.y = sin(this.rotate + 120) * this.size/2 + this.y;

        this.touch.x = cos(this.rotate + 240) * this.size/2 + this.x;
        this.touch.y = sin(this.rotate + 240) * this.size/2 + this.y;
  }

  draw() {
    super.draw();

    push();
    angleMode(DEGREES);
    textStaticShadow();
    translate(this.x,this.y);
    rotate(this.rotate);

    imageMode(CENTER);

    image(interactWheelOverlay, 0, 0, this.size, this.size);
    pop();

    this.sight.draw();
    this.sound.draw();
    this.touch.draw();
  }
}
