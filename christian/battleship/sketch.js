let x = 300
let y = 15
let w = 75
let startingx = 300

let ships= [
    [1,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0]
]

function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#222222');

    fill(color(0, 0, 255));
    for(i=1; i<=100; i++){
        rect(x, y, w, w);
        if(i%10 == 0){
            y+=w
            x = startingx
        }
        else{
            x+=w
        }
    }
}

function mousePressed(){
    let x=floor(mouseX/ w);
    let y=floor(mouseY/ w);
    let hitormiss=ships[x][y]

    if (hitormiss ==1)
        fill(51);
}