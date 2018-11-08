var ufo;
var grid;


// Gets called before game is loaded. 
// Use it to load images & other resources



var gameElement = [];
var preload = function() {

    grid = new Grid(10, 10);
    ufo = new Ufo(grid, 0, 0);
    for ( let i =0; i <5; i++){
        let planet = new Planet(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        gameElement.push(planet);
    }
}

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    // Draw the grid first, then the boy on top of it
    background(255,255,255);
    grid.drawGrid();
    ufo.draw();

    for(let element of gameElement) {
        element.draw();
    }
    
    
}

function keyTyped() {
    if (key === 'w') {
        ufo.moveUp()
    }
    if (key === 's') {
        ufo.moveDown()
    }
    if (key === 'a') {
        ufo.moveLeft()
    }
    if (key === 'd') {
        ufo.moveRight();
    }
}