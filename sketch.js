let mic;
let leftlidMove = 0;
let rightlidMove = 0;
let myCircle;


 function setup(){
  
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  background(122, 167, 255);
  drawBox();
  drawLid();
  frameRate(30);
   
    // create circles
    myCircle = new 
    Circle();
   
   
   
}

function mousePressed(){

// if the position of the mouse is inside the blue box then
  if (mouseX > width * 0.3 && mouseX < width * 0.7 && mouseY > height * 0.7) 
    console.log("mouse beep in there");

}

function draw(){
 background(122, 167, 255);
  drawBox();
  drawLid();
  micLevel = mic.getLevel();

  
  //eye movement
  strokeWeight(0.5)
  stroke(0,0,0)
  verticalMove = map(mouseY, 10, 1000, -10, 30);
  horizontalMove = map(mouseX, -40, 25, -2, -1.4);
  let y = 230 - micLevel * height;
  
  
  
  //Head
  fill(250, 230, 80)
  ellipse(290, y, 180, 120);
    fill(250, 230, 80)
  
   //Left Ear
  let var1 = 80
  let y1 = 172 - micLevel * height;
  arc(198, y1, var1, var1, 1.4, 6.55, PI + QUARTER_PI, OPEN);
  
   //Right Ear
  let y2 = 182 - micLevel * height;
  arc(391, y2 , var1, var1, 3.01, 1.9, PI + QUARTER_PI, OPEN);
  
    //Nose
  fill(242, 80, 80)
   ellipse(270, y , 10, 05) 
  
      //Left eye
  let var2 = 40
  let y3 = 210 - micLevel * height;
  fill(255, 255, 255)
   ellipse(250, y3 , 20, var2)
  
  //Right eye
  let y4 = 207 - micLevel * height;
   ellipse(300, y4 , 20, var2)
  
  //Left eyeball
  fill(0, 0, 0)
  let var3 =8
  let y5 = 209 - micLevel * height;
   circle(249+horizontalMove, y5+verticalMove , var3)
  
  //Right eyeball
  let y6 = 204 - micLevel * height;
   circle(298+horizontalMove, y6+verticalMove , var3)
  
 //left Lid Movement
  if ((frameCount % 3) ==0){
    leftlidMove = leftlidMove + 2;
  }
  if(leftlidMove > 70){
    leftlidMove = 0
  }
  
  //Right Lid Movement
  if ((frameCount % 3) ==0){
    rightlidMove = rightlidMove + -2;
  }
  if (rightlidMove < -70){
    rightlidMove = 0
  }
  
  
  
  
  // Circle display
    myCircle.display();

  // Circle movement
    for (let i = 0; i < 8; i++) {
    if(i % 10 == 0) {
      myCircle.shoot();}
  }
  
  
}

function drawBox (){
     //Box
  strokeWeight(0.5)
  stroke(0,0,0)
  fill(255, 120, 235)
  rect(175, 420, 250, 150);
}

function drawLid(){
    //box lid left
  quad(175, 420, 195, 420, 73+leftlidMove, 240, 60+leftlidMove, 250)
  
  //box lid right
  quad(405, 420, 425, 420, 529+rightlidMove, 260, 515+rightlidMove, 250)
}





// class

class Circle {
  constructor(xpos, ypos, size, xspeed, yspeed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
    
  
  display (){
    push();
    noFill();
    strokeWeight(7);
    stroke(255, 255, 255);
   
  ellipse(this.xPos, this.yPos, this.size);
    translate(5,7);
   translate(p5.Vector.fromAngle(millis() / 1500, 40));
    circle(50, 90, 20);
    circle(300, 30, 10);
    
    translate (15,4)
    translate (p5.Vector.fromAngle(millis() / -500, 10));
    circle(100, 250, 20);
    circle(200, 70, 20);
    
    translate (1,1)
    translate (p5.Vector.fromAngle(millis() / -1000, 50,));
    circle(30, 30, 30);
    circle(400, 40, 20);
    
    translate (10,10)
    translate (p5.Vector.fromAngle(millis() / 800, 10,));
    circle(500, 70, 30);
    circle(470, 160, 20);
    
    
   }

  shoot() {
    this.xpos = this.xpos + this.xspeed;
    this.ypos = this.ypos + this.yspeed;
   
    if (this.xpos > width+200 || this.xpos < -200) {
      this.xspeed = this.xspeed*-1
    } 
    if (this.ypos > height+20 || this.xpos < -20) {
      this.yspeed = this.yspeed*-1;
    }
  }



}