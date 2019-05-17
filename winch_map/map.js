var mapCreater;
var mapSearcher;
var graph;
let img;
let inputVertex;
let selectVertex = 100;
var numberOfUnselected = 0;
var vertexSelected = false;
var mouseonVertex = true;

const MAP_SEARCH_MODE = "MAP_SEARCH";
const MAP_CREATE_MODE = "MAP_CREATE";
let mode = MAP_CREATE_MODE;



function preload() {

    graph = new Graph();
    mapCreater = new MapCreater(graph);
    mapSearcher = new MapSearcher(graph);
    img = loadImage('winchendon.png');
    
    



}

function setup() {
    createCanvas(800, 600);
    background('white');
    resizeCanvas(img.width, img.height);
    inputVertex = createFileInput(loadVertex);
    inputVertex.parent('saveLoad');


}




function draw() {
    strokeWeight(3);
    image(img, 0, 0);
    
    graph.drawConnections();
    graph.draw();

    if (mode === MAP_CREATE_MODE) {
        mapCreater.draw();
    } else if (mode === MAP_SEARCH_MODE) {
        mapSearcher.draw();
        mapSearcher.processHover(mouseX, mouseY);
        // todo
    } else {
        throw "Invalid mode: " + mode;
    }

    // for(var i=0; i<=vertexArray.length-1; i++){
    //     let e = vertexArray[i];
    //     e.draw();
    // if(i>0){
    //     let pe = vertexArray[i-1];
    //     line(e.x,e.y,pe.x,pe.y);
    // }
    // }

}

function mousePressed() {
    if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) {
        // don't process clicks that aren't on the maps
        return;
    }

    if (mode === MAP_CREATE_MODE) {
        mapCreater.detectingClick(mouseX, mouseY);
    } else if (mode === MAP_SEARCH_MODE) {
        mapSearcher.processClick(mouseX, mouseY);
    } else {
        throw "Invalid mode: " + mode;
    }

}

function saveVertex(){
    saveJSON(graph, 'graph');


}

function loadVertex(file){
    let g = new Graph();
    
    loadJSON(file.data, g.loadFromJson());
    
    
}


///////////////////////////////
//   ADDED BY MR. BLANCHET   //
///////////////////////////////
function changeMode(value) {
    console.log(value);
    mode = value;
}
function drawArrow(fromVertex, toVertex, arrowColor) {

    stroke(arrowColor);
    strokeWeight(2);
    fill(arrowColor);
    
    const fx = fromVertex.x,
          fy = fromVertex.y,
          tx = toVertex.x,
          ty = toVertex.y,
          offset = -6;

    line(fx, fy, tx, ty);

    push();
    const angle = atan2(fy - ty, fx - tx);
    translate(tx, ty);
    rotate(angle + HALF_PI);
    triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2)
    pop();
}