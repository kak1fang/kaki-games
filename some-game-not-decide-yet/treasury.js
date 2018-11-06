var ufo;
var grid;
var planet;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    ufo = new Ufo(grid, 0, 0);
    planet = new Planet(grid, 5 , 5);
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
    planet.draw();
    
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