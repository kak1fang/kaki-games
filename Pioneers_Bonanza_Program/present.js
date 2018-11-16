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
    "Kathleen Booth"
]

var introduction = [
    "The term 'algorithm' is derived from the algorism, the technique of performing arithmetic with Hindu–Arabic numerals popularised by al-Khwarizmi in his book 'On the Calculation with Hindu Numerals'.",
    "Conceived and codesigned the Harvard Mark I.",
    "Developed bit vector notation and program control flow graphs. Became the first female IBM Fellow in 1989. In 2006, she became the first female recipient of the ACM's Turing Award.",
    "Built the first electronic digital computer, the Atanasoff–Berry Computer, though it was neither programmable nor Turing-complete.",
    "Originated the concept of a programmable general-purpose computer. Designed the Analytical Engine and built a prototype for a less powerful mechanical calculator.",
    "Led the team that created FORTRAN (Formula Translation), the first practical high-level programming language, and he formulated the Backus–Naur form that described the formal language syntax.",
    "Invented World Wide Web. With Robert Cailliau, sent first HTTP communication between client and server.",
    "Theorized of the concept of structured programming.",
    "Formalized Boolean algebra, the basis for digital logic and computer science.",
    "designing the first commercial microprocessor (intel 4004)",
    "Invented the first assembly language."
]





mouseClicked = function (){
    background(255,255,255);
    var randomIndex = floor(random(name.length));
    fill( 10,10,10);
    text( name[randomIndex] + ":" + introduction[randomIndex], 10 , 50);

}

}

}

