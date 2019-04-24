class MapCreater {

    constructor(graph) {
        this.graph = graph;
    }

    detectingClick(x,y) {
        const mouseOnVertex = this.graph.getVertexAtPoint(x, y);


        if (!mouseOnVertex) {
            addVertex(graph, x, y);
        }

        if (mouseOnVertex === true) {
            graph.selectVertex = v.id;
        }
    }
}