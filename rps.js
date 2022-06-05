function computerPlay(){
    const options = ["Scissors", "Paper", "Rock"];
    const random = Math.floor(Math.random()*options.length);
    return (options[random]);

}

function userInput(){
    let userChoice = prompt("Choose: Rock, Paper, or Scissors");
    let slice = userChoice.slice(1);
    userChoice = userChoice.charAt(0).toUpperCase() + slice.toLowerCase();

    return userChoice;
}

function playRound(userSelection = userInput(), computerSelection=computerPlay()){
    // const computerSelection = computerPlay();
    // const userSelection = userInput();
    let userWin = ["User Wins", computerSelection, userSelection];
    let computerWin = ["Computer Wins", computerSelection, userSelection];

    if (computerSelection===userSelection){
        let value = ["tie", computerSelection, userSelection]
        return (value);
    }
    else if (computerSelection==="Rock" && userSelection==="Paper"){
        return (userWin);
    }
    else if (computerSelection==="Rock" && userSelection==="Scissors"){
        return computerWin;
    }
    else if (computerSelection==="Scissors" && userSelection==="Rock"){
        return (userWin);
    }
    else if (computerSelection==="Scissors" && userSelection==="Paper"){
        return computerWin;
    }
    else if (computerSelection==="Paper" && userSelection==="Scissors"){
        return (userWin);
    }
    else if (computerSelection==="Paper" && userSelection==="Rock"){
        return computerWin;
    }

    else {
        return "Enter a valid option. Refersh the page and star again"
    }


}

// console.log(playRound());

function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i<=3; i++){
        let newGame = playRound();
        if (newGame[0]==="User Wins"){
            userScore+=1;
            console.log(newGame)
        }
        else if (newGame[0]==="Computer Wins"){
            computerScore+=1;
            console.log(newGame);
        }
        else{
            i--;
            console.log(newGame);
        }

    }
    let value = [userScore, computerScore];
    return value;

}

console.log(game())