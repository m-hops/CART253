//PIPPIN IF YOU'RE READING THIS, I'M STILL WORKING ON THIS GAME EVEN AFTER SUBMISSION SO I'M LEAVING THIS IN FOR NOW BUT AS YOU PROBABLY FIGURED IT DOESN'T DO ANYTHING YET//
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
