var windowWidth = window.innerWidth;
var windowHeight= window.innerHeight;


var midWidth = (windowWidth - 200)/2 + "px";

var rods = document.getElementById("rods");
var ball = document.getElementById("ball");

rods.style.marginLeft = midWidth;
ball.style.marginLeft = (windowWidth-15)/2 + "px";

var leftMargin = (windowWidth - 15) / 2;
var topMargin = 0;

var flagTB = true;
var flagLR = true;


window.addEventListener('keydown', function(event){
    let currentKey = event.keyCode;
    var rodBoundaries = rods.getBoundingClientRect();
    var left = rodBoundaries.left;
    console.log(rodBoundaries.left, " ", rodBoundaries.right, " ", windowWidth)
    if(currentKey == 65 && rodBoundaries.left > 10){
        console.log("Key Pressed", currentKey);
        rods.style.marginLeft = left - 10 + "px";
        left -= 10;
    }
    if(currentKey == 68 && rodBoundaries.left < windowWidth-220){
        console.log("Key Pressed", currentKey);
        rods.style.marginLeft = left + 10 + "px";
        left += 10;
    }
});

function checkBallTouchedRod(ballLoc, rodLoc){
    console.log(rodLoc.left, " ", ballLoc.left);
    if(ballLoc.left > rodLoc.left && ballLoc.left < rodLoc.left + 200){
        return true
    }
    return false;
}

windowHeight -= 31;

window.addEventListener('keydown', function(event){
    console.log(event.keyCode);
    if(event.keyCode == 13){
        var interval = setInterval(() => {
    
            var ballLoc = ball.getBoundingClientRect();
            var rodLoc = rods.getBoundingClientRect();
            
            if(ballLoc.top <= 30){
                flagTB = true;
                if(!checkBallTouchedRod(ballLoc, rodLoc)){
                    clearInterval(interval);
                }
            }
        
            if(ballLoc.bottom >= windowHeight){
                flagTB = false;
                if(!checkBallTouchedRod(ballLoc, rodLoc)){
                    clearInterval(interval);
                }
            }
        
            if(ballLoc.left <= 0){
                flagLR = true;
            }
        
            if(ballLoc.right >= windowWidth-10){
                flagLR = false;
            }
        
            if(flagTB){
                ball.style.marginTop = topMargin + 5 + "px";
                topMargin += 5;
            }else{
                ball.style.marginTop = topMargin - 5 + "px";
                topMargin -= 5;
            }
        
            if(flagLR){
                ball.style.marginLeft = leftMargin + 5 + "px";
                leftMargin += 5;
            }else{
                ball.style.marginLeft = leftMargin - 5 + "px";
                leftMargin -= 5;
            }
        },50);
    }
})