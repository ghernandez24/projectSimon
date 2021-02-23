// create all the variables, element references
let currentScore = 0;
let scoreBoard = document.querySelector('.js-score');
let start = false;
let playerTurn = [];
let flash;

const computerChoices = [];
const gameGrid = document.querySelector('.game-grid');
const redButton = document.querySelector('#red-panel');
const greenButton = document.querySelector('#green-panel');
const blueButton = document.querySelector('#blue-panel');
const yellowButton = document.querySelector('#yellow-panel');
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const winnerDisplay = document.querySelector('.winner-display')


// create an event listener so the program records what the player inputs
// gameGrid.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	if (event.target.classList.contains('js-button')) {
// 		playerTurn.push(event.target.id);
// 		console.log(playerTurn);
// 	}
// });


// create a random sequence that computer outputs
// change game to start once start is pressed

const getRandomSequence = () => {
	let sequence = [
		redButton,
		greenButton,
		blueButton,
		yellowButton,
	];
	computerChoices.push(sequence[Math.floor(Math.random()* sequence.length)])
	console.log(computerChoices)
};
startButton.addEventListener('click', (event) => {
		start = true;
		getRandomSequence();
		scoreBoard.innerHTML = '0000';
});


// create a woking score board so each time the player gets the right prompt it increments +1
gameGrid.addEventListener('click', (event) => {
	if (event.target.classList.contains('js-button')) {
		playerTurn.push(event.target);
		console.log(playerTurn, computerChoices);
		
		const index = playerTurn.length 
		if (playerTurn[index] === computerChoices[index]) {
			playerTurn =[];
			getRandomSequence();
			currentScore += 1;
			
			if (currentScore < 500) {
				scoreBoard.innerText = currentScore;
				// console.log(currentScore);
			}
			else 
				return false;
		}
	}
});

function startGame() {
	startButton.classList.add('hidden')
	info.classList.remove('hidden')
}

startButton.addEventListener('click', startGame)

// Player clicks on correct function to get pass to get round
// function gameStart(event) {
// 	if (getRandomSequence() = playerTurn = true){
// 	return getRandomSequence()++
// } else 
// 	console.log('gameover')
// }
