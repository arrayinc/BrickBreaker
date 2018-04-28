/*global GRect*/
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 30;
//let bricks = [9][9];


function createBricks(level,gw) {
  switch (level) {
    case 1:
      levelOneBricks(gw);
      break;
    default:
      levelOneBricks(gw);
  }
}

function levelOneBricks(gw) {
  for (let ii = 0; ii < 10; ii++){
    for (let jj =0;jj < 10; jj++){
      let brick = GRect(5+ (BRICK_WIDTH + 5) * ii,5 + (BRICK_HEIGHT + 5) * jj,BRICK_WIDTH,BRICK_HEIGHT);
      // switch (jj) {
      //   case 0:
      //   case 1:
      //     bricks[ii][jj].setColor(#AD3426);
      //     break;
      //   case 2:
      //   case 3:
      //     bricks[ii][jj].setColor(#E7A05B);
      //     break;
      //   case 4:
      //   case 5:
      //     bricks[ii][jj].setColor(#F2CE60);
      //     break;
      //   case 6:
      //   case 7:
      //     bricks[ii][jj].setColor(#639D46);
      //     break;
      //   case 8:
      //   case 9:
      //     bricks[ii][jj].setColor(#2F67ED);
      //     break;
      //   default:
      //
      // }


      switch (jj) {
        case 0:
        case 1:
          brick.setColor("#AD3426");
          break;
        case 2:
        case 3:
          brick.setColor("#E7A05B");
          break;
        case 4:
        case 5:
          brick.setColor("#F2CE60");
          break;
        case 6:
        case 7:
          brick.setColor("#639D46");
          break;
        case 8:
        case 9:
          brick.setColor("#2F67ED");
          break;
        default:

      }


      //bricks[ii][jj].setFilled(true);
      //gw.add(bricks[ii][jj]);

      brick.setFilled(true);
      gw.add(brick);
    }
  }
}

function testBrick(gw) {
  let brick = GRect(0,0,BRICK_WIDTH,BRICK_HEIGHT);
  brick.setFilled(true);
  gw.add(brick);
}
