class Vertex{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
       

        
    }    
    

    


    mouseWithVertex(){
        if( dist(this.x, this.y, mouseX, mouseY) <= 10 ){
            return mouseOnVertex;
        }
    }



    draw(selected){
        if(selected){
            fill('blue');
            
        } else{
            fill('white');
            
        }
        ellipse(this.x, this.y, 20, 20);
        
    }



    
}
