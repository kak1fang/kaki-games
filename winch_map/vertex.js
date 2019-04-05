class Vertex{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        ellipse(this.x,this.y,20,20);
    }
}