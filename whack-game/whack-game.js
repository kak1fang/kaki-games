var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       

        //es666
        class Mole{
            constructor(x, y, radius){
                this.molex=x;
                this.moley=y;
                this.diameter= 2 * radius;
            }
            draw(){
                strokeWeight(0.35);
                //face
                fill(255, 188, 64);
                ellipse(this.molex,this.moley,this.diameter,this.diameter);
                
                //eyes
                fill(97, 75, 194);
                ellipse(this.molex - 0.2 * this.diameter,this.moley - 0.29 * this.diameter, this.diameter /5, this.diameter/ 10);
                ellipse(this.molex + 0.13 * this.diameter,this.moley - 0.29 * this.diameter, this.diameter /5, this.diameter/ 10);
                //mouse
                fill(255, 0, 0);
                rect(this. molex - 0.25 * this.diameter, this.moley, this.diameter * 0.44, this.diameter*0.13);
        
            }
            
            containsPoint(pointX,pointY){
                var distance = dist(pointX, pointY, this.molex, this.moley);
                return distance <= this.diameter * 0.5;
            }
        
        }
        // Program goes here
        
    
        
        frameRate(2);
        var score = 0;  
    

        var moles=[];

        moles.push(new Mole(200,200,100),
                new Mole(100,100,25)        
                                        );


        draw= function() {
            background(66, 53, 53);
            
            for(var i =0; i < moles.length; i++){
                var mole = moles[i];
                mole.draw();
            }
    
            fill(245, 226, 226);
            text("Score :" + score, 297, 22);
            
            moles.push(new Mole(random(width), random(height), random(25, 100)));
            
        };


        mouseClicked = function(){
            
            for(var i = moles.length - 1; i >= 0; i--){
                var mole = moles[i];
                
                if(mole.containsPoint(mouseX, mouseY)){ 
                    moles.splice(i, 1);
                    score += 1 ; 
                }
            }    
        };


            
    };
}
    
