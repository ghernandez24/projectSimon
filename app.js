let currentScore = 0;
let scoreBoard = document.querySelector('.js-score');
let start;


const computerChoices = [];
const gameGrid = document.querySelector('.game-grid');
const redButton = document.querySelector('#red');
const greenButton = document.querySelector('#green');
const blueButton = document.querySelector('#blue');
const yellowButton = document.querySelector('#yellow');
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');

// need to debug to "--" goes to digits

startButton.addEventListener('click', (event) => {
	if (startButton == true) {
		start = true;
		scoreBoard.innerHTML = '0000';
	} else {
		start = false;
	}
});

gameGrid.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.classList.contains('js-button')) {
		computerChoices.push(event.target.id);
		console.log(computerChoices);
	}
});

gameGrid.addEventListener('click', (event) => {
	if (event.target.classList.contains('js-button')) {
		currentScore += 1;
		if (currentScore < 9999) {
			scoreBoard.innerText = currentScore;
			console.log(currentScore);
		}
	}
});

function play() {
	win = false;
	order = [];
	playerOrder = [];
	turn = 1;
	good = true;
	for (var i = 0; i < 20; i++) {
		order.push(Math.floor(Math.random() * 4) + 1);
	}
	console.log(order);
}
