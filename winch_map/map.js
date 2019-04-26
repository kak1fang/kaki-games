var mapCreater;
var graph;
let selectVertex = 100;
var numberOfUnselected = 0;
var vertexSelected = false;
var mouseonVertex = true;

function preload(){
    
    graph = new Graph();
    mapCreater = new MapCreater(graph);
    



}

function setup(){
 createCanvas(800, 600);
 background(25,40,99);

}



function draw(){
    strokeWeight(3);
    graph.draw();
    mapCreater.draw();
    graph.drawConnections();
    
    

    // for(var i=0; i<=vertexArray.length-1; i++){
    //     let e = vertexArray[i];
    //     e.draw();
        // if(i>0){
        //     let pe = vertexArray[i-1];
        //     line(e.x,e.y,pe.x,pe.y);
        // }
    // }
    
}

function mousePressed(){
    if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) {
        // don't process clicks that aren't on the maps
        return;
    }
    mapCreater.detectingClick(mouseX, mouseY);
    

    
}