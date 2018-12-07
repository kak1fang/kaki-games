var ufo;
var grid;
var health;
var enemySpeed = 0.010;
var myBGM;
var score = 0;
var GameWin = 0;
var GameLose = 0;
var GameStart = 0;




// Gets called before game is loaded. 
// Use it to load images & other resources



var gameElement = [];
var enemyElement = [];
var recoverElement = [];
var preload = function() {

    grid = new Grid(10, 10);
    ufo = new Ufo(grid, 0, 0);
    health = new Health(grid, 9, 0);
    for ( let i =0; i <2; i++){
        let healthpotion = new Healthpotion(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        recoverElement.push(healthpotion);
    }
    
    for( let i = 0; i< 5; i++){
        let planet = new Planet(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        gameElement.push(planet);
    }
    for ( let i =0; i <5; i++){
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

    var canvas = createCanvas(windowWidth, windowHeight);
    windowResized();
    myBGM.loop();
    frameRate(60);
    
    
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {
    keyPressed= function(){
        GameStart=1;
    };

    if(GameStart===0){
        background(0, 0, 0);
        fill(255, 195, 64);
        textSize(50);
        text("Space Rescue", width/2 - 155, height/2.7);
        fill(92, 250, 255);
        textSize(30);
        text("by kakifang", width/2-78, height/2);
        fill(240, 255, 107);
        stroke(20);
        textSize(20);
        text("press any key to start", width/2-100,height/1.8);
        fill(219, 214, 255);
        textSize(15);
        text("use wasd to control the ufo", width/2- 100, height/1.7);
        GameStarttime=millis();
        fill(252, 184, 184);
        textSize(15);
        text(" The planets are endangered now! Try to rescue 30 planet!", width/2- 203, height/1.45);
        text(" Be aware of the enemy!", width/2-100, height/1.4)
        return;
    }


    if( key === 'r'){
        GameWin = 0;
        GameLose = 0;
        score = 0;
        health.lives =6;
        enemySpeed = 0.010;
    }
    
    

    if( GameLose === 1){
        textSize (50);
        text("You Lose", 0.5*width - 100, 0.5 * height);
        textSize (30);
        text( "Press R to restart", 0.5 * width - 120, 0.5 *height + 50);
        return;
    }

    if ( score >= 8 && score <20){
        
        myBGM.rate(1.3);
        enemySpeed = 0.015;
    }
    
    if (health.lives>2 && health.lives <= 4){
        myBGM.rate(1.3);
    }
    
    if ( score >=20 || health.lives <= 2){
        myBGM.rate(1.5);
        enemySpeed = 0.018;
    }

    


    if ( GameWin === 1){
        textSize(50);
        text("You Win", 0.5 *width - 100 , 0.5 * height);
        textSize(30);
        text("Press R to restart", 0.5 * width - 120, 0.5 * height+ 50);
        return;
    }


    // Draw the grid first  , then the boy on top of it
    
    background(255,255,255);
    grid.drawGrid();
    ufo.draw();
    for(let element of recoverElement) {
        element.draw();
    }
    for(let element of gameElement) {
        element.draw();
    }
    for(let element of enemyElement) {
        element.draw();
    }
   
    //closer to the ufo
    for(var i= enemyElement.length -1; i >= 0; i--){
        var element = enemyElement[i];
        if(ufo.col > element.col){
            element.col += enemySpeed; 
        }
        if(ufo.col < element.col){
            element.col -= enemySpeed; 
        }
        if(ufo.row > element.row){
            element.row += enemySpeed; 
        }
        if(ufo.row < element.row){
            element.row -= enemySpeed; 
        }
    }
    // get touch minus point
    for(var i= enemyElement.length -1; i >= 0; i--){
        var element = enemyElement[i];
        if(abs(ufo.col - element.col) < 0.7 && abs(ufo.row - element.row) < 0.7){
            enemyElement.splice (i,1);
            
            myEnemySound.play()
            health.lives = health.lives -1 ;
            
           
        }
    }
    if( enemyElement.length < 5){
        for ( let i =0; i < 5-enemyElement.length; i++){
            let enemy = new Enemy(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        enemyElement.push(enemy);
        }

    }
    //recover
    
    if( recoverElement.length < 2){
        for ( let i =0; i < 2-recoverElement.length; i++){
            let healthpotion = new Healthpotion(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
        recoverElement.push(healthpotion);
        }

    }
   



    textSize(20);
    text ( 'score :' + score, 10, 20);

    
    health.draw();
   


    if ( health.lives===0){
        GameLose = 1;
    }

    if ( score >= 30){
        GameWin = 1;
    }
    
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
    for (var i =recoverElement.length -1; i >= 0 ; i--){
        var element = recoverElement[i];
        if( element.col===ufo.col && element.row === ufo.row){
            if(health.lives < 6){
            health.lives = health.lives + 1;
            recoverElement.splice (i,1);
            }  
        }
    }
    
    
    
    if(gameElement.length === 0) {
        for ( let i =5; i <10; i++){
            let planet = new Planet(grid, chooseRandomInteger(10) , chooseRandomInteger(10))
            gameElement.push(planet);
        }
    }
    
   
}

function windowResized(){
    let size = min (windowWidth, windowHeight)
    resizeCanvas(size,size);
}