class Healthpotion{
    
    constructor(grid, col, row){
        
        this.gird = grid;
        this.col = col;
        this.row = row;
        this.img =loadImage("assets/health_potion.png")
                            
    }

    
    draw(){
        grid.drawImageOnGrid(this.img, this.col, this.row, this.direction)
    }
}

