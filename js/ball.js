//******* Ball *****
/* global GOval, gw */

let ballSize = 25;
let timeStep = 50;

function animatedBall(gw){
  let ball = GOval( 275, 700, ballSize);
  ball.setFilled(true);
  gw.add(ball);


  let dy = (gw.getWidth() - ballSize) / timeStep;
  let dx = (gw.getHeight() + ballSize) / timeStep;
  let stepCount = 0;

  function step(){
    ball.move(dx, dy);
    stepCount++;
    if(stepCount === timeStep) clearInterval(timer);
  }
  let timer = setInterval(step, timeStep);
}
