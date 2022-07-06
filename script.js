
let currentScore1=0;
let currentScore2=0;
let totalScoreofP1 = 0;
let totalScoreofP2 = 0;
let playerSwitchValue =0;
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
let playerScore = document.getElementById('score--0');
let currentScoreOfPlayer1 = document.getElementById('current--0');
let currentScoreOfPlayer2 = document.getElementById('current--1');
const popUp = document.querySelector('.pop-up');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const overlay = document.querySelector('.overlay');
const again = document.querySelector('.btn--new');
//functions
const playerSwitch =function(){
  playerSwitchValue++;
  if (playerSwitchValue %2==0){
    player2Switch();
  }
  else{
    player1Switch();
  }
}


const randomDice= function(){
   return Math.floor(Math.random()*6+1);
}


const player1Switch = function(){
  player1.classList.remove('player--active')
  player2.classList.add('player--active')
  playerScore = document.getElementById('score--1');
  currentScoreOfPlayer = document.getElementById('current--1');
}


const player2Switch = function(){
  player2.classList.remove('player--active')
  player1.classList.add('player--active')
  playerScore = document.getElementById('score--0');
  currentScoreOfPlayer = document.getElementById('current--0');
}


// checking win condition
const ifWin=function(){
  if (currentScore1>=50 || currentScore2>=50){
    overlay.classList.remove('hidden');
    popUp.classList.remove('hidden');
    if(currentScore1>currentScore2){
    document.querySelector('.winnername').innerHTML="Player1 Wins! 💥"
  }
    else{
      document.querySelector('.winnername').innerHTML="Player2 Wins! 💥"
    }


  }

}


//newGame
again.addEventListener('click',function(){
  location.reload()
})





// rolling the dice
rollDice.addEventListener('click',function(){
  let diceValue = randomDice();
  console.log(diceValue);
  dice.src=`dice-${diceValue}.png`;
  playerScore.innerHTML=diceValue;
  if(diceValue===1){
    if(playerSwitchValue%2==0){
      currentScoreOfPlayer1.innerHTML=0;
      currentScore1=0;
    }
    else{
      currentScoreOfPlayer2.innerHTML=0;
      currentScore2=0;
    }
    console.log('ok')
    playerSwitch();
  }
  else{
    if (playerSwitchValue%2==0){
      currentScore1=currentScore1+diceValue;
      currentScoreOfPlayer1.innerHTML=currentScore1;
    }
    else{
      currentScore2=currentScore2+diceValue;
      currentScoreOfPlayer2.innerHTML=currentScore2;
    }

  }
 ifWin();
})


// holding event
hold.addEventListener('click',function(){
  playerSwitch()
})

overlay.addEventListener('click',function(){
    overlay.classList.add('hidden');
    popUp.classList.add('hidden');
    location.reload()
})
