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
	console.log(computerChoices)

	for (let i = 0; i < computerChoices.length; i++){
		if (computerChoices[i] === redButton){
			// console.log(redButton)
			setColorRed()
			// setRedColor()
			// redFlash = setInterval(setRedColor, 550);
		}
		else if (computerChoices[i] === greenButton) {
			setGreenColor()
			// greenFlash = setInterval(setGreenColor, 550);
		} 
		else if (computerChoices[i] === blueButton) {
			setBlueColor()
			// blueFlash = setInterval(setBlueColor, 550);
		} 
		else if (computerChoices[i] === yellowButton) {
			setYellowColor()
			// yellowFlash = setInterval(setYellowColor, 550); {	
			}
		// } else {
			// setTimeout()
		// }
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
		// console.log(playerTurn, computerChoices);
		const index = playerTurn.length 

		if (playerTurn[index] === computerChoices[index]) {
			playerTurn =[];
			getRandomSequence();
			currentScore += 1;
			
			if (currentScore < 500) {
				scoreBoard.innerText = currentScore;
				// console.log(currentScore);
			}
		// 	else if (playerTurn[index - 1] !== computerChoices[index - 1])
		// 	restartGame();
		}
	}
});


// create function to make start disapper when gameplay
function setRedColor() {
	let redButtonDisplay = document.querySelector('#red-panel');
	redButtonDisplay.style.backgroundColor = '#FD4F52';
	setTimeout(stopRedColor, 1000);
}
function stopRedColor() {
	// clearInterval(redFlash);
	let redButtonDisplay = document.querySelector('#red-panel');
	redButtonDisplay.style.backgroundColor = 'red';
}

// set Green flash function
function setGreenColor() {
	let greenButtonDisplay = document.querySelector('#green-panel');
	greenButtonDisplay.style.backgroundColor = '#16F43A';
	setTimeout(stopGreenColor, 1000);
}
function stopGreenColor() {
	// clearInterval(greenFlash);
	let greenButtonDisplay = document.querySelector('#green-panel');
	greenButtonDisplay.style.backgroundColor = 'green';
}

// Set yellow flash function
function setYellowColor() {
	let yellowButtonDisplay = document.querySelector('#yellow-panel');
	yellowButtonDisplay.style.backgroundColor = '#F9F489';
	setTimeout(stopYellowColor, 1000);
}
function stopYellowColor() {
	// clearInterval(yellowFlash);
	let yellowButtonDisplay = document.querySelector('#yellow-panel');
	yellowButtonDisplay.style.backgroundColor = 'yellow';
}

//set blue flash function
function setBlueColor() {
	let blueButtonDisplay = document.querySelector('#blue-panel');
	blueButtonDisplay.style.backgroundColor = '#676CF1';
	setTimeout(stopBlueColor, 1000);
}
function stopBlueColor() {
	// clearInterval(blueFlash);
	let blueButtonDisplay = document.querySelector('#blue-panel');
	blueButtonDisplay.style.backgroundColor = 'blue';
}

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