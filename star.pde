void setup() {
  size (300, 600);
  ProcessingInit();
  smooth();
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw() {
  background(0);
  drawStar(width/2, height/2);
  drawStar(100, 0);
  drawStar(-200, 0);
  drawStar(50,-70);
  drawStar(100,0);
  drawStar(-50,-70);
}

void drawStar(int x, int y){
  translate(x, y);
  //stroke(230,0,0);
  fill(255);
  strokeWeight(3);
  beginShape();
  vertex(0, -50);
  vertex(14, -20);
  vertex(47, -15);
  vertex(23, 7);
  vertex(29, 40);
  vertex(0, 25);
  vertex(-29, 40);
  vertex(-23, 7);
  vertex(-47, -15);
  vertex(-14, -20);
  endShape(CLOSE);
}