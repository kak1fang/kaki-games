class Vertex{
    constructor(x,y,state,select){
        this.x = x;
        this.y = y;
        this.state = false;
        this.select = false;

        
    }

    detectState(){
        if(dist(mouseX, mouseY, this.x, this.y) <= 10){
            this.state = true;
            if(this.select == true){
                this.select = false;
            } else{
                this.select = true;
            }
        }

            
    }
    
    draw(selected){
        if(selected){
            fill('blue');
            this.select = true;
        } else{
            fill('white');
            this.select = false;
            this.state = false;
        }
        ellipse(this.x, this.y, 20, 20);
        
    }
}

 
   
    

