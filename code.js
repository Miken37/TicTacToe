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
        
    } else{
        playerOne = true;
        currentPlayer.style.color = "rgb(135, 201, 36)";
        currentPlayer.innerHTML = "Player One";
        return 'url(circle.png)';
        
    };
}



squareTest.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.backgroundImage = playerCheck();
            
    })
})

resetButton.addEventListener("click", () =>{
    squareTest.forEach((element => {
        element.style.backgroundImage = "";
    }))
})

