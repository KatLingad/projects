// JavaScript File
/*
Score Keeping App

Recreate the html in the image screenshot and add your script
1. The Default score limit is 5
	The limit can be changed by the input field
2. Everytime player 1 or player 2 button is pressed score
	increments by 1 for player 1 or player 2.
3. When the score limit is reached the game is over
	Change the color to green for the winning player
4. Reset will set scores back to 0 for both players
	and will set the score limit back to the default

Use: event listeners, if/else statements, functions
*/
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input[type='number']");
var playingToDisplay = document.getElementById("playingToDisplay");
var winnerDisplay = document.getElementById("winnerDisplay");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			winnerDisplay.textContent = " - Player 1 Wins!";
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			winnerDisplay.textContent = " - Player 2 Wins!";
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});


resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	winningScore = Number(this.value);
	playingToDisplay.textContent = winningScore;
	reset();
});

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	winnerDisplay.textContent = "";
}