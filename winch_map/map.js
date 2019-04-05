let vertexArray = [];
function preload(){

}

function setup(){
 createCanvas(800, 600);
 background(25,40,99);
}



function draw(){
    strokeWeight(3);
    
    
    if( mouseIsPressed){
       
       
        
        let p = new Vertex(mouseX, mouseY);
        vertexArray.push(p);
    }

    for(var i=0; i<=vertexArray.length; i++){
        Vertex.draw();
    }

}

