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

function getResult(userChoice,computerChoice){
  let result;
  if(userChoice===computerChoice){
    result='Tie';
  }else if((computerChoice==='👊Rock' && userChoice=== '✌️Scissors') || (computerChoice==='✌️Scissors' && userChoice=== '✋Paper') || (computerChoice==='✋Paper' && userChoice=== '👊Rock')){
    result='Computer won';
    }else{
      result='You won';
    }
    return result;
}

function rockClicked(){
  const userChoice='👊Rock';
  let computerChoice=getComputerChoice();
    let result=getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}

function paperClicked(){
  const userChoice='✋Paper';
  let computerChoice=getComputerChoice();
    let result=getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}

function scissorsClicked(){
  const userChoice='✌️Scissors';
  let computerChoice=getComputerChoice();
    let result=getResult(userChoice,computerChoice);
    updateResult(userChoice,computerChoice,result);
}