 class Graph {

    constructor(){
        
        this.selectVertex = null;
        this.vertexArray = [];
        this.connections = {};
        this.connectionsNumber = 0;

    }

    getVertex(id){

    }

    getVertexAtPoint(x,y){
        for(var i=0; i < vertexArray.length; i++){
            let v = vertexArray[i];
            if(v.mouseWithVertx(x,y) == mouseOnVertex){
                return v;
            }
        return null;
    }

    
    addVertex(x,y){
        let v = new Vertex(x,y,this.vertices.length);
        this.vertices.push(v);
        return v;
    }

    draw(){

        for(var i = 0; i< vertexArray.length; i++){
            v.draw();
        }
        
    }

    selectVertex(v){
        
    }

    unselectVertex(){

    }

    addConnection(){

    }

    
