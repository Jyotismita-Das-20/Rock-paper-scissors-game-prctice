let score={
  computer:0,
  user:0,
  tie: 0,
  updateScore: function(){
    document.querySelector('#score').innerHTML=`
  Score: Computer Won: ${this.computer}, User Won: ${this.user}, Tie: ${this.tie}`;
  }
};

function assignRandomChoice(){
  let computerChoice=Math.floor(Math.random()*3+1);
  return computerChoice;
}
function getComputerChoice(){
  let computerChoiceText;
  let computerChoice=assignRandomChoice();
  if(computerChoice===1){
    computerChoiceText=`👊Rock`;
  }else if(computerChoice===2){
    computerChoiceText=`✋Paper`;
  }else{
    computerChoiceText=`✌️Scissors`;
  }
  return computerChoiceText;
}

function updateResult(userChoice,computerChoice,result){
  document.querySelector('#result').innerHTML=`You chose ${userChoice}. <br>
  Computer chose ${computerChoice}. <br>
  And the result is: ${result}`;
}

function computerResult(userChoice,computerChoice){
  let result;
  if(userChoice===computerChoice){
    result='Tie';
    score.tie++;
  }else if((computerChoice==='👊Rock' && userChoice=== '✌️Scissors') || (computerChoice==='✌️Scissors' && userChoice=== '✋Paper') || (computerChoice==='✋Paper' && userChoice=== '👊Rock')){
    result='Computer won';
    score.computer++;
    }else{
      result='You won';
      score.user++;
    }
    score.updateScore();
    return result;
}

function rockClicked(){
  const userChoice='👊Rock';
  let computerChoice=getComputerChoice();
    let result=computerResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}

function paperClicked(){
  const userChoice='✋Paper';
  let computerChoice=getComputerChoice();
    let result=computerResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}

function scissorsClicked(){
  const userChoice='✌️Scissors';
  let computerChoice=getComputerChoice();
    let result=computerResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}