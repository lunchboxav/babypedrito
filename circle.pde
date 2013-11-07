int ellipseCount;
int alphaFill;
long lastTime = 0;
float ellipseSize;

void setup() {
  size (300, 600);
  ProcessingInit();
  ellipseCount=0;
  background (0);
  lastTime = millis();
  strokeWeight (10);
  stroke (255);
  fill (0);
  ellipseMode(CENTER);
  ellipseSize = random (width/20, width/15);
  ellipse (random(width), random(height), ellipseSize, ellipseSize);
}

void resize(float X, float Y) {
  size(X, Y);
}

void draw() {
  if ( millis() - lastTime > 2000) {
    strokeWeight (random(3,10))
    ellipseSize = random (width/15, width/2);
    ellipse (random(width/2-70, width/2+70), random(height/2-90, height/2+90), ellipseSize, ellipseSize);
    ellipseCount++;
    lastTime = millis();
  }

  if (ellipseCount == 12) {
    background (0);
    ellipseCount = 0;
  }
}