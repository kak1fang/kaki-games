class MapSearcher {

    constructor(graph) {
        this.graph = graph;
        this.backpoints = {};
        this.destVertex = null;
        this.sourceVertex = null;
    }
    processClick(x, y) {

        let clickedVertex = this.graph.getVertexAtPoint(x, y);
        if (clickedVertex) {

            // restart search when user clicks on new vertex!
            this.destVertex = clickedVertex;
            this.backpoints = {};
            this.runBFS();
        }
    }
    processHover(x, y) {
        // Note: this can be null
        this.sourceVertex = this.graph.getVertexAtPoint(x, y);
    }

    runBFS() {
        let searchQueue = [];
        let exploredVertices = {};
        
        

        // this is how you enqueue something (add it to the end of the array)
        exploredVertices[this.destVertex.id] = true;
        searchQueue.push(this.destVertex);
        for( var i = 0; i<this.searchQueue.length; i++){
            for( var a = 0; a < this.graph.connections[this.searchQueue[i]].length; i++){
                
            
                //detect if it is repeat with the searchQueue
                var repeatDetect;
                for(v = 0; v < this.searchQueue.length; v++){
                    if(this.graph.connections[this.destVertex.id][i] != this.searchQueue[v]){
                        repeatDetect++;
                    }
                }
                if(repeatDetect == this.searchQueue.length){
                    this.searchQueue.push(this.graph.connections[this.destVertex.id][i])
                }

                // draw red lines
                fill('red');
                line(this.searchQueue[i].x, this.searchQueue[i].y, this.graph.connections[this.searchQueue[i]][a].x, this.graph.connections[this.searchQueue[i]][a].y);

                
                
             }
             exploredVertices.push(this.searchQueue[i]);

             // try to remove from the array but i dont know what to do...
             const d = exploreQueue.splice(0,1)[0];
         }
        

        // recommended: consult https://en.wikipedia.org/wiki/Breadth-first_search
        //     note:    - ignore the "if v is the goal" psuedocode. Just generate the whole 
        //                backpointer dictionary, since our source vertex may change.

        // note: the following line will dequeue an element. (remove 
        //       the first element from the array and store it into 
        //       the v variable
        // const v = exploreQueue.splice(0, 1)[0];

        // note: the following line will test if a vertex is in the discovered array

        // TODO: IMPLEMENT BFS (generate the backpointer dictionary)
    }

    draw() {
        if (!this.destVertex || !this.backpoints) {
            return;
        }
        if (Object.keys(this.backpoints).length == 0) {
            return;
        }
        
        for(const vid of Object.keys(this.backpoints)){
            const fromV = this.graph.getVertex(vid);
            const toV = this.graph.getVertex(this.backpoints[vid]);
            drawArrow(fromV, toV, color(250, 150, 50));
        }

        // If user is hovering over a vertex, draw that path a different color
        if (this.sourceVertex) {
            let v = this.sourceVertex;
            while (v) {
                
                const nextV = this.graph.getVertex(this.backpoints[v.id]);
                if (nextV) {
                    drawArrow(v, nextV, color(100, 100, 255))
                }
                v = this.graph.getVertex(this.backpoints[v.id]);
            }
        }
    }
}
