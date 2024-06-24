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
    } else if ((playerselection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        playerScore++
        roundWinner == 'player'
    } else {
        computerScore++
        roundWinner =='computer'
    }
    updateScore(playerScore, computerScore, roundWinner)
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

// handle any click on the screen function 

    // check if games over if so open modal and retrun nothing

    // if not get computer selection 

    //if game is over opene endgame modal and set final message

//updating choices function

//updating score function

//updating score message funciton

// open endgame modal

//close endgame modal

//final message function for modal 

//restart game function 









//UI
const scoreInfo = document.getElementById("scoreInfo")
const scoreMsg = document.getElementById("scoreMessage")
const playerSign = document.getElementById("playersign")
const playerScoreUI = document.getElementById("playerscore")
const computerSign = document.getElementById("computersign")
const computerScoreUI = document.getElementById("computerscore")
const rockBtn = document.getElementById("rockBtn")
const paper = document.getElementById("paperBtn")
const scissors = document.getElementById("scissorsBtn")
const modal = document.getElementById("endgameModal")
const modalMsg = document.getElementById("endgameMsg")
const restartBtn = document.getElementById("restartBtn")
const overlay = document.getElementById("overlay")



//event listeners 
rockBtn.addEventListener('click', () => handleClick('ROCK'))
paper.addEventListener('click', () => handleClick('PAPER'))
scissors.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)




/* .modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.overlay.active {
  display: block;
}

display both those values at the end in css and add active to both classes and disable display in overlay and transform in modal. */


// okay so the logic goes as follow 
// 1. blank screeen telling the user to pick a weapon 

// once their choice is clicked which needs to be listend to by a click enviornment lister, the computer program will run and give the random choice.
// the choose weapon next needs to be changed via js based off of the result of the match (tie win loss) and the text below that needs to display the choices ex: paper(human) beats rock(computer)!
//2. while that happens a point needs to be added to the player score. 
//3. once either player or computer reaches 5 the game is over and a pop up will appear asking to play again at that point new css elements will need to be added and changed along with the html file so the modal can popup. once clicked the dom will be reset restarting the program. 