var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


var xPositions = [random (0, 400)];
var yPositions = [random (0, 400)];
var confettiColors = [color(10, 190, 190), color(108, 43, 186), color(255, 140, 0), color(0, 100, 190), color(218, 112, 214)];

  background(211, 211, 211);
  fill(244, 238, 224);
  strokeWeight(5);
  rect(100, 200, 200, 150);
  triangle(100, 200, 295, 200, 200, 280);
  fill(0, 0, 0);
  textSize(20);
  text("Hi Nathan!", 160, 50);
  text("Welcome to your e-card.", 90, 90)
  text("Click the envelope for your message.", 40, 130)

mouseClicked = function (){
  background(176, 224, 230);
  //rays
  strokeWeight(0.2);
  fill(255, 240, 100);
  triangle(0, 150, 0, 100, 200, 200);
  triangle(0, 50, 50, 0, 200, 200);
  triangle(150, 0, 250, 0, 200, 200);
  triangle(350, 0, 400, 50, 200, 200);
  triangle(400, 150, 400, 100, 200, 200);
  //envelope
  strokeWeight(5);
  fill(244, 238, 224);
  rect(100, 200, 200, 150);
  triangle(100, 200, 295, 200, 200, 280);
  fill(255, 250, 250);
  triangle(100, 200, 295, 200, 200, 280);
  triangle(100, 200, 295, 200, 200, 120);
  textSize(50);
  fill(0, 50, 120);
  text("Happy Birthday!", 30, 175);
  textSize(20);
  text("Click screen to add more confetti", 45, 390);
  strokeWeight(0.2);
  //confetti
  fill(confettiColors[1]);
  rect(100, 100, 10, 10);
  fill(confettiColors[2]);
  rect(300, 115, 10, 10);
  fill(confettiColors[3]);
  rect(185, 55, 10, 10);

  if (mouseClicked) {
    yPositions.push(random (0, 400));
    xPositions.push(random (0, 400));
    yPositions.push(random (0, 400));
    xPositions.push(random (0, 400));
  }

  for (var i = 0; i < xPositions.length; i++) {
    fill(confettiColors[i % confettiColors.length]);
    strokeWeight(.2);
    rect(xPositions[i], yPositions[i], 10, 10);
  }
}

}};
