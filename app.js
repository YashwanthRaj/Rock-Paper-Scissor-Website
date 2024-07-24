let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");

function genCompChoice() {
    const options = ["rock","paper", "scissors"];
    const randInt = Math.floor(Math.random() * 3);
    return options[randInt];
}

function drawGame() {
    msg.innerText = "Draw game";
    msg.style.backgroundColor = "#090740"
}

function showWinner(userWin){
    if(userWin) {
        msg.innerText = "You Won!!";
        userScore++;
        document.querySelector("#user").innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "You Lost!!";
        compScore++;
        document.querySelector("#comp-score").innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})