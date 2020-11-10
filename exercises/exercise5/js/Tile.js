//OBJECT ATTRIBUTES FOR TILE//
class Tile {

//GIVES TILE DIMENSION//
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 20;
    this.active = true;
  }

//DISPLAYS TILE VISUALS//
  drawTile() {
    if (this.active) {
      push();
      noStroke();
      fill(255);
      rect(this.x, this.y, this.w, this.h);
      image(tileOverlay,this.x,this.y);
      pop();
    }
  }

//COLLISION DETECTION TO BE USED WITH BALL//
  distanceToPoint(pointX, pointY) {
    let centerX = this.x + this.w / 2;
    let centerY = this.y + this.h / 2;
    let extendX = this.w / 2;
    let extendY = this.h / 2;

    if (pointX <= centerX - extendX) {
      //POINT IS WEST//

      if (pointY < this.y) {
        //POINT IS NORTHWEST//
        return dist(this.x, this.y, pointX, pointY);

      } else if (pointY > centerY + extendY) {
        //POINT IS SOUTHWEST//
        return dist(this.x, this.y + this.h, pointX, pointY);

      } else {
        //POINT IS TRUE WEST//
        return centerX - (pointX + extendX);
      }
    } else if (pointX >= centerX + extendX) {
      //POINT IS EAST//
      if (pointY < this.y) {
        //POINT IT NORTHEAST//
        return dist(this.x + this.w, this.y, pointX, pointY);

      } else if (pointY > centerY + extendY) {
        //POINT IS SOUTHEAST//
        return dist(this.x + this.w, this.y + this.h, pointX, pointY);
      } else {
        //POINT IS TRUE EAST//
        return pointX - centerX - extendX;
      }
    } else {
      if (pointY > centerY) {
        //POINT IT TRUE NORTH//
        return pointY - (centerY + extendY);

      } else if (pointY < centerY) {
        //POINT IS TRUE SOUTH//
        return centerY - extendY - pointY;
      }
    }

  }

//RESET ACTIVE STATUS//
  reset(){
    this.active = true;
  }

}
