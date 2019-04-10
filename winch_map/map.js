let vertexArray = [];
let selectArray = [];
function preload(){

}

function setup(){
 createCanvas(800, 600);
 background(25,40,99);
 vertexArray.push(200,300);
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
    for(var i=0; i <=vertexArray.length-1; i++){
        let e = vertexArray[i];
        if(Math.abs(mouseX - e.x) <=10 && Math.abs(mouseY - e.y) <= 10){
            e.clickf();
            e.state = true;
        }
        else{
            let p = new Vertex(mouseX, mouseY);
            vertexArray.push(p);
            p.draw();
        }
    }
    for(var i=0; i <=vertexArray.length-1; i++){
        let e = vertexArray[i];
        if(e.state = true){
            for(var i=0; i <=vertexArray.length-1; i++){
                let ae= vertexArray[i];
                if(Math.abs(mouseX - ae.x) <=10 && Math.abs(mouseY - ae.y) <= 10){
                line(ae.x, ae.y, e.x, e.y);
            } 
            }
        }
    }
}

