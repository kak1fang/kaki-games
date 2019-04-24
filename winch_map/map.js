
let selectVertex = 100;
var numberOfUnselected = 0;
var vertexSelected = false;
var mouseonVertex = true;
function preload(){

}

function setup(){
 createCanvas(800, 600);
 background(25,40,99);

}



function draw(){
    strokeWeight(3);
    
    
    

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
    mapcreater.detectingClick(mouseX,mouseY);

}