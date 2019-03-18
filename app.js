
let scores, roundScore, intialTarget, activePlayer, gamePlaying, lastDice;

newGame();


document.querySelector(".btn-roll").addEventListener("click",() => {
    
     document.querySelector(".target-score").style.visibility = "hidden";
	let input = parseInt(document.querySelector(".target-score").value);
	console.log(input)

    if(gamePlaying){

    	console.log(input)

		let dice = Math.floor(Math.random() * 6) + 1;
		// 2. Display the result
		var diceDom = document.querySelector(".dice");
		diceDom.style.display = "block";
		diceDom.src = "dice-" + dice + ".png";

		if(dice !== 1){

	    	roundScore+=dice 
	    	document.getElementById(`current-${activePlayer}`).textContent = roundScore;

	    	if(scores[activePlayer] + roundScore >= input || roundScore >= input){
       
       	    	winner()
	    	}

	    } else {

	        playerChange()
	    }
	}
});

document.querySelector(".btn-hold").addEventListener("click", () => {

    if(gamePlaying){

		document.querySelector(".target-score").style.visibility = "visible";
		playerChange()
		// Update the UI
    }

 });

document.querySelector(".btn-new").addEventListener("click", newGame)

function playerChange(){

	scores[activePlayer] += roundScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
    document.querySelector(".dice").style.display = "none";
    document.querySelector(`.player-0-panel`).classList.toggle("active")
    document.querySelector(`.player-1-panel`).classList.toggle("active")
}

function newGame(){    
    
    gamePlaying = true;
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
    
	document.querySelector(".dice").style.display = "none";

	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;

	document.getElementById("current-0").textContent = 0
	document.getElementById("current-1").textContent = 0;

    document.getElementById("name-0").textContent = "Player-1";
    document.getElementById("name-1").textContent = "Player-2";

    document.querySelector(`.player-0-panel`).classList.remove("active")
    document.querySelector(`.player-1-panel`).classList.remove("active")
    document.querySelector(`.player-0-panel`).classList.add("active")

    document.querySelector(`.player-0-panel`).classList.remove("winner")
    document.querySelector(`.player-1-panel`).classList.remove("winner")
    setTimeout(alertt, 1000)
}


function winner(){

	document.getElementById(`name-${activePlayer}`).textContent = "Winner";
	document.querySelector(".dice").style.display = "none";
	document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner")
	document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]+=roundScore;
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    gamePlaying = false;
}


function alertt(){

	alert("Hello\nMy name is Wilfred and I am happy to Welcome you to the PIG GAME. \nGame Rules:\n1. The game has 2 players, playing in rounds.\n2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.\n3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.\n4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn\n5. The first player to reach the Target points on GLOBAL score wins the game. \nNote:\n- If for some reason you wish to change your target, \nyou can change it whenever you HOLD the game. This has no impact on the current score \nThat's all. \n Set your Target hav fun!")
	document.querySelector(".target-score").style.visibility = "visible";
}
