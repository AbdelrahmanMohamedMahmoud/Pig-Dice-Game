'use strict';

let playerNumber = 0;
let currentScore = 0;

const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');

const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');

const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const buttonReset = document.querySelector('.btn--new');
const RollImage = document.querySelector('.dice');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const switchPlayer = function(){
    currentScore = 0;
    let summationCurrentPlayer = document.querySelector(`#current--${playerNumber}`);
    summationCurrentPlayer.textContent = currentScore;
    playerNumber = playerNumber === 1 ? 0 : 1;        
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}


buttonRoll.addEventListener('click', function(){
   if(Number(player1Score.textContent) >= 100 || Number(player2Score.textContent) >=100)
        return;

   let rollNumber = Math.trunc((Math.random() * 6) + 1);

   let imageSrc = `dice-${rollNumber}.png`;

   RollImage.src = imageSrc;
   
   if(RollImage.classList.contains('hidden'))
         RollImage.classList.remove('hidden');

   if(rollNumber === 1){
        switchPlayer();
     }

   else
      currentScore += rollNumber;
      
     
     document.querySelector(`#current--${playerNumber}`).textContent = currentScore; 
     
   }

);

buttonHold.addEventListener('click', function(){
     if(Number(player1Score.textContent) >= 100 || Number(player2Score.textContent)>=100)
        return;
       
      let currentPlayerElement = document.querySelector(`#score--${playerNumber}`);
      
      
      currentPlayerElement.textContent = Number(currentPlayerElement.textContent) + currentScore;
 
      if(Number(currentPlayerElement.textContent) >= 100){
            document.querySelector(`.player--${playerNumber}`).style.backgroundColor = 'black';
        }

      else{
        switchPlayer();
        }           
                
});


buttonReset.addEventListener('click', function(){
    currentScore = 0;
    playerNumber = 0;

    RollImage.classList.add('hidden');
    player1.classList.add('player--active'); 
    
    if(player1Score.classList.contains('player--active'))
       player2.classList.remove('player--active');
   
    document.querySelector(`#current--0`).style.backgroundColor = '#c7365f';
    document.querySelector(`#score--0`).textContent = currentScore;
    document.querySelector(`#score--1`).textContent = currentScore;
    document.querySelector(`#current--0`).textContent = currentScore;
    document.querySelector(`#current--1`).textContent = currentScore;
});