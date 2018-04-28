/* global GWindow, animatedBall */


const GW_WIDTH = 650;
const GW_HEIGHT = 1000;


function drawWindow(){
  let gw = GWindow(GW_WIDTH, GW_HEIGHT);
  animatedBall(gw);
}
