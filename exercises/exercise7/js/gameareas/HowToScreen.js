//INSTRUCTION MENU SCREEN//
class HowToScreen {

  constructor(){
    this.nextButtonX = 970;
    this.nextButtonY = 550;
    this.nextButtonGBW = 119;
    this.nextButtonGBH = 59;
    this.backButtonX = 100;
    this.backButtonY = 550;
    this.backButtonGBW = 119;
    this.backButtonGBH = 59;
  }

  //page1 page2 are static image intructions//
  page1(){
    image(howTo1,0,0);
  }

  page2(){
    image(howTo2,0,0);
  }

  //NEXTBUTTON AND BACKBUTTON NAVIGAITON//
  nextButton(){
    push();
    noFill();
    noStroke();
    rect(this.nextButtonX,this.nextButtonY,this.nextButtonGBW,this.nextButtonGBH);
    pop();

    image(next,this.nextButtonX,this.nextButtonY);
  }

  backButton(){
    push();
    noFill();
    noStroke();
    rect(this.backButtonX,this.backtButtonY,this.backButtonGBW,this.backButtonGBH);
    pop();

    image(back,this.backButtonX,this.backButtonY);
  }

}
