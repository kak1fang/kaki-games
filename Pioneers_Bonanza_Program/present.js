var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 



var name =[
    "Al-KhwarizmI",
    "Howard Aiken",
    "Frances E. Allen",
    "John Atanasoff",
    "Charles Babbage",
    "John Backus",
    "Tim Berners-Lee",
    "Corrado Böhm",
    "George Boole",
    "Federico Faggin",
    "Kathleen Booth",
    "Fred Brooks"
]

var introduction = [
    "The term 'algorithm' is derived from the algorism.",
    "Conceived and codesigned the Harvard Mark I.",
    "Developed bit vector notation and program control flow graphs.",
    "Built the first electronic digital computer.",
    "Originated the concept of a programmable general-purpose computer. ",
    "Led the team that created FORTRAN (Formula Translation.",
    "Invented World Wide Web. With Robert Cailliau.",
    "Theorized of the concept of structured programming.",
    "Formalized Boolean algebra.",
    "designing the first commercial microprocessor",
    "Invented the first assembly language.",
    "Manager of IBM System/360 and OS/360 projects"
]





mouseClicked = function (){
    background(255,255,255);
    var randomIndex = floor(random(name.length));
    fill( 10,10,10);
    textSize(25);
    text( name[randomIndex] + ":" , 10 , 150);
    textSize(13);
    text( introduction[randomIndex], 10, 200);

}

}

}

