var healthImages = [
    'assets/health/0.png',
    'assets/health/1.png',
    'assets/health/2.png',
    'assets/health/3.png',
    'assets/health/4.png',
    'assets/health/5.png',
    'assets/health/6.png',
]


class Health{
    
    constructor(grid, col, row){
        this.lives = 6;
        this.gird = grid;
        this.col = col;
        this.row = row;
        this.img = [loadImage(healthImages[0]),
                    loadImage(healthImages[1]), 
                    loadImage(healthImages[2]),
                    loadImage(healthImages[3]),
                    loadImage(healthImages[4]),
                    loadImage(healthImages[5]),
                    loadImage(healthImages[6]),
                    ]
                            
    }

    
    draw(){
        grid.drawImageOnGrid(this.img[this.lives], this.col, this.row, this.direction)
    }
}

