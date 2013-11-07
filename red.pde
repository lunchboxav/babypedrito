int x, y;
int radius;
void setup() {
  size (300, 600);
  ProcessingInit();
  background (0);
  x = 0;
  y = 0;
  for (int i = 0; i <= height/2; i+=150) {
    fill (255);
    rect (x, i, width, 75);
    //y += 150;
  }
  smooth();
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw() {
  radius = width/3;
  fill (200, 0, 0);
  noStroke();
  ellipse (width/2+5, height/2-5, radius, radius);
}