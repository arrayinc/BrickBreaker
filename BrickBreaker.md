# BrickBreaker
Write a program to play the classic arcade game of Breakout, which was developed in 1976 by Steve Wozniak, who would later become one of the founders of Apple. In Breakout, your goal is to clear a collection of bricks by hitting each of them with a bouncing ball. 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_531D650F7CC7D5BD3739181B48117B7CC56A214810CDF17F06544F5D0A2E0148_1524862795828_Screen+Shot+2018-04-27+at+2.59.33+PM.png)


The initial configuration of the Breakout game appears in the leftmost diagram in Figure 6- 14. The colored rectangles in the top part of the screen are bricks, two rows each of red, orange, yellow, green, and blue. The slightly larger rectangle at the bottom is the paddle. The paddle is in a fixed position in the vertical dimension, but moves back and forth across the screen along with the mouse until it reaches the edge of its space. 

A complete Breakout game consists of three turns. On each turn, a ball is launched from the center of the window toward the bottom of the screen at a random angle. That ball bounces off the paddle and the walls of the world. Thus, after two bounces—one off the paddle and one off the right wall—the ball might have the trajectory shown in the middle diagram. 

As you can see from the middle diagram, the ball is about to collide with one of the bricks on the bottom row. When that happens, the ball bounces just as it does on any other collision, but the brick disappears (which you can accomplish simply by removing it from the graphics window). The play continues in this way until one of the following conditions occurs: 


- The ball hits the lower wall, which means that you must have missed it with the paddle. In this case, the turn ends and the next ball is served, assuming that you have not already exhausted your allotment of three turns. If you have, the game ends in a loss. 
- The last brick is eliminated. In this case, the game ends immediately, and you can retire victorious. 

After all the bricks in a particular column have been cleared, a path will open to the top wall, as shown in the rightmost diagram in Figure 6-14. When this delightful situation occurs, the ball will often bounce back and forth several times between the top wall and the upper line of bricks without the user ever having to worry about hitting the ball with the paddle. This condition is called “breaking out.” It is important to note that, even though breaking out is a very exciting part of the player’s experience, you don’t have to do anything special in your program to make it happen. The game operates the same as always: balls bounce off walls, collide with bricks, and obey the laws of physics. 

The only part of the implementation that requires some explanation is the problem of checking to see whether the ball has collided with a brick or the paddle. The **getElementAt** method can determine whether there is an object at a particular position, but it doesn’t work well to check the coordinates of the center because the ball is larger than a single point. In this program, the simplest strategy is to check the four corner points on the square in which the ball is inscribed. A collision occurs if any of those points are inside a brick.

