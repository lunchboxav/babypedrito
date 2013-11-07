void setup(){
  size(300, 600);
  ProcessingInit();
  noStroke();
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw(){
  background (0);
  fill (255);
  ellipse(width/2-60, height/2-100, 80, 80);
  ellipse(width/2+60, height/2-100, 80, 80);
  
  rect(width/4-50, height-300, 50, 75);
  rect(width/4-50, height-250, width/2+100, 50);
  rect(3*width/4, height-300, 50, 75);
}
