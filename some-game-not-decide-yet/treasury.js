var ufo;
var grid;
var myBGM;
var score = 0;




// Gets called before game is loaded. 
// Use it to load images & other resources



var gameElement = [];
var enemyElement = [];
var preload = function() {

    grid = new Grid(10, 10);
    ufo = new Ufo(grid, 0, 0);
    for ( let i =0; i <5; i++){
        let planet = new Planet(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        gameElement.push(planet);
    }
    for ( let i =0; i <4; i++){
        let enemy = new Enemy(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        enemyElement.push(enemy);
    }
    soundFormats('mp3', 'ogg');
    myBGM = loadSound('assets/ourmountain.mp3')
    myMoveSound = loadSound('assets/movement1.wav')
    myCollectSound = loadSound('assets/collect_planet.wav')
    myEnemySound = loadSound('assets/collect_enemy.wav')
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
    for(let element of enemyElement) {
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
    for(var i= enemyElement.length -1; i >= 0; i--){
        var element = enemyElement[i];
        if(ufo.col === element.col && ufo.row === element.row){
            enemyElement.splice (i,1);
            score -= 2;
            myEnemySound.play()
        }
    }
    for(var i= enemyElement.length -1; i >= 0; i--){
        var element = enemyElement[i];
        if(ufo.col)
    }
    if(gameElement.length === 0) {
        for ( let i =5; i <10; i++){
            let planet = new Planet(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
            gameElement.push(planet);
        }
    }
    
    if(enemyElement.length === 0) {
        for ( let i =5; i <9; i++){
            let enemy = new Enemy(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
            enemyElement.push(enemy);
        }
    }
}