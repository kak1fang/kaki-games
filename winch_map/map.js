let vertexArray = [];
let selectArray = [];
var numberOfUnselected = 0;
var vertexSelected = false;
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
    for(var i=0; i <=vertexArray.length-1; i++){
        let e = vertexArray[i];
        e.detectState();
        if(e.state == false){
            numberOfUnselected = numberOfUnselected + 1;
        }
        if(e.state == true){
            let selected = true;
            for(var i=0; i <=vertexArray.length-1; i++){
                let e = vertexArray[i];
                if(e.select == true){
                    e.draw();
                }
            }
            if(e.select == true){
                e.draw();
                e.select = false;
            } else{
            e.draw(selected);
            e.select = true;
            }
            vertexSelected = true;
            e.state = false;
            
        }
    
    }
    
    if( numberOfUnselected == vertexArray.length){
        let v = new Vertex(mouseX, mouseY);
        vertexArray.push(v);
        for(var i =0; i<=vertexArray.length-1; i++){
            let e = vertexArray[i];
            if(e.select == true){
                line(v.x, v.y, e.x, e.y);
                e.draw();
                
            }
        }
        let selected = true;
        v.draw(selected);
        v.select == true;
        numberOfUnselected = 0;
    }

    if( vertexSelected == true){
        numberOfUnselected = 0;
        vertexSelected = false;
    }

    
}

