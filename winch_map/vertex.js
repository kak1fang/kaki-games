class Vertex{
    constructor(x,y,state){
        this.x = x;
        this.y = y;
        this.state = false;
    }

    draw(){
        ellipse(this.x,this.y,20,20); 
    }

    

    clickf(){
        fill('red');
    }

    clickt(){
        fill('white');
    }
}
