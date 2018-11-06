var Ufo;
var grid;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    Ufo = new Ufo(grid, 0, 0);
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
    grid.drawGrid();
    Ufo.draw();
}

function keyTyped() {
    if (key === 'w') {
        Ufo.moveUp()
    }
    if (key === 's') {
        Ufo.moveDown()
    }
    if (key === 'a') {
        Ufo.moveLeft()
    }
    if (key === 'd') {
        Ufo.moveRight();
    }
}
Ufo.js (starter)
class UFo {
    constructor(grid, col, row) {

        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable
        this.grid= loadImage('assets/ufo_game_enemy.png');
        this.col = 10;
        this.row = 10;
        this.direction = DIRECTION.RIGHT;
    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
        Grid = loadImage('assets/ufo_game_enemy.png');
        
    }

    moveRight() {
        // TODO: move your character to the right by one column (but don't let it leave the screen)
        // Also, set the dirsection as DIRECTION.RIGHT so that the image get's draw at the correct rotation
        Ufo.col +=1;
    }
    moveLeft() {
        // TODO: move your character to the left one column (but don't let it leave the screen)
        // Also, set the direction appropiately
        Ufo.col -=1;
    }
    moveUp() {
        // TODO: move your character up by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
        Ufo.row -=1;
    }
    moveDown() {
        // TODO: move your character down by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
        Ufo.row +=1;
    }
}