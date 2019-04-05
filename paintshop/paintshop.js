
let redColor;
let orangeColor;
let yellowColor;
let greenColor;
let blueColor;
let purpleColor;
let size;
var input;
var img;
var r;
function preload(){
    redColor = color('#FF0000');
    orangeColor = color('#FFA500');
    yellowColor = color('#FFFF00');
    greenColor = color('#008000');
    blueColor = color('#0000FF');
    purpleColor = color('#800080');
    
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);
    let ImageInputParent = document.querySelector('#openfile');
    input = createFileInput(handleFile);
    input.parent(ImageInputParent); 
    committedDrawing = createGraphics(windowWidth, windowHeight);
    committedDrawing.background(255);

  
    
}
function draw(){
    var previousMouseX = -1,
    previousMouseY = -1;
    if(img){
        image(img,0,0,width,height);
    }

    if( mouseIsPressed && previousMouseX!==-1 ){
        committedDrawing.line(mouseX, mouseY, previousMouseX, previousMouseY);
        
    }
    if( mouseIsPressed){
        previousMouseX=mouseX;
        previousMouseY=mouseY;
    } else{
        previousMouseX=-1;
        previousMouseY=-1;
    }
    image(committedDrawing,0,0);
    
    
    let r = document.querySelector('#range').value;
    fill(0);
    ellipse(mouseX,mouseY, 2*r,2*r, 10);
    background(255,255,255);
    
};




function setBrush(color){
    if(color == 'red'){
        stroke(redColor);
    }
    if(color == 'orange'){
        stroke(orangeColor);
    }
    if(color == 'yellow'){
        stroke(yellowColor);
    }
    if(color == 'green'){
        stroke(greenColor);
    }
    if(color == 'blue'){
        stroke(blueColor);
    }
    if(color == 'purple'){
        stroke(purpleColor);
    }

}



function save(){
    saveCanvas(cc, 'myCanvas', 'jpg');
  }

function canvasReset(event){
    resizeCanvas(windowWidth, windowHeight);
         background(255, 255 , 255);

        
}

function openDialog(id){
    let elem = document.getElementById(id)
    elem.setAttribute('open',true);
}

function closeDialog(id){
    let elem = document.getElementById(id)
    elem.removeAttribute('open');
}
function changeResolution(x,y){
    // let elem = document.getElementById(id);
    resizeCanvas(x,y);
    background(5,6,10);
}
function handleFile(file){
    print(file);
    if( file.type !=='image'){
        return;
    }
    loadImage(file.data, function(jpg){
        if(!jpg){
            return;
        }
        noCanvas();
        createCanvas(jpg.width, jpg.height);
        image(jpg,0,0);
        
        
    })
}
// function handleFile(file) {
//     print(file);
//     if (file.type === 'image') {
//       img = createImg(file.data);
//       img.hide();
//     }
//   }

//we dont want to erase the painting
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(0, 0, 50);
// }