//START LANDING PAGE//
class StartScreenObj{

//MAIN PARAMTETERS//
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color= 255;
    this.menuSize = 35;
    this.titleX= 750;
    this.titleY= 170;
    this.titleSize= 50;
    this.startX = 760;
    this.startY = 250;
    this.howX = 760;
    this.howY = 320;
    this.optX = 760;
    this.optY = 390;
  }

//MAIN TITLE//
  titleText(){

      //SHADOWS BEHIND TITLE//
      textDynamicShadow('the lessor key',this.titleSize, 700, 790, 150, 190);

      //ADDS MINOR SHAKE TO TITLE//
      let movement = random(-1,1);

      push();
      fill(this.color);
      textFont(glitchFontBold);
      textSize(this.titleSize);
      textStaticShadow();
      text('the lessor key', this.titleX + movement, this.titleY + movement);
      pop();
  }

  //MENU TEXT AND HITBOX LINEUP//
  menuText(){

    let offsetStartY = this.startY - 30;
    let rectStartW = 70;
    let rectStartH = 40;

    let offsetHowY = this.howY - 30;
    let rectHowW = 102;
    let rectHowH = 40;

    let offsetOptY = this.optY - 30;
    let rectOptW = 102;
    let rectOptH = 40;

    push();
    noFill();
    noStroke();
    rect(this.startX,offsetStartY,rectStartW,rectStartH);
    pop();

    push();
    fill(this.color);
    textFont(glitchFont);
    textSize(this.menuSize);
    textStaticShadow();
    text('start', this.startX, this.startY);
    pop();

    push();
    noFill();
    noStroke();
    rect(this.startX,offsetHowY,rectHowW,rectHowH);
    pop();

    push();
    fill(this.color);
    textFont(glitchFont);
    textSize(this.menuSize);
    textStaticShadow();
    text('how to', this.howX, this.howY);
    pop();

    push();
    noFill();
    noStroke();
    rect(this.startX,offsetOptY,rectOptW,rectOptH);
    pop();

  }

  drawStartScreen(){

    //GIVES SCREEN MINOR SHAKE//
    let movement = random(-1,1);

    image(startScreenBKG,this.x + movement,this.y + movement);
  }
}
