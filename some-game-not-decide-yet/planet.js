var image = [];
    image[0] = 'assets/planet/moon_01.png';
    image[1] = 'assets/planet/moon_02.png';
    image[2] = 'assets/planet/moon_03.png';
    image[3] = 'assets/planet/moon_04.png';
    image[4] = 'assets/planet/planet_01.png';
    image[5] = 'assets/planet/planet_02.png';
    image[6] = 'assets/planet/planet_03.png';
    image[7] = 'assets/planet/planet_04.png';
    image[8] = 'assets/planet/planet_05.png';
    image[9] = 'assets/planet/planet_06.png';
    image[10] = 'assets/planet/planet_07.png';
    image[11] = 'assets/planet/planet_08.png';
    image[12] = 'assets/planet/planet_09.png';
    image[13] = 'assets/planet/planet_10.png';
    image[14] = 'assets/planet/planet_11.png';
    image[15] = 'assets/planet/planet_12.png';
    image[16] = 'assets/planet/planet_13.png';
    image[17] = 'assets/planet/planet_14.png';
    image[18] = 'assets/planet/planet_15.png';
    image[19] = 'assets/planet/planet_16.png';
    image[20] = 'assets/planet/planet_17.png';


class Planet {
    constructor(grid, col, row) {

        // TODO: save grid, col, and row as instance variables on this object
        // TODO: call loadImage('') and save that as a this.img variable
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.img = loadImage(image[Random(0,20)])
       
    }

    draw() {
        // TODO: tell the grid to draw an image onto the grid.  
        //       Give it the image, column, row, and direction 
        //       to draw the image. Take a look at grid.js to find & 
        //      try to understand this function
        grid.drawImageOnGrid(this.img, this.col, this.row, this.direction)
    }
}