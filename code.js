let squares = document.querySelector(".main-container");
let resetButton = document.querySelector(".reset");
let squareTest = squares.childNodes;
let playerOne = true;
let gameOn = true;
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

let playerOneScore = document.querySelector(".playerOneScore");
let scoreNumOne = 0;
let playerTwoScore = document.querySelector(".playerTwoScore");
let scoreNumTwo = 0;
let lastWinner = document.querySelector(".lastWin");

function winEffect(winner) {
    if (winner == "player1"){
        gameOn = false;
        scoreNumOne+=1;
        playerOneScore.innerHTML = scoreNumOne;
        lastWinner.innerHTML = "Player 1 Won";
        
    } else if (winner == "player2"){
        gameOn = false;
        scoreNumTwo+=1;
        playerTwoScore.innerHTML = scoreNumTwo;
        lastWinner.innerHTML = "Player 2 Won";
    }
    resetGame();
    
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

let board = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareEight, squareNine];


let crossString = "url(\"cross.png\")";
let circleString = "url(\"circle.png\")"

function gameCheck(){       //Inelegant way of mapping out 3 in a row for each direction
    if (squareOne.style.backgroundImage == crossString      //X - across top
        && squareTwo.style.backgroundImage == crossString 
        && squareThree.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareOne.style.backgroundImage == crossString      //X - across left
        && squareFour.style.backgroundImage == crossString 
        && squareSeven.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareThree.style.backgroundImage == crossString      //X - across right
        && squareSix.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
            winEffect("player1");;
    }
    if (squareOne.style.backgroundImage == crossString      //X - Top left > Bottom Right
        && squareFive.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareTwo.style.backgroundImage == crossString      //X - Top Center > Bottom Center
        && squareFive.style.backgroundImage == crossString 
        && squareEight.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareThree.style.backgroundImage == crossString      //X - Top Right > Bottom Left
        && squareFive.style.backgroundImage == crossString 
        && squareSeven.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareFour.style.backgroundImage == crossString      //X - Center Left > Center Right
        && squareFive.style.backgroundImage == crossString 
        && squareSix.style.backgroundImage == crossString){
            winEffect("player1");;
    }   
    if (squareSeven.style.backgroundImage == crossString      //X - Bottom Left > Bottom Right
        && squareEight.style.backgroundImage == crossString 
        && squareNine.style.backgroundImage == crossString){
            winEffect("player1");
    }
    if (squareOne.style.backgroundImage == circleString      //O - across top
        && squareTwo.style.backgroundImage == circleString 
        && squareThree.style.backgroundImage == circleString){
            winEffect("player2");
    }   
    if (squareOne.style.backgroundImage == circleString      //O - across left
        && squareFour.style.backgroundImage == circleString 
        && squareSeven.style.backgroundImage == circleString){
            winEffect("player2");;
    }
    if (squareThree.style.backgroundImage == circleString      //0 - across right
        && squareSix.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
            winEffect("player2");
    }
    if (squareOne.style.backgroundImage == circleString      //0 - Top left > Bottom Right
        && squareFive.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
            winEffect("player2");
    }
    if (squareTwo.style.backgroundImage == circleString      //0 - Top Center > Bottom Center
        && squareFive.style.backgroundImage == circleString 
        && squareEight.style.backgroundImage == circleString){
            winEffect("player2");
    }
    if (squareThree.style.backgroundImage == circleString      //0 - Top Right > Bottom Left
        && squareFive.style.backgroundImage == circleString 
        && squareSeven.style.backgroundImage == circleString){
            winEffect("player2");
    }
    if (squareFour.style.backgroundImage == circleString      //0 - Center Left > Center Right
        && squareFive.style.backgroundImage == circleString 
        && squareSix.style.backgroundImage == circleString){
            winEffect("player2");
    }   
    if (squareSeven.style.backgroundImage == circleString      //0 - Bottom Left > Bottom Right
        && squareEight.style.backgroundImage == circleString 
        && squareNine.style.backgroundImage == circleString){
            winEffect("player2");
    }
}

function resetGame(){
    board.forEach((element) => {
        element.style.backgroundImage = '';
        playerOne = true;
        currentPlayer.style.color = "rgb(135, 201, 36)";
        currentPlayer.innerHTML = "Player One";
    })
}

if (gameOn){
    squareTest.forEach((element) => {
        element.addEventListener("click", () => {
            element.style.backgroundImage = playerCheck();
            gameCheck();
        })
    })
}


resetButton.addEventListener("click", () =>{
    lastWinner.innerHTML = "Game was reset with no winner";
    resetGame();
})





