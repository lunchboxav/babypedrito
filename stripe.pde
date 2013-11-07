void setup(){
  size(300, 600);
  ProcessingInit();
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw(){
  background (0);
  int rectX = 0;
  for (int i = 0; i < 11; i++){
    pushMatrix();
    translate (150, -125);
    rotate (PI/4);
    
    rect (rectX, 0, 30, height);
    rectX += 60;
    popMatrix();
  }
  
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 200, 200);
}
