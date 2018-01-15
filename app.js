/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




//-------------------------PIG GAME----------------------------\\



var scores, dice, dice2, roundScore, activePlayer, lastDice, gamePlaying = true, winningScore, i=0;

scores = [0,0] // Setting up score at the beginning

sixTwice = [0,0];

roundScore = 0;

activePlayer = 0;

document.getElementById('current-0').textContent = 0;

document.getElementById('current-1').textContent = 0;

document.getElementById('score-0').textContent = 0;

document.getElementById('score-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.dice-2').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', 
                                                     function() {
    if(gamePlaying) {

    var dice = Math.floor(Math.random()*6) + 1;
        
    var diceDom = document.querySelector('.dice');
    
    diceDom.style.display = 'block';
    
    diceDom.src = ('dice-'+dice+'.png');
    
    secondDice();
  
    if(dice!==1 && dice2 !==1) {
        
        roundScore += dice+dice2;
        
        document.querySelector('#current-'+activePlayer).textContent = 
            roundScore;
        
        sixTwice[i] = dice;
        
        if(sixTwice[0] === 6 && sixTwice[1]===6 && activePlayer === 0) {
            
           document.querySelector('#current-0').textContent = 0;
            
           document.querySelector('#score-0').textContent = 0;
        
           roundScore = 0;
            
           scores[0] = 0;
           
           activePlayer = 1;
           
           document.querySelector('.player-0-panel').classList.toggle('active');
        
           document.querySelector('.player-1-panel').classList.toggle('active');
           
           sixTwice = [0,0]; 
            
        }
         
        if(sixTwice[0] === 6 && sixTwice[1]===6 && activePlayer === 1) {
            
            document.querySelector('#current-1').textContent = 0;
           
            document.querySelector('#score-1').textContent = 0;
            
            roundScore = 0;
            
            scores[1] = 0;
            
            activePlayer = 0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
        
            document.querySelector('.player-1-panel').classList.toggle('active');
            sixTwice = [0,0];
       
        }
        i++;
        if(i>1) {
            i=0;
        }
    
    } else {
        scores[activePlayer] = 0;
        document.querySelector('#score-'+activePlayer).textContent = 0;
        document.querySelector('#current-'+activePlayer).textContent = 0;
        nextPlayer();
        
    }
        console.log(dice2);
    } else {
        
        alert("Click 'NEW GAME' to start another game!")
    
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying) {

        sixTwice = [0,0];
        
        scores[activePlayer] += roundScore;
    
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
    if(scores[activePlayer] >= winningScore) {
      
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      
        document.querySelector('.dice').style.display = 'none';
        
        document.querySelector('.dice-2').style.display = 'none';
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        gamePlaying = false;
        
    } else {
    
        nextPlayer();
        
    }
        
    } else {
        alert("Click 'NEW GAME' to start another game!")
    }
       
})

function secondDice() {
    dice2 = Math.floor(Math.random()*6) + 1;
        
    var diceDom2 = document.querySelector('.dice-2');
    
    diceDom2.style.display = 'block';
    
    diceDom2.src = ('dice-'+dice2+'.png');
    
}
function nextPlayer() {
    
    if(activePlayer===0) {
            
            activePlayer = 1;
      
        } else {
            
            activePlayer = 0;
        
        }
   
    roundScore = 0;
        
    document.querySelector('#current-' + activePlayer).textContent = 
            roundScore;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
        
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', function() {

gamePlaying = true;
    
scores[activePlayer] = 0;

roundScore = 0;
    
document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');

document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    
activePlayer = 0;
    
document.querySelector('.player-0-panel').classList.add('active');

document.querySelector('#name-0').textContent = 'PLAYER 1';

document.querySelector('#name-1').textContent = 'PLAYER 2';

document.getElementById('current-0').textContent = 0;

document.getElementById('current-1').textContent = 0;

document.getElementById('score-0').textContent = 0;

document.getElementById('score-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';
    
document.querySelector('.dice-2').style.display = 'none';
    
})


//---------------------COMPLETED-----------------------\\























