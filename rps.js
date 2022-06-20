let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const container = document.querySelector('.containter');
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')



function computerPlay(){
    const options = ["Scissors", "Paper", "Rock"];
    const random = Math.floor(Math.random()*options.length);
    return (options[random]);

}

const playRound = (playerSelection, computerSelection) => {
    console.log(playerSelection, computerSelection)
    if (computerSelection===playerSelection){
        const p = document.createElement('p');
        p.textContent = `You tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Rock" && playerSelection==="Paper"){
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Rock" && playerSelection==="Scissors"){
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Scissors" && playerSelection==="Rock"){
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Scissors" && playerSelection==="Paper"){
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Paper" && playerSelection==="Scissors"){
        playerScore++;
        const p = document.createElement('p');
        p.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if (computerSelection==="Paper" && playerSelection==="Rock"){
        computerScore++;
        const p = document.createElement('p');
        p.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
}

const tally = (playerScore, computerScore) => {
    console.log(playerScore, computerScore)
    if (playerScore === 5){
        const p = document.createElement('p')
        p.classList.add('player-won')
        p.textContent = `You won, your score is ${playerScore}, computer score is ${computerScore}`
        outcomeDiv.appendChild(p)
    } 
    else if (computerScore ===5){
        const p = document.createElement('p')
        p.classList.add('computer-won')
        p.textContent = `You lost, your score is ${playerScore}, computer score is ${computerScore}`
        outcomeDiv.appendChild(p)
    }

}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `${playerScore}`
    computerScoreSpan.innerText = `${computerScore}`
}

rockButton.addEventListener('click',() => {
    const computerSelection = computerPlay();
    const playerSelection = 'Rock';
    playRound(playerSelection, computerSelection);
    tally(playerScore, computerScore)
    updateScores(playerScore, computerScore)


})
paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Paper';
    playRound(playerSelection, computerSelection);
    tally(playerScore, computerScore)

})
scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'Scissors';
    playRound(playerSelection, computerSelection);
    tally(playerScore, computerScore)

})