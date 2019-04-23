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
            v.mouseWithVertex();
            if(mouseOnVertex){
                v.getSelectVertex();
                return selectVertex = i;
            }
            else{
                numberOfUnselected++;            }
        }
        if( numberOfUnselected == vertexArray.length){
            p.addVertex;
        }
    }


    addVertex(v){
        this.vertexArray.push(v);
        this.vertices.push(v);
       
        this.connections[this.connectionsNumber] =[selectVertex,v];
        selectVertex = vertices.length ;
        this.connectionsNumber ++;
    }

    draw(){
        
    }
    selectVertex(v){

    }

    unselectVertex(){

    }

    addConnection(){

    }

    

}