class FullScreenScare {

  constructor() {
    this.x = -230;
    this.xh = 360;
    this.xlh = 250;
    this.xrh = 50;
    this.xs = 230;
    this.y = 600;
    this.yh = 200;
    this.ylh = 500;
    this.yrh = 530;
    this.ys = 500;
    this.speed1 = -1;
    this.speed2 = -10;
    this.rhspeed = 3;
    this.lhspeed = 1;
    this.lhspeedy = 10;
    this.lhrotation = 357;
    this.headSizeW = 400;
    this.headSizeH = 461;
    this.shoulderSizeW = 710;
    this.shoulderSizeH = 323;
    this.headSpeed = 2.5;
    this.headSpeed2 = 4.3;
    this.shoulderSpeed = 2;
    this.state = 'stage0';
    this.blackout = false;
    this.backgroundX = 0;
    this.backgroundY = 0;
    this.time = 0;
  }

  goToState(state) {

    this.state = state;

    if (this.state == 'stage1'){
      bigScare1Music.play();
    } else if (this.state == 'stage2'){
      bigScare1Music.stop();
    }

  }

  run() {

    //DISABLED CURSOR TO AVOID ACCIDENTAL INPUT DURING SCENE//
    noCursor();

    //INITIAL MOVEMENT COMMANDS FOR HANDS//
    if (this.state == 'stage1') {

      this.x = this.x + random(-1, 1);

      this.backgroundX = this.backgroundX + random(-1,1);
      this.backgroundY = this.backgroundY + random(-1,1);

      if (this.y >= 300) {
        this.y = this.y + this.speed1;
      } else if (this.y <= 300 && this.y >= 0) {
        this.y = this.y + this.speed2;
      } else if (this.y <= 0) {
        this.goToState('stage2');
      }
    }

    //BLACKOUT OF SCREEN//
    if (this.state == 'stage2') {

      this.time += deltaTime;

      if (this.time >= 0) {
        this.blackout = true;
      }

      if (this.time >= 100) {
        this.blackout = false;
      }

      if (this.time >= 4950) {
        this.blackout = true;
      }

      if (this.time >= 5000) {
        this.blackout = false;
        this.goToState('stage3')
        this.time = 0;
        borderActive = false;
      }
    }

    //FULL MOVEMENT OF HEAD, HANDS, AND CHEST//
    if (this.state == 'stage3') {

        this.time += deltaTime;

        //SHAKE EFFECT FOR BACKGROUND//
        this.backgroundX = this.backgroundX + random(-10,10);
        this.backgroundX = constrain(this.backgroundX,-100,0);

        this.backgroundY = this.backgroundY + random(-10,10);
        this.backgroundY = constrain(this.backgroundY,-100,0);

        //RIGHT HAND MOVEMENT//
        if (this.xrh <= 160) {
          this.xrh = this.xrh + this.rhspeed;
        }

        //LEFT HAND MOVEMENT//
        if (this.xlh >= 210) {
          this.xlh = this.xlh + -this.lhspeed;
        }

        if (this.ylh >= 150) {
          this.ylh = this.ylh + -this.lhspeedy;
        }

        //SHOULDER MOVEMENT//
        if (this.ys >= 440) {
          this.ys = this.ys + -this.shoulderSpeed;
        }

        if (this.xs >= 150) {
          this.xs = this.xs + -this.shoulderSpeed;
        }

        //HEAD MOVEMENT//
        if (this.xh >= 260) {
          this.xh = this.xh + -this.headSpeed;
        }

        if (this.yh >= 15) {
          this.yh = this.yh + -this.headSpeed2;
        }

        //HEAD SIZE GROWTH//
        if (this.headSizeW <= 495) {
          this.headSizeW = this.headSizeW + this.headSpeed;
        }

        if (this.headSizeH <= 555) {
          this.headSizeH = this.headSizeH + this.headSpeed;
        }

        //SHOULDER SIZE GROWTH//
        if (this.shoulderSizeW <= 785) {
          this.shoulderSizeW = this.shoulderSizeW + this.shoulderSpeed;
        }

        if (this.headSizeH <= 357) {
          this.shoulderSizeH = this.shoulderSizeH + this.shoulderSpeed;
        }

        //LOOPS GAME BACK TO BEGINNING//
        if (this.time >= 1500){

          //RESET CERTAIN PARAMETERS//
          borderActive = true;
          haveKey = false;
          fadeOutUnlock = false;
          activeScratch = true;

          fadeOutScreen.alpha = 0;

          //RESET ANIMATED SCENE BACK TO DEFAULT STATE//
          this.x = -230;
          this.xh = 360;
          this.xlh = 250;
          this.xrh = 50;
          this.xs = 230;
          this.y = 600;
          this.yh = 200;
          this.ylh = 500;
          this.yrh = 530;
          this.ys = 500;
          this.speed1 = -1;
          this.speed2 = -10;
          this.rhspeed = 3;
          this.lhspeed = 1;
          this.lhspeedy = 10;
          this.lhrotation = 357;
          this.headSizeW = 400;
          this.headSizeH = 461;
          this.shoulderSizeW = 710;
          this.shoulderSizeH = 323;
          this.headSpeed = 2.5;
          this.headSpeed2 = 4.3;
          this.shoulderSpeed = 2;
          this.state = 'stage0';
          this.blackout = false;
          this.backgroundX = 0;
          this.backgroundY = 0;
          this.time = 0;

          goToMenu('start');

          //RE-ENABLE CURSOR//
          cursor('assets/images/cursorIconOverlay.png');
        }
      }
    }

  draw() {

    //CONTAINS HAND IMAGES//
    if (this.state == 'stage1') {
      image(basementEntranceBKG,this.backgroundX,this.backgroundY);

      push();
      fill(0,150);
      rect(0, 0, width, height);
      pop();

      image(fullScreenHands, this.x, this.y);

      screenFlicker(0,255,20,20);

    // CONTAINS NO VISUALS OTHER THAN BACKGROUND//
    } else if (this.state == 'stage2') {

      image(basementEntranceOpenBKG,this.backgroundX,this.backgroundY);

      if (this.blackout == true) {
        push();
        fill(0);
        rect(0, 0, width, height);
        pop();
      } else return;

    //CONTAINS VISUALS HEAD, HANDS, AND TORSO AS WELL AS BACKGROUND//
    } else if (this.state == 'stage3') {

      push();
      fill(0);
      rect(0, 0, width, height);
      pop();

      image(basementEntranceOpenBKG,this.backgroundX,this.backgroundY);

      push();
      fill(0,190);
      rect(0, 0, width, height);
      pop();

      screenFlicker(0,255,20,20);

      image(fullScreenShoulders, this.xs, this.ys, this.shoulderSizeW, this.shoulderSizeH);

      blackBorder();

      push();
      image(fullScreenHead, this.xh, this.yh, this.headSizeW, this.headSizeH);
      pop();

      push();
      imageMode(CENTER);
      angleMode(DEGREES);
      translate(width / 2, height / 2);
      rotate(this.lhrotation);
      image(fullScreenLeftHand, this.xlh, this.ylh);
      pop();

      push();
      angleMode(DEGREES);
      rotate(350);
      image(fullScreenRightHand, this.xrh, this.yrh);
      pop();
    }
  }
}
