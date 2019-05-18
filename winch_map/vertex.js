class Vertex{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
        this.radius = 8;

        
    }    
    

    


    mouseWithVertex(x,y){
        if( dist(this.x, this.y, x, y) <= this.radius ){
            return true;
        }
        return false;
    }



    draw(selected){
        stroke(0);
        if(selected){
            fill('yellow');
            
        } else{
            fill('white');
            
        }
        ellipse(this.x, this.y, 2 * this.radius, 2 * this.radius);
        
    }



    
}
