class drawCircle {
  constructor(_xPos, _yPos, _rotation){
   this.xPos = _xPos;
   this.yPos = _yPos;
   this.rotation = _rotation;
    }
  
  display(){
           //background
  push();
  translate(xPos, yPos);
  rotate(rotation);
  fill (187, 255, 145);
    circle(50, 90, 20);
    circle(30, 30, 20);
    circle(100, 250, 20);
    circle(200, 70, 20);
    circle(300, 30, 20);
    circle(400, 40, 20);
    circle(500, 70, 20);
    circle(470, 160, 20);
  }
  
  move(){
    
    if (this.yPos <= height){
      
    this.yPos += 2;
  } else {
    this.yPos = 0;
  }
 }
}




