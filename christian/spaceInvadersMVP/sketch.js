let bullets = [];
let playerPos;
let playerHeight = 20;
let playerWidth = 50;
let invaders = [1,0,1,0,0,1];
let invaderY;
let invaderSize;
let bulletSize = 5;


function setup(){
    createCanvas(800,800);
    playerPos = width / 2;
    invaderY = 0; 
}

function draw(){
    background(51);
    rect(playerPos - playerWidth/2, height - playerWidth, playerWidth, playerHeight); 
    fill(0,0,0);
    drawInvaders();
    updateBullets();
    drawBullets();
    if(keyIsPressed){
        if(keyCode === RIGHT_ARROW){
            playerPos = playerPos + 2;
        }
        else if(keyCode === LEFT_ARROW){
            playerPos = playerPos - 2;
        }
    }
    
}


function keyPressed(){
    if(key == " "){
        bullets.push([playerPos, height - playerHeight]);
    }
}


/**
 * The draw bullets function will take care of drawing all of the players bullets on the screen
 * 
 * the way it does this is:
 * - Loops through all of the bullets array
 * - draws an ellipse at the bullet's x and y coordinates (These are screen coordinates)
 * 
 */
function drawBullets(){
    for(let bullet of bullets){
        ellipse(bullet[0], bullet[1], 2 * bulletSize);        
    }
}


/**
 * The update bullets will update the bullets position every loop
 * by looping through the bullets array and adding to the y position 
 * 
 */
function updateBullets(){
    for(let i=0; i<bullets.length; i++){
        bullets[i][1] = bullets[i][1] - 5;

    }

}

/**
 * The collision function will calculate if an invader is hit by a bullet 
 * and take care of the actions that follow, eg. deleting the invader
 * 
 * The way it does this is:
 * - Loops through all of the invaders
 * - Loops through all of the bullets
 * - calculates if they have collided using the formula
 *      dist(x1, y1, x2, x1) < r1 + r2
 * where:
 *      x1: the x coordinate of center of the first circle
 *      y1: the y coordinate of center of the first circle
 *      x2: the x coordinate of center of the second circle
 *      y2: the y coordinate of center of the second circle
 *      r1: the radius of the first circle
 *      r2: the radius of the second circle
 * 
 * - if it is true(collided), set the index of the invader array to 0 (no invader),
 * as well as delete the bullet from the array 
 */
function collision(){

}


/**
 * The draw fuction takes care of drawing all of the invaders that are
 * currently on the screen
 * 
 * Assignee: Bryan
 * 
 * The way it does this is:
 * - Loops through the invader array
 * - calculates the screen cooridnates by multiplying the index that they are at and 
 * the y position by the invaderSize + 10
 * - draws an ellipse at the specified coordinates with the specified size
 */
function drawInvaders(){
    let x = 50
    let invaderSize=50;
    fill(150,150,200)
    for(let i=0;i<6;i++){
        ellipse(x ,50,invaderSize);
        x+=150;    
        }
}
