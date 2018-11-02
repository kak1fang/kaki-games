

var setup = function(){

    var canvas = createCanvas(400,400);
    canvas.parent("sketch-holder");
}
function preload(){
    var img;
    img('assets/ufo_game_enemy.png', 10,10, 50, 50);  
}
   

var draw= function(){
    background(50)
    ellipse(200,200,100,100);
    img('assets/ufo_game_enemy.png', 10,10, 50, 50);
};

var img;



