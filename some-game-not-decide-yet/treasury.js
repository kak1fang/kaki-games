
var Ufo;


var preload = function() {
    
    Ufo = loadImage('assets/ufo_game_enemy.png');

}

function setup(){
    var canvas = createCanvas(400,400);
    canvas.parent("sketch-holder");

}

var draw = function(){

    imageMode(CENTER);
    image(Ufo,200,200,100,100);


}