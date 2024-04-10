const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreaNumber = 0
let machineScoreNumber = 0

// humanScoreaNumber -> Camel case
// GAME_OPTIONS -> Snake case


//ENUNS
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const radomNumber = Math.floor(Math.random() * 3)  // <=Número aleatório Math.floor(Math.random() * 3)

    console.log(radomNumber)

    return choice[radomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humamo: ' + human + 'máquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    }
    else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanScoreaNumber++
        humanScore.innerHTML = humanScoreaNumber
        result.innerHTML = "Parabés, você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Que azar, você perdeu!"
    }

}
