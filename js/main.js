/* global GWindow, animatedBall, drawPaddle, createBricks */


const GW_WIDTH = 650;
const GW_HEIGHT = 800;


function drawWindow(){
  GWindow(400, 0);
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);

  animatedBall(gw);
  drawPaddle(gw);
  createBricks(1,gw);
}
