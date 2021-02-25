// create all the variables, element references
let currentScore = 0;
let scoreBoard = document.querySelector('.js-score');
let start = false;
let playerTurn = [];
let computerChoices = [];

const gameGrid = document.querySelector('.game-grid');
const redButton = document.querySelector('#red-panel');
const greenButton = document.querySelector('#green-panel');
const blueButton = document.querySelector('#blue-panel');
const yellowButton = document.querySelector('#yellow-panel');
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const winnerDisplay = document.querySelector('.winner-display')


// create a random sequence that computer outputs
// change game to start once start is pressed
const getRandomSequence = () => {
	let panel = [
		redButton,
		greenButton,
		blueButton,
		yellowButton,
	];
	computerChoices.push(panel[Math.floor(Math.random()* panel.length)])

	for (let i = 0; i < computerChoices.length; i++){
		if (computerChoices[i] === redButton){
			setTimeout (setRedColor, 1000 * i);
		}
		else if (computerChoices[i] === greenButton) {
			setTimeout (setGreenColor, 1000 * i);
		} 
		else if (computerChoices[i] === blueButton) {
			setTimeout (setBlueColor, 1000 * i);
		} 
		else if (computerChoices[i] === yellowButton) {
			setTimeout (setYellowColor, 1000 * i);
		}
	}
};

startButton.addEventListener('click',() => {
		start = true;
		getRandomSequence();
		scoreBoard.innerHTML = '0000';

});

// restart game, must clear all variables and prompt user to press restart
function restartGame() {
	computerChoices = [];
	playerTurn = [];
	currentScore = '';
	startButton.classList.remove('hidden')
	document.getElementById('winner-display').innerHTML = 'Oops! Wrong Choice! Press Start to try again!';
}


// create a woking score board so each time the player gets the right prompt it increments +1
gameGrid.addEventListener('click', (event) => {
	if (event.target.classList.contains('panel')) {
		playerTurn.push(event.target);
		const index = playerTurn.length 

		if (playerTurn[index] === computerChoices[index]) {
			playerTurn =[];
			getRandomSequence();
			currentScore += 1;
		}
			if (currentScore < 500) {
				scoreBoard.innerText = currentScore;
			}
			else if (playerTurn[index -1] !== computerChoices[index -1]){
				restartGame();
				return;
			}
		}
});


// create the flash function 
function setRedColor() {
	let redButtonDisplay = document.querySelector('#red-panel');
	redButtonDisplay.style.backgroundColor = '#FD4F52';
	stopRedColor();
}
function stopRedColor() {
	setTimeout(() => { 
		let redButtonDisplay = document.querySelector('#red-panel');
		redButtonDisplay.style.backgroundColor = 'red';
	}, 1000);
}

// set Green flash function
function setGreenColor() {
	let greenButtonDisplay = document.querySelector('#green-panel');
	greenButtonDisplay.style.backgroundColor = '#16F43A';
	stopGreenColor();
}
function stopGreenColor() {
	setTimeout(() => {
		let greenButtonDisplay = document.querySelector('#green-panel');
		greenButtonDisplay.style.backgroundColor = 'green';
	}, 1000) ;
}

// Set yellow flash function
function setYellowColor() {
	let yellowButtonDisplay = document.querySelector('#yellow-panel');
	yellowButtonDisplay.style.backgroundColor = '#F2F5A9';
	stopYellowColor();
}
function stopYellowColor() {
	setTimeout(() => {
		let yellowButtonDisplay = document.querySelector('#yellow-panel');
		yellowButtonDisplay.style.backgroundColor = 'yellow';
	}, 1000)
}

//set blue flash function
function setBlueColor() {
	let blueButtonDisplay = document.querySelector('#blue-panel');
	blueButtonDisplay.style.backgroundColor = '#676CF1';
	stopBlueColor();
}
function stopBlueColor() {
	setTimeout(() => {
		let blueButtonDisplay = document.querySelector('#blue-panel');
		blueButtonDisplay.style.backgroundColor = 'blue';
	}, 1000)
}

// function for the start button to dissapeer when the user clicks start
function startGame() {
	startButton.classList.add('hidden');
	document.getElementById('winner-display').innerHTML = ' ';
}


startButton.addEventListener('click', startGame)

restartButton.addEventListener('click', restartGame);


// reference to Modal exercise homework
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

const openModal = () => {
	modal.style.display = 'block';
};

const closeModal = () => {
	modal.style.display = 'none';
};

openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);