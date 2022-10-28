let squares = document.querySelector(".main-container");
let resetButton = document.querySelector(".reset");
let squareTest = squares.childNodes;
let playerOne = true;

let currentPlayer = document.querySelector(".playerTurn");

function playerCheck() {
    if (playerOne) { 
        playerOne = false;
        currentPlayer.style.color = "yellow";
        currentPlayer.innerHTML = "Player Two";
        
        return 'url(cross.png)';
        
    } else {
        playerOne = true;
        currentPlayer.style.color = "rgb(135, 201, 36)";
        currentPlayer.innerHTML = "Player One";
        
        return 'url(circle.png)';
        
    };
}

let squareOne = document.querySelector(".square1");
let squareTwo = document.querySelector(".square2");
let squareThree = document.querySelector(".square3");
let squareFour = document.querySelector(".square4");
let squareFive = document.querySelector(".square5");
let squareSix = document.querySelector(".square6");
let squareSeven = document.querySelector(".square7");
let squareEight = document.querySelector(".square8");
let squareNine = document.querySelector(".square9");

let crossString = "url(\"cross.png\")";
let circleString = "url(\"circle.png\")"

function gameCheck(){       //Inelegant way of mapping out 3 in a row for each direction
    if (squareOne.style.backgroundImage == crossString      //X - across top
        && squareTwo.style.backgroundImage == crossString 
        && squareThree.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareOne.style.backgroundImage == crossString      //X - across left
        && squareFour.style.backgroundImage == crossString 
        && squareSeven.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareThree.style.backgroundImage == crossString      //X - across right
        && squareSix.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareOne.style.backgroundImage == crossString      //X - Top left > Bottom Right
        && squareFive.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareTwo.style.backgroundImage == crossString      //X - Top Center > Bottom Center
        && squareFive.style.backgroundImage == crossString 
        && squareEight.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareThree.style.backgroundImage == crossString      //X - Top Right > Bottom Left
        && squareFive.style.backgroundImage == crossString 
        && squareSeven.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareFour.style.backgroundImage == crossString      //X - Center Left > Center Right
        && squareFive.style.backgroundImage == crossString 
        && squareSix.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }   
    if (squareSeven.style.backgroundImage == crossString      //X - Bottom Left > Bottom Right
        && squareEight.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
        console.log("Cross Wins");
    }
    if (squareOne.style.backgroundImage == crossString      //X - across top
    && squareTwo.style.backgroundImage == crossString 
    && squareThree.style.backgroundImage == crossString){
    console.log("Cross Wins");
}   
    if (squareOne.style.backgroundImage == circleString      //O - across left
        && squareFour.style.backgroundImage == circleString 
        && squareSeven.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
    if (squareThree.style.backgroundImage == circleString      //0 - across right
        && squareSix.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
    if (squareOne.style.backgroundImage == circleString      //0 - Top left > Bottom Right
        && squareFive.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
    if (squareTwo.style.backgroundImage == circleString      //0 - Top Center > Bottom Center
        && squareFive.style.backgroundImage == circleString 
        && squareEight.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
    if (squareThree.style.backgroundImage == circleString      //0 - Top Right > Bottom Left
        && squareFive.style.backgroundImage == circleString 
        && squareSeven.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
    if (squareFour.style.backgroundImage == circleString      //0 - Center Left > Center Right
        && squareFive.style.backgroundImage == circleString 
        && squareSix.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }   
    if (squareSeven.style.backgroundImage == circleString      //0 - Bottom Left > Bottom Right
        && squareEight.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
        console.log("Circle Wins");
    }
}


squareTest.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.backgroundImage = playerCheck();
        gameCheck();
    })
})



resetButton.addEventListener("click", () =>{
    for (let i = 0; i <= 9; i++){
        let squaresReset = document.getElementsByClassName(`square${i}`)
        console.log(squaresReset);
        //squaresReset.style.backgroundImage = "";
    }
})



