//******* Ball *****
/* global GOval, gw, getElementAt, GW_WIDTH*/
let ballPosittionX = 312;
let ballPosittionY = 686;
let ballSize = 26;
let timeStep = 50;

function animatedBall(gw){
  let ball = GOval(ballPosittionX, ballPosittionY, ballSize);// Ball starting point on the paddle
  ball.setFilled(true);
  gw.add(ball);

                          /*    Directional Variables                      */
  let dx = ballSize / 2;  /*    At dx=ballSize/2 and at dy=ballSize/2     */
  let dy = ballSize / 2;  /*    Ball will move in 315 degree polar angle  */

  let ballTopRightCorner = 0;
  let ballTopLeftCorner = 0;
  let ballBottomRightCorner = 0;
  let ballBottomLeftCorner = 0;

  function step(){
    ball.move(dx, -dy);

    ballPosittionX = ballPosittionX + dx;
    ballPosittionY = ballPosittionY - dy;

    //****  Checking for Collisions *****

    // Ball collision detection variables
    ballTopRightCorner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY - ballSize);
    ballTopLeftCorner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY - ballSize);
    ballBottomRightCorner = gw.getElementAt(ballPosittionX + ballSize, ballPosittionY + ballSize);
    ballBottomLeftCorner = gw.getElementAt(ballPosittionX - ballSize, ballPosittionY + ballSize);



    //******* Checking for wall
    // If Right wall is present ball will rebound to the left
    if (ballPosittionX + ballSize/2 === GW_WIDTH){
      dx = -dx;
      return;
    }
    // If left wall is present ball will rebound to the right
    if (ballPosittionX - ballSize/2 === 0){
      dx = -dx;
      return;
    }
    // If top wall is present ball will rebound down
    if (ballPosittionY - ballSize/2 <= 0){
      dy = -dy;
      return;
    }
    // Under Paddle, If Paddle misses the ball
    if (ballPosittionY + ballSize/2 > 715){
      alert("You lost");// game over
      clearInterval(timer);
    }
    // Checking for objects
    if(ballTopRightCorner !== null || ballTopLeftCorner !== null || ballBottomLeftCorner !== null|| ballBottomRightCorner !== null){

      //*** Checking Left side
      // Ball Moving left and up will rebound to the right if object is present on its left
      if (dx < 0 && dy < 0 && ballTopLeftCorner !== null && ballBottomLeftCorner !== null){
        dx = -dx;
        return;
      }
      // Ball Moving left and down will rebound to the right if object is present on its left
      if (dx < 0 && dy > 0 && ballTopLeftCorner !== null && ballBottomLeftCorner !== null){
        dx = -dx;
        return;
      }

      //*** Checking Right side
      // Ball Moving right and up will rebound to the left if object is present on its left
      if (dx > 0 && dy < 0 && ballTopRightCorner !== null && ballBottomRightCorner !== null){
        dx = -dx;
        return;
      }
      // Ball Moving right and down will rebound to the left if object is present on its left
      if (dx > 0 && dy > 0 && ballTopRightCorner !== null && ballBottomRightCorner !== null){
        dx = -dx;
        return;
      }

      //*** Checking Top and Bottom
      // Ball Moving right/down or left/up will rebound to its oposite direction on the y axis if object is present on its top or bottom
      if (dx > 0 && dy > 0 || dx < 0 && dy < 0 && ballTopRightCorner !== null || ballBottomLeftCorner !== null){
        dy = -dy;
        return;
      }
      if (dx > 0 && dy > 0 || dx < 0 && dy < 0 && ballTopRightCorner !== null || ballBottomRightCorner !== null){
        dy = -dy;
        return;
      }
      // Ball Moving right/up or left/down will rebound to its oposite direction on the y axis if object is present on its top or bottom
      if (dx > 0 && dy < 0 || dx < 0 && dy > 0 && ballBottomRightCorner !== null || ballTopLeftCorner !== null){
        dy = -dy;
        return;
      }
      if (dx > 0 && dy < 0 || dx < 0 && dy > 0 && ballBottomRightCorner !== null || ballTopRightCorner !== null){
        dy = -dy;
        return;
      }
    }
  }
  let timer = setInterval(step, timeStep);// Calls the step() with a wait of timeStep in ms
}

//Block to text Ball collision detection and rebound motion
// function testBrick(gw) {
//   let brick = GRect(200,0,400,350);
//   brick.setFilled(true);
//   gw.add(brick);
// }
