//******* Ball *****
/* global GOval, gw */

let ballSize = 25;
let timeStep = 50;

function animatedBall(gw){
  let ball = GOval( 275, 700, ballSize);
  ball.setFilled(true);
  gw.add(ball);


  let dx = (gw.getWidth() - ballSize) / timeStep;
  let dy = (gw.getHeight() - ballSize) / timeStep;
  let stepCount = 0;

  function step(){
    ball.move(dx, -dy);
    stepCount++;
    if(stepCount === timeStep) clearInterval(timer);
  }
  let timer = setInterval(step, timeStep);
}
