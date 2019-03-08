
let redColor;
let orangeColor;
let yellowColor;
let greenColor;
let blueColor;
let purpleColor;
let size;
var input;
var img;
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
    input = createFileInput(handleFile);
    input.position(0, 0);
}
function draw(){
    var previousMouseX = -1,
    previousMouseY = -1;
    
draw= function() {
    if( mouseIsPressed && previousMouseX!==-1 ){
        line(mouseX, mouseY, previousMouseX, previousMouseY);
        
    }
    if( mouseIsPressed){
        previousMouseX=mouseX;
        previousMouseY=mouseY;
    } else{
        previousMouseX=-1;
        previousMouseY=-1;
    }
    
};
}
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
function handleFile(file) {
    print(file);
    if (file.type === 'image') {
      img = createImg(file.data);
      img.hide();
    }
  }

//we dont want to erase the painting
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(0, 0, 50);
// }