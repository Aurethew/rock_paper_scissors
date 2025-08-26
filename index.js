
// ----- CODE STARTS HERE -----------

var numOfItem = document.querySelectorAll(".item").length;

for (var i = 0; i < numOfItem; i++) {
    document.querySelectorAll(".item")[i].addEventListener("click",
        function () {
            var buttonInnerHTML = this.innerHTML.toLowerCase();
            getHumanChoice(buttonInnerHTML);
            getComputerChoice();
            //console.log(buttonInnerHTML);
            playRound();
            console.log("Human score: " + humanScore + " - Computer score: " + computerScore);
        }
    );
}

//Updated image based on player's choice
var player1img = document.querySelector(".img1");

//Human gives choice
function getHumanChoice(playerSelection) {
    switch (playerSelection) {
        case "rock":
            player1img.setAttribute("src", "./images/icon1.png");
            break;
        case "paper":
            player1img.setAttribute("src", "./images/icon2.png");
            break;
        case "scissors":
            player1img.setAttribute("src", "./images/icon3.png");
            break;

        default:
            player1img.setAttribute("src", "./images/icon4.png"); // fallback
            break;
    }
    console.log("Human choice :" + playerSelection);
};
// console.log("Human choice :" + getHumanChoice());

//computer generates random rock paper scissors

var player2img = document.querySelector(".img2");

function getComputerChoice() {
    var num = Math.floor(Math.random() * 3) + 1;

    //Random Image
    var randomImage = "icon" + num + ".png";
    var randomImageSrc = "./images/" + randomImage;

    var computerImage = document.querySelectorAll(".img2")[0];
    computerImage.setAttribute("src", randomImageSrc);

    console.log("Computer choice : " + randomImage);
}
//console.log("Computer choice :" + getComputerChoice());

//score 
let humanScore = 0;
let computerScore = 0;

//MAPPING image file name to actual choice 
const imageToChoice = {
    "icon1.png": "rock",
    "icon2.png": "paper",
    "icon3.png": "scissors"
};


//FUNCTION to get human choice from images

function getHumanChoiceFromImages() {
    const src = player1img.getAttribute("src");
    const fileName = src.substring(src.lastIndexOf("/") + 1);
    return imageToChoice[fileName];
}

// FUNCTION to get the computer's actual choice from the image
function getComputerChoiceFromImage() {
    const src = player2img.getAttribute("src"); // e.g., "./images/icon2.png"
    const fileName = src.substring(src.lastIndexOf("/") + 1); // e.g., "icon2.png"
    return imageToChoice[fileName];
}

//check validity
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoiceFromImages();
    computerChoice = getComputerChoiceFromImage();

    if (humanChoice === "rock" & computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
        document.querySelector("h2").innerHTML="<em>Player 2 won!<em>";

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
        document.querySelector("h2").innerHTML="<em>Player 1 won!<em>";

    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a draw!");
        document.querySelector("h2").innerHTML="<em>It's a tie!<em>";

    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a draw");
        document.querySelector("h2").innerHTML="<em>It's a tie!<em>";

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
        document.querySelector("h2").innerHTML="<em>Player 1 won!<em>";

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        document.querySelector("h2").innerHTML="<em>Player 2 won!<em>";

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
        document.querySelector("h2").innerHTML="<em>Player 1 won!<em>";

    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a draw");
        document.querySelector("h2").innerHTML="<em>It's a tie!<em>";

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
        document.querySelector("h2").innerHTML="<em>Player 2 won!<em>";

    } else {
        console.log("Typo");
        document.querySelector("h2").innerHTML="<em>Try Again!<em>";
    }
    //console.log("Human score: " + humanScore + " - Computer score: " + computerScore);
}


