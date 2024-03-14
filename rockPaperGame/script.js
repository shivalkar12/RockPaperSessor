let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rankIdx = Math.floor(Math.random() * 3);
    return options[rankIdx]
}
const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw. Play Again!!";
    msg.style.backgroundColor = "blue ";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;

        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor = "green";
    

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}
//logic 
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissor" ? false : true;

        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});



