let computerChoice, computerChoiceText;

function assignRandomChoice(){
  computerChoice=Math.floor(Math.random()*3+1);
}
function rockClicked(){
  assignRandomChoice();
  if(computerChoiceText===1){
    computerChoiceText=`👊Rock`;
  }else if(computerChoice===2){
    computerChoiceText=`✋Paper`;
  }else{
    computerChoiceText=`✌️Scissors`;
  }

  if(computerChoiceText==`👊Rock`){
    result='Tie';
  }else if(computerChoiceText==`✋Paper`){
    result='I won';
    }else{
      result='You won';
    }

  document.querySelector('#result').innerHTML=`You chose 👊Rock. <br>
  Computer chose ${computerChoiceText}. <br>
  And the result is: ${result}`;
}

function paperClicked(){
  assignRandomChoice();
  if(computerChoiceText===1){
    computerChoiceText=`👊Rock`;
  }else if(computerChoice===2){
    computerChoiceText=`✋Paper`;
  }else{
    computerChoiceText=`✌️Scissors`;
  }

  if(computerChoiceText==`👊Rock`){
    result='You won';
  }else if(computerChoiceText==`✋Paper`){
    result='Tie';
    }else{
      result='I won';
    }

  document.querySelector('#result').innerHTML=`You chose ✋Paper. <br>
  Computer chose ${computerChoiceText}. <br>
  And the result is: ${result}`;
}

function scissorsClicked(){
  assignRandomChoice();
  if(computerChoiceText===1){
    computerChoiceText=`👊Rock`;
  }else if(computerChoice===2){
    computerChoiceText=`✋Paper`;
  }else{
    computerChoiceText=`✌️Scissors`;
  }

  if(computerChoiceText==`👊Rock`){
    result='I won';
  }else if(computerChoiceText==`✋Paper`){
    result='You won';
    }else{
      result='Tie';
    }

  document.querySelector('#result').innerHTML=`You chose ✌️Scissors. <br>
  Computer chose ${computerChoiceText}.<br>
  And the result is: ${result}`;
}