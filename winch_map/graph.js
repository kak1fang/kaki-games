 class Graph {

    constructor(){
        
        
        this.vertexArray = [];
        this.connections = {};
        this.connectionsNumber = 0;

    }

    getVertex(id){
        return this.vertexArray[i];
    }

    getVertexAtPoint(x,y){
        for(var i=0; i < this.vertexArray.length; i++){
            let v = this.vertexArray[i];
            if(v.mouseWithVertex(x,y) == true){
                return v;
            }
        
        }
        return null;
    }

    
    addVertex(x,y){
        let v = new Vertex(x,y,this.vertexArray.length);
        this.vertexArray.push(v);
        return v;
    }

    draw(x,y){

        for(var i = 0; i< this.vertexArray.length; i++){
            let v = this.vertexArray[i];
            v.draw();
        }
        
    }

    selectVertex(v){

    }

    unselectVertex(){

    }

    addConnection(v,pv){
        let v = this.vertexArray[v];
        let pv = this.vertexArray[pv];

        this.connections.push(v.id, pv.id);

    }

    drawConnection(v,pv){
        line(v.x, v.y, pv.x, pv.y);
    }
    
    }