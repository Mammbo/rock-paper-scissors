//  rock beats scissors and loses to paper
// paper beats rock and loses to scissors
// scissors beats paper and loses to rock 

let playerScore = 0
let computerScore = 0
let roundWinner = ''


//Game Logic

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        playerScore++
        roundWinner = 'player'
    } else {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(playerSelection, computerSelection, roundWinner)
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


//UI
const scoreInfo = document.getElementById("scoreInfo")
const scoreMsg = document.getElementById("scoreMessage")
const playerScoreUI = document.getElementById("playerscore")
const computerScoreUI = document.getElementById("computerscore")
const rock = document.getElementById("rockBtn")
const paper = document.getElementById("paperBtn")
const scissors = document.getElementById("scissorsBtn")
const modal = document.getElementById("endgameModal")
const modalMsg = document.getElementById("endgameMsg")
const restartBtn = document.getElementById("restartBtn")
const overlay = document.getElementById("overlay")



//event listeners 
rock.addEventListener('click', () => handleClick('ROCK'))
paper.addEventListener('click', () => handleClick('PAPER'))
scissors.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeModal)


// handle any click on the screen function 

function handleClick(playerSelection) {
    if (isGameOver()) {
        openModal()
        return 
    }

    const computerSelection = computerChoice()
    playRound(playerSelection, computerSelection)
    updateChoice(playerSelection, computerSelection)
    updateScore()


    if (isGameOver()) {
        openModal()
        setFinalMessage()
    }
}

//updating choices function

function updateChoice(playerSelection, computerSelection) {

    const playerSign = document.getElementById("playersign")
    const computerSign = document.getElementById("computersign")

    if (playerSelection === 'ROCK') {
        playerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/rock.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        playerSign.appendChild(img)
    } else if (playerSelection === 'PAPER') {
        playerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/paper.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        playerSign.appendChild(img)
    } else if (playerSelection === 'SCISSORS') {
        playerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/scissors.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        playerSign.appendChild(img)
    } 

    if (computerSelection === 'ROCK') {
        computerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/rock.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        computerSign.appendChild(img)
    } else if (computerSelection === 'PAPER') {
        computerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/paper.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        computerSign.appendChild(img)
    } else if (computerSelection === 'SCISSORS') {
        computerSign.textContent = "";
        let img = document.createElement('img');
        img.src = "./images/scissors.png"
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        computerSign.appendChild(img)
    }
}


//updating score function
function updateScore() {
    playerScoreUI.textContent = `Player: ${playerScore}`
    computerScoreUI.textContent = `Computer: ${computerScore}`

    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a Tie !"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = "You Win !"
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = "You Lose :,<"
    }
}

//updating score message funciton
function updateScoreMessage(playerSelection, computerSelection, winner) {
    if (winner === 'tie') {
        scoreMsg.textContent = `${playerSelection} and ${computerSelection} are the same !`
    } else if (winner === 'player'){
        scoreMsg.textContent = `${playerSelection} beats ${computerSelection}!`
    } else if (winner === 'computer') {
        scoreMsg.textContent = `${computerSelection} beats ${playerSelection}!`
    }
}

// open endgame modal
function openModal() {
    modal.classList.add("active")
    overlay.classList.add("active")
}

//close endgame modal
function closeModal() {
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

//final message function for modal
function setFinalMessage() {
    if (playerScore > computerScore) {
        modalMsg.textContent = "You Won!"
    } else {
        modalMsg.textContent = "You lost."
    }
} 

function restartGame() {
    //basically set everything back to how it was 
    
}
 