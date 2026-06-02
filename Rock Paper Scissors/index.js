const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const comDisplay = document.getElementById("comDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(choice){
    const comChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(choice === comChoice){
        result = "It's a Tie!";
    }
    else{
        switch(choice){
            case "rock":
                result = (comChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (comChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (comChoice === "paper") ? "You Win!" : "You Lose!";
                break;

        }       
    }

    playerDisplay.textContent = `Player: ${choice}`;
    comDisplay.textContent = `Computer: ${comChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}