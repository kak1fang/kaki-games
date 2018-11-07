var planet = [
    'assets/planet/moon_01.png',
    'assets/planet/moon_02.png',
    'assets/planet/moon_03.png',
    'assets/planet/moon_04.png',
    'assets/planet/planet_01.png',
    'assets/planet/planet_02.png',
    'assets/planet/planet_03.png',
    'assets/planet/planet_04.png',
    'assets/planet/planet_05.png',
    'assets/planet/planet_06.png',
    'assets/planet/planet_07.png',
    'assets/planet/planet_08.png',
    'assets/planet/planet_09.png',
    'assets/planet/planet_10.png',
    'assets/planet/planet_11.png',
    'assets/planet/planet_12.png',
    'assets/planet/planet_13.png',
    'assets/planet/planet_14.png',
    'assets/planet/planet_15.png',
    'assets/planet/planet_16.png',
    'assets/planet/planet_17.png'
]


class Planet {
    constructor(grid, col, row) {
        var randomIndex = floor(random(planet.length));
        
        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.img = loadImage(planet[randomIndex])

    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
        grid.drawImageOnGrid(this.img, this.col, this.row, this.direction)
    }
}