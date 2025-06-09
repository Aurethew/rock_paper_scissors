

//computer generates random rock paper scissors
function getComputerChoice() {
    var num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
    return num;

};
//console.log("Computer choice :" + getComputerChoice());

//Human gives choice
function getHumanChoice() {
    var hChoice = prompt("Choice : rock, paper or scissors :");
    alert("Choice : " + hChoice);
    return hChoice;
};
//console.log("Human choice :" + getHumanChoice());

//score 
let humanScore = 0;
let computerScore = 0;



function playGame() {
    //check validity
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();

        if (humanChoice === "rock" & computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");

        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");

        } else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a draw!");

        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a draw");

        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");

        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");

        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");

        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a draw");

        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");

        } else {
            console.log("Typo");
        }

    }
    //To check validity of the functions
    for(i=0; i <=5; i++){
    playRound();
    console.log("Human score: " + humanScore + " - Computer score: " + computerScore);
    };
};
//start game
playGame();