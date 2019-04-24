class Vertex{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
        this.radius = id;

        
    }    
    

    


    mouseWithVertex(x,y){
        if( dist(this.x, this.y, x, y) <= 10 ){
            return true;
        }
        return false;
    }



    draw(){
        if(this.id = graph.selectVertex){
            fill('blue');
            
        } else{
            fill('white');
            
        }
        ellipse(this.x, this.y, 20, 20);
        
    }



    
}
