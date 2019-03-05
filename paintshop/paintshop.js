function preload(){

}
function setup(){
    let imgElement = createImg('https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png')
    imgElement.attribute('height', "75")
}
function draw(){

}
function boxWasClicked(event){

    console.log("Box clicked", event.target);

    let boxDiv = event.target;

    boxDiv.style.backgroundColor = "rgb(random(255), random(255),random(255))"


}