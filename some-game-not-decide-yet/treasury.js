var ufo;
var grid;
var myBGM;
var score = 0;




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
    soundFormats('mp3', 'ogg');
    myBGM = loadSound('assets/ourmountain.mp3')
    myMoveSound = loadSound('assets/movement1.wav')
    myCollectSound = loadSound('assets/collect_planet.wav')
}

    


// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    myBGM.loop();
    
    
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {
    
    // Draw the grid first  , then the boy on top of it
    background(255,255,255);
    grid.drawGrid();
    ufo.draw();

    for(let element of gameElement) {
        element.draw();
    }
    text ( 'score :' + score, 10, 10);
}




function keyTyped(){
    var direction;
    // if (key === 'w') {
    //     direction = DIRECTION.UP;
    // }
    // if (key === 's') {
    //     direction = DIRECTION.DOWN;
    // }
    // if (key === 'a') {
    //     direction = DIRECTION.LEFT;
    // }
    // if (key === 'd') {
    //     direction = DIRECTION.RIGHT;
    // }
    
    
    if (key === 'w'){
        ufo.moveUp()
        myMoveSound.play();
    }
    if (key === 'd') {
        ufo.moveRight();
        myMoveSound.play();
    }
    if (key === 's') {
        ufo.moveDown()
        myMoveSound.play();
    }
    if (key === 'a') {
        ufo.moveLeft()
        myMoveSound.play();
    }
    
    for(var i= gameElement.length -1; i >= 0; i--){
        var element = gameElement[i];
        if(ufo.col === element.col && ufo.row === element.row){
            gameElement.splice (i,1);
            score += 1;
            myCollectSound.play()
        }
    }
}