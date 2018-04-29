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
  let dy = ballSize / 2;

  let ballTopRightCorner = 0;
  let ballTopLeftCorner = 0;
  let ballBottomRightCorner = 0;
  let ballBottomLeftCorner = 0;

  function step(){
    ball.move(dx, -dy);

    ballPosittionX = ballPosittionX + dx;
    ballPosittionY = ballPosittionY - dy;

    // Ball collision detection variables
    ballTopRightCorner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY - ballSize);
    ballTopLeftCorner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY - ballSize);
    ballBottomRightCorner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY + ballSize);
    ballBottomLeftCorner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY + ballSize);

    //  Checking for wall
    // Right wall
    if (ballPosittionX + ballSize/2 === 650){
      dx = -dx;
      return;
    }
    // Left Wall
    if (ballPosittionX - ballSize/2 === 0){
      dx = -dx;
      return;
    }
    // Top wall
    if (ballPosittionY - ballSize/2 === 0){
      dy = -dy;
      return;
    }
    // Under Paddle
    if (ballPosittionY + ballSize/2 > 705){
      alert("You lost");// game over
      clearInterval(timer);
    }
    // Checking for objects
    if(ballTopRightCorner !== null || ballTopLeftCorner !== null || ballBottomLeftCorner !== null|| ballBottomRightCorner !== null){
      //If object is present the ball's direction of travel switches, the ball rebounces
      dx = -dx;
      dy = -dy;
      // Ball Rebounding on a object from the ball top or the ball bottom
      if (dx > 0 && dy > 0 || dx < 0 && dy < 0 && ballTopRightCorner !== null || ballBottomLeftCorner !== null){
        dx = -dx;
        return;
      }
      if (dx > 0 && dy < 0 || dx < 0 && dy > 0 && ballBottomRightCorner !== null || ballTopLeftCorner !== null){
        dx = -dx;
        return;
      }
      // Ball Rebounding on a object from the ball left or right side
      if (dx > 0 && dy > 0 || dx < 0 && dy < 0 && ballTopLeftCorner !== null || ballBottomLeftCorner !== null){
        dy = -dy;
        return;
      }
      if (dx > 0 && dy < 0 || dx < 0 && dy > 0 && ballTopRightCorner !== null || ballBottomRightCorner !== null){
        dy = -dy;
        return;
      }
    }
  }
  let timer = setInterval(step, timeStep);// Calls the step() with a wait of timeStep in ms
}
