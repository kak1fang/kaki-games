class Ufo {
    constructor(grid, col, row) {

        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable

        this.direction = DIRECTION.RIGHT;
    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
    }

    moveRight() {
        // TODO: move your character to the right by one column (but don't let it leave the screen)
        // Also, set the direction as DIRECTION.RIGHT so that the image get's draw at the correct rotation
    }
    moveLeft() {
        // TODO: move your character to the left one column (but don't let it leave the screen)
        // Also, set the direction appropiately
    }
    moveUp() {
        // TODO: move your character up by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
    }
    moveDown() {
        // TODO: move your character down by one row (but don't let it leave the screen)
        // Also, set the direction appropiately
    }
}