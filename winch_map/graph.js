class Graph {

    constructor() {


        this.vertexArray = [];
        this.connections = [];
        this.connectionsNumber = 0;

    }

    getVertex(id) {
        return this.vertexArray[i];
    }

    getVertexAtPoint(x, y) {
        for (var i = 0; i < this.vertexArray.length; i++) {
            let v = this.vertexArray[i];
            if (v.mouseWithVertex(x, y) == true) {
                return v;
            }

        }
        return null;
    }


    addVertex(x, y) {
        let v = new Vertex(x, y, this.vertexArray.length);
        this.vertexArray.push(v);
        this.connections.push([]);
        return v;
    }

    draw() {

        for (var i = 0; i < this.vertexArray.length; i++) {
            let v = this.vertexArray[i];
            v.draw();
        }

    }

    hasConnectionBetween(vid, ovid) {

        let idsOfConnectedVertices = this.connections[vid];
        if( idsOfConnectedVertices.indexOf(ovid) !== -1){
            return true;
        }

        return false;
        
        // if there is a connection
            // return true
        // else
            // return false
    }

    addConnection(vid, ovid) {
        if (vid === null || ovid === null){
            console.log("Not adding a connection because v or pv is null")
            return;
        }

        // make sure there isn't already a connection
        if( this.hasConnectionBetween(vid,ovid) === true){
            return;
        }

        let v = this.vertexArray[vid];
        let pv = this.vertexArray[ovid];

        this.connections[v.id].push(pv.id);
        this.connections[pv.id].push(v.id);
    }

    drawConnections() {
        for (var vid = 0; vid < this.connections.length; vid++) {

            for (var i = 0; i < this.connections[vid].length; i++) {
                let ovid = this.connections[vid][i];
                let v = this.vertexArray[vid];
                let ov = this.vertexArray[ovid];
                line(v.x, v.y, ov.x, ov.y);

            }
        }
    }
}