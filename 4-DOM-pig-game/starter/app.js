/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevDiceRoll, prevDiceRoll_2;



init();


document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		console.log(prevDiceRoll);
		// 1. Random number
		var dice = Math.floor(Math.random() * 6) + 1;
		var dice_2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		
		var diceDOM_2 = document.querySelector('.dice_2');
		diceDOM_2.style.display = 'block';
		diceDOM_2.src = 'dice-' + dice_2 + '.png';

		// 3. Update the round score IF rolled number was NOT 1
		if(((dice === 6) && (prevDiceRoll === 6)) || ((dice_2 === 6) && (prevDiceRoll_2 === 6))){
			document.getElementById('score-' + activePlayer).textContent = 0;
			document.getElementById('current-' + activePlayer).textContent = 0;
			scores[activePlayer] = 0;
			nextPlayer();
	   	} else if ((dice !== 1) && (dice_2 !== 1)) {
			//addcore
			//roundScore += dice;
			roundScore = roundScore + dice + dice_2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			//Next player
			nextPlayer();
		}
		prevDiceRoll = dice;
		prevDiceRoll_2 = dice_2;
	} 

});

document.querySelector('.btn').addEventListener('click', function(){
	document.querySelector('#popup_wrapper').style.display = 'none';
	var finishScore = document.querySelector('#finishScore').value;	
	document.querySelector('.popup-inner-container').innerHTML = '<input type="text" id="finishScore" class="input_score" value = '+ finishScore+'>';
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
		// Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

		//Update the UI 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Check if player won the game
		var finishScore = document.querySelector('#finishScore').value;
		var winningScore;
		
		if (finishScore){
			 winningScore = finishScore;
		} else {
			winningScore = 100;
		}
		if (scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice_2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			//Next Player
			nextPlayer();
		}
	}
});

function nextPlayer() {
	//Next player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice_2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	prevDiceRoll = 0;
	prevDiceRoll_2 = 0;
	
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice_2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';	

//var x = document.querySelector('#score-0').textContent;
//console.log(x);




