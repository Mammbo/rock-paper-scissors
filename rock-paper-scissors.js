//  rock beats scissors and loses to paper
// paper beats rock and loses to scissors
// scissors beats paper and loses to rock 

function getComputerChoice() {
    const MAX_CHOICES = 3
    let computerChoice = Math.floor(Math.random() * MAX_CHOICES);

    if (computerChoice === 0) {
        computerChoice = "rock"
    } else if (computerChoice === 1) {
        computerChoice = "paper" 
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() { 
    let choice = prompt("Rock, Paper, Scissors?)")
    let lowered_choice = choice.toLowerCase()
    return lowered_choice
}

function playRound() {
    for (let turn = 0; turn < 5; turn++) {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if (computerChoice === humanChoice) {
            console.log("Tie!, no one wins!");
        } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") ) { 
            console.log("You win! " + humanChoice + " beats " + computerChoice)
            human_score = human_score + 1
        } else {
            console.log("You lose :< " + computerChoice + " beats " + humanChoice)
            computer_score = computer_score + 1
        }
    }   
}

function playGame(humanChoice, computerChoice) {
        playRound(humanChoice, computerChoice)
}

let human_score = 0
let computer_score = 0 

playGame();

if (human_score > computer_score) {
    console.log("YOU WINN THE GAMEEE WOOOOOOO!")
} else if (computer_score > human_score) { 
    console.log("you lost. .-. :<")
} else {
    console.log("honestly more impressive, its really hard to tie but you did it good job! :D")
}

