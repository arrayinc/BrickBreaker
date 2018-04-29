//******* Ball *****
/* global GOval, gw, getElementAt */
let ballPosittionX = 312;
let ballPosittionY = 686;
let ballSize = 26;
let timeStep = 50;

function animatedBall(gw){
  let ball = GOval(ballPosittionX, ballPosittionY, ballSize);// Ball starting point on the paddle
  ball.setFilled(true);
  gw.add(ball);


  let dx = ballSize / 2;
  let dy = ballSize / 1.7;
  let stepCount = 0;

  let ballTopRightConner = 0;
  let ballTopLeftConner = 0;
  let ballBottomRightConner = 0;
  let ballBottomLeftConner = 0;

  function step(){
    ball.move(dx, -dy);
    stepCount++;
    //if(stepCount === timeStep) clearInterval(timer);

    ballPosittionX = ballPosittionX + dx;
    ballPosittionY = ballPosittionY - dy;

    ballTopRightConner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY - ballSize);
    ballTopLeftConner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY - ballSize);
    ballBottomRightConner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY + ballSize);
    ballBottomLeftConner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY + ballSize);

    if(ballTopRightConner !== null || ballTopLeftConner !== null || ballBottomLeftConner !== null|| ballBottomRightConner !== null){
      dx = -dx;
      dy = -dy;
    }

  }
  let timer = setInterval(step, timeStep);// Calls the step() with a wait of timeStep in ms
}
