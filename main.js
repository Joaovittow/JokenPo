const result = document.querySelector('.result')
const userScore = document.querySelector('#user-score')
const machineScore = document.querySelector('#machine-score')

let userScoreNumber = 0
let machineScoreNumber = 0

const player = (playerChoice) => {
  
  playTheGame(playerChoice, playerMachine())
}

const playerMachine = () => {
  const choices = ['paper', 'rock', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  
  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log("Player: " + human + " Alexa: " + machine)
  
  if (human === machine) {
    result.innerHTML = 'Deu Empate!'
    
  } else if(human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper'){
    result.innerHTML = 'Você Ganhou!'
    userScoreNumber++
    userScore.innerHTML = userScoreNumber
    
  }else{
    result.innerHTML = 'Você Perdeu para Alexa!'
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
  }
}
