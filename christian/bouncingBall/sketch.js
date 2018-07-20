function setup(){
    createCanvas(600,600);  
}

let xCoord = width/2;
let yCoord = height/2;
let xDirec = 1;
let yDirec = 1;

function draw(){

    background(225);
    ellipse(xCoord, yCoord, 20);
    if(x < 10){
        xDirec = 1;
    }
    if(x > 590){
        xDirec = -1;
    }
    if(y < 10){
        yDirec = 1;
    }
    if(y > 590){
        yDirec = -1;  
    }       
    x = x+xDirec;
    y = y+yDirec;
}