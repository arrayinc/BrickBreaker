/* global GWindow, GRect */

let paddleWidth = 75;
let paddleHeight = 20;

function drawPaddle(gw) {
  let paddle = GRect(275, 700, paddleWidth, paddleHeight);
  paddle.setFilled(true);
  gw.add(paddle);
}

drawPaddle();
