int elPosX, elPosY;

void setup() {
  size (300, 600);
  ProcessingInit();
  background (0);

  elPosX = width/2+75;
  elPosY = height/2-100;
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw() {
  background(0);
  fill (252, 243, 46);
  ellipse (elPosX, elPosY, 100, 100);
  elPosX += 1;
  if (elPosX > width + 100) {
    elPosX = width/2;
  }
  fill (255);
  triangle (-120, height/2+200, width/2, height/2-200, width+100, height/2+200);
}

