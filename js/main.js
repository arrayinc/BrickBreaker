/* global GWindow, animatedBall */


const GW_WIDTH = 650;
const GW_HEIGHT = 800;


function drawWindow(){
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);

  animatedBall(gw);
  drawPaddle(gw);
}
