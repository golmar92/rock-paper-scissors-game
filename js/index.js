'use strict';

var output = document.getElementById('output');
var result = document.getElementById('result');

var playerScore = 0;
var compScore = 0;
var totalRounds = 3;
result.innerHTML = "RESULT" + "<br>" + playerScore + "-" + compScore + "<br>" + "ROUNDS TO WIN: " + totalRounds;


var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var scissors = document.getElementById('scissors');
var start = document.getElementById('start');

paper.addEventListener('click', function(){
	if (checkRoundsScore() == 1) {
		event.preventDefault();
		output.innerHTML += "<br>Game over, please press the new game button.";
	}
	else {
		playerMove('paper');
	}
});
rock.addEventListener('click', function(){
	if (checkRoundsScore() == 1) {
		event.preventDefault();
		output.innerHTML += "<br>Game over, please press the new game button.";
	}
	else {
		playerMove('rock');
	}
});
scissors.addEventListener('click', function(){
	if (checkRoundsScore() == 1) {
		event.preventDefault();
		output.innerHTML += "<br>Game over, please press the new game button.";
	}
	else {
		playerMove('scissors');
	}
});

start.addEventListener('click', function(){
	reset();
	newGame();
});

function checkRoundsScore() {

	if (playerScore == totalRounds || compScore == totalRounds) {
		return 1;
	}
	else {
		return 0;
	}
};

function reset() {
	playerScore = 0;
	compScore = 0;
	totalRounds = 0;
	result.innerHTML = "RESULT" + "<br>" + playerScore + "-" + compScore;
	output.innerHTML = "choose one";
};

function newGame(){
	totalRounds = window.prompt('Type the number of rounds to win:');
	
	if (isNaN(totalRounds) == true || totalRounds == '' || totalRounds == null){
		alert('type a number');
	}
	else {
		result.innerHTML += "<br>" + "ROUNDS TO WIN: " + totalRounds;
	}
};

function randomization(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
};


function playerMove(player) {
	
	

	var computerMove = randomization(1,3);

	function valueComp() {
		
		if (computerMove == 1) {
			return 'paper';
		}
		else if (computerMove == 2) {
			return 'rock';
		}
		else if (computerMove == 3) {
			return 'scissors';
		}
	}

	var comp = valueComp(computerMove);

	function verdict() {
		
		if (player == comp) {
			output.innerHTML = "DRAW: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'paper' && comp == 'rock') {
			output.innerHTML = "YOU WON: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'paper' && comp == 'scissors') {
			output.innerHTML = "YOU LOSE: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'rock' && comp == 'paper') {
			output.innerHTML = "YOU LOSE: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'rock' && comp == 'scissors') {
			output.innerHTML = "YOU WON: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'scissors' && comp == 'paper') {
			output.innerHTML = "YOU WON: you played " + player + ", computer played " + comp + ".";
		}
		else if (player == 'scissors' && comp == 'rock') {
			output.innerHTML = "YOU LOSE: you played " + player + ", computer played " + comp + ".";
		}
	}

	verdict();

	function score() {

		if (output.innerHTML.startsWith('YOU WON') == true) {
			playerScore++;
		}
		else if (output.innerHTML.startsWith('YOU LOSE') == true) {
			compScore++;
		}
		result.innerHTML = "RESULT" + "<br>" + playerScore + "-" + compScore + "<br>" + "ROUNDS TO WIN: " + totalRounds;
	}

	score();

	function endGame() {

		if (playerScore == totalRounds || compScore == totalRounds) {

			if (playerScore > compScore) {
				output.innerHTML += "<br><br>" + "YOU WON THE ENTIRE GAME!!!";
			}
			else if (playerScore < compScore) {
				output.innerHTML += "<br><br>" + "COMPUTER WON THE ENTIRE GAME!!!";
			}
		}
	}

	endGame();
};