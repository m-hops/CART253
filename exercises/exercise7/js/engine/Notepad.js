//CLASS FOR NOTEPAD: PLEASE NOTE THIS HAS NOT BEEN FINISHED YET AND IS ONLY JUST BEING BUILT//
class Notepad {

  constructor(){
    this.x = 400;
    this.y = 250;
    this.active = false;
  }

  onShift(){
    if (!this.active){
      this.active = true;
    } else if (this.active){
      this.active = false;
    }
  }

  draw(){
    image(userNotepadIMG, this.x, this.y);
  }
}
