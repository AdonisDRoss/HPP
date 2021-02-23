//declarations
var p1, p1V, computer, p2V, ball, ballV,p1Score,p2Score;
function setup(){
let canvas = createCanvas(600, 400,);



p1= p2 =height/2 -50;
p1V= p2V=0;
ball= createVector(width/2, height/2);
ballV= createVector(random(-1, 1),random(-1,1));
ballV.mult(4);
ballV.setMag(3);
p1Score = p2Score = 0;
}


//audio variables
var p1Hit = new Audio('./sounds/mixkit-electronic-retro-block-hit-2185.wav');
var p2Hit = new Audio('./sounds/mixkit-mechanical-crate-pick-up-3154.wav')
var p1SS = new Audio('./sounds/mixkit-arcade-game-complete-or-approved-mission-205.wav')
var p2SS = new Audio('./sounds/mixkit-arcade-video-game-bonus-2044.wav')


//draw board 
function draw(){

document.body.style.background = "linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%";
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.textAlign = "center"
document.body.style.position = "center"
document.body.style.backgroundSize = "cover"

background(57, 106, 133);


//scoreboard
text(p1Score + ' | ' + p2Score,width /2, 240);
textAlign(CENTER);
textSize(80)
fill(255);
/*create paddles*/
rect(20, p1, 10 ,100);
rect(width - 30, p2, 10 ,100);
ellipse(ball.x,ball.y, 20);
handleKeys();
handleBall();
}

//Ball and Scoring
function handleBall(){
 ball.x += ballV.x;
 ball.y += ballV.y;
 
    if (ball.y > height || ball.y < 0)
        ballV.y *= -1;
  
    if(ball.x <= 30 ){
       //scoring player 2
        if(ball.x <= 10){
            p2SS.play();
            p2Score++;
            reset();
            return;
        }        

        if(ball.y > p1 && ball.y < p1 + 100)
        if  (ballV.x < 0){
        ballV.x *= -1;
        ballV.mult(random(1,1.1));
           p1Hit.play();}

           //Player one scoring
    }else if(ball.x >= width - 30 ){
        if(ball.x >= width - 10){
            p1SS.play();
            p1Score++;
            reset();
            return;
        }    
       
        if(ball.y > p2 && ball.y < p2 + 100)
            if  (ballV.x > 0){
        ballV.x *= -1;
        ballV.mult(random(1,1.1));
            p2Hit.play()}
    }
}
function reset(){
    ballV.setMag(3);
    ball = createVector(width/2, height/2);
    
}
/*controls */
function handleKeys() {
    /*Player one controls */
    if(keyIsDown(87)){
        p1V -= 5;
    } else if(keyIsDown(83)){
/*Down */
        p1V += 5;
    }
/*Player two controls */
    if(keyIsDown(UP_ARROW)){

        p2V -= 5;
    } else if(keyIsDown(DOWN_ARROW)){

        p2V += 5;
    }
    /*resistance*/
    p1V *=0.4;
    p2V *=0.4;
    p1 += p1V;
    p2 += p2V;
    /*constrain paddles */
p1 = constrain(p1, 0, height-100);
p2 = constrain(p2, 0, height-100);
}