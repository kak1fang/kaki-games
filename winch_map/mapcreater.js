class MapCreater {

    constructor(graph) {
        this.graph = graph;
        this.selectVertexId = null;
    }

    detectingClick(x,y) {
        const mouseOnVertex = this.graph.getVertexAtPoint(x, y);
        


        if (!mouseOnVertex) {
            this.graph.addVertex( x, y);
            this.graph.addConnection(v.id, this.graph.vertexArray.length);
            this.selectVertexId = this.graph.vertexArray.length - 1;
        } else {
            if(this.selectVertexId == mouseOnVertex.id){
                this.selectVertexId = null;
            } else{
                this.graph.addConnection(v.id, this.graph.vertexArray.length);
                this.selectVertexId = mouseOnVertex.id;
            }
        }
        
       

        
    }

    



    draw(){
        for(var i = 0; i< this.graph.vertexArray.length; i++){
            let v = this.graph.vertexArray[i];
            if( v.id == this.selectVertexId ){
                var selected;
                return v.draw(selected);

            }
        }
    }
}