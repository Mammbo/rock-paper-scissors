// 0 will be rock
//1 will be paper
// 2 will be scissors

function getComputerChoice() {
    const MAX_CHOICES = 3
    return Math.floor(Math.random() * MAX_CHOICES)
}

function getHumanChoice() { 
    let choice = prompt("Rock(0), Paper(1), Scissors(2)")
    let choice_conversion = parseInt(choice)

    return choice_conversion
}

const val = getHumanChoice()
console.log(val)