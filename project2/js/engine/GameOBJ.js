class GameOBJ {

  contructor(x,y,w,h){
    init(x,y,w,h);
  }

  init(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
  }

//RETURNS COLLISION DETECTION TRUE OR FALSE//
  isPointInside(x,y){
      return (x >= this.x &&
          y >= this.y &&
          x < this.x + this.width &&
          y < this.y + this.height);
  }

  run(){

  }

  draw(){

  }

  onEnter(){

  }

  onExit(){
    
  }
}