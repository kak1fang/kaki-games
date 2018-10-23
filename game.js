var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       
        // Program goes here
        draw = function() {
            var ballX=200, ballY=200; 
            var Speedchange= 50;
            var ballXv= 300/Speedchange, ballYv= 3;
            var ballDiameter= 20;
            var isGamePaused = false;
            
            var paddle1X= 20;
            var paddle1W= 20, paddle2W =20;
            var paddle2X= width -paddle1X- paddle2W;
            var paddle1L=100, paddle2L =100;
            var paddle1Y= 200- 0.5* paddle1L;
            var paddle2Y= 200- 0.5* paddle2L;
            var paddleHue= 0;
            var lasttime= 0;
            var bestscore= 0;
            var GameStart= 1;
            var GameStarttime= 0;
            
            //timeing
            var time = 0;
            
            
            draw= function() {
                //gaming start page
                keyPressed= function(){
                    GameStart=0;
                };
                    
                if(GameStart===1){
                    background(0, 0, 0);
                    fill(255, 195, 64);
                    textSize(50);
                    text("Pong Game", width/2 - 135, height/2.7);
                    fill(92, 250, 255);
                    textSize(30);
                    text("by kakifang", width/2-78, height/2);
                    fill(240, 255, 107);
                    stroke(20);
                    textSize(20);
                    text("press any key to start", width/2-90,height/1.7);
                    fill(219, 214, 255);
                    textSize(15);
                    text("use arrow key to control the paddle", width/2- 118, height/1.5);
                    GameStarttime=millis();
                    fill(252, 184, 184);
                    textSize(15);
                    text("keep playing as long as possible", width/2- 103, height/1.4);
                    return;
                }
                //timing
                
                time = millis()-GameStarttime;
                if( isGamePaused){
                    return;
                }    
                
                
                
                background(100, 0 , 255);
                
                //ball 
                colorMode(HSB);
                fill(paddleHue* 1.2, 60, 200, 255);
                ellipse( ballX, ballY, ballDiameter , ballDiameter);
                
                //moving
                ballX +=ballXv;
                ballY +=ballYv;
                
                //changing colour
                paddleHue= paddleHue+0.5;
                paddleHue= paddleHue % 255;
            
                
                // draw a rectangle
                fill(paddleHue, 112, 225);
                rect( paddle1X, ballY - 0.5* paddle1L, paddle1W, paddle1L, 30);
                rect( paddle2X, paddle2Y , paddle2W, paddle2L, 30);
                //make the ball bounce of x axis of screen
                
                //if( ballX + 0.5*ballDiameter>=width){
                    //ballXv= -ballXv;
                //}
                //if( ballX - 0.5*ballDiameter<= 0){
                    //ballXv= -ballXv;
                //}
                //make the ball bounce of y axis of screen
                if( ballY + 0.5*ballDiameter>=width){
                    ballYv= -ballYv;
                }
                if( ballY - 0.5*ballDiameter<= 0){
                    ballYv= -ballYv;    
                }
                //moving
                if (keyIsPressed &&
                    keyCode === UP){
                    paddle2Y= paddle2Y-5;
                }
                if (keyIsPressed &&
                    keyCode === DOWN){
                    paddle2Y= paddle2Y+5;
                }
                paddle2Y= max ( paddle2Y, 0);
                paddle2Y= min ( paddle2Y, width - paddle2L);
                
                // pause the game
                if( ballX >=width || ballX<= 0 ){
                    isGamePaused = true;
                    fill(62, 105, 135);
                    textSize(45);
                    text("YOU LOST", width/2- 110, height/2);
                    textSize(20);
                    text(" press R to restart", width/2- 90, height/1.7);
                    
                    time= time- lasttime;
                    fill(0, 0, 0);
                    textSize(17);
                    text("time:",21,50);
                    text(time/1000, 69, 50);
                    
                    if ( time/1000 >= bestscore) {
                        bestscore = time/1000;
                    }
                    fill(135, 0, 135);
                    textSize( 25);
                    text( "bestscore:", width/2- 55, height/1.5);
                    text( bestscore, width/2 - 50, height/1.35);
                }
                keyTyped= function(){
                    if (key.toString() === 'r'){
                        isGamePaused= false;    
                        ballX= 200;
                        ballY= 200;
                        paddle1Y= 200- 0.5* paddle1L;
                        paddle2Y= 200- 0.5* paddle2L;
                        Speedchange=50;
                        lasttime= time;
                    }
                };
                
                //touch the paddale
                
            
                if( ballX === paddle2X - 0.5 *ballDiameter) {
                    if( ballY >= paddle2Y) {
                        if( ballY<= paddle2Y + paddle2L) {
                        Speedchange=Speedchange-5;
                        ballXv=-ballXv;
                        }
                    }
                }
                if( ballX === paddle1X + paddle1W + 0.5*ballDiameter){
                    Speedchange=Speedchange-5;
                    ballXv=-ballXv; 
                }
        }
    }
};