var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(0,0,255);

    // create block2,block3 and block4 using createSprite

   
    // created ball sprite with random x axis   
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();

    //  write bounceoff statement to bounce the ball from the edges
   

    //if condition to play the music and change the colour of the ball according to the box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    // write the if condition same as above for block2 and ball

    // write the if condition same as above for block3 and ball



    // Stopped the ball and music if it is touching the block4 
    if(block4.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    drawSprites();
}
