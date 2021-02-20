let currentScore = 0;
let scoreBoard = document.querySelector('.js-score')

const computerChoices = [];
const gameGrid = document.querySelector('.game-grid')

gameGrid.addEventListener('click', (event) =>{
    event.preventDefault()
    if (event.target.classList.contains('js-button')){
        computerChoices.push(event.target.id)
        console.log(computerChoices)
    }
})

gameGrid.addEventListener('click', (e) => {
	if (e.target.classList.contains('js-button')) {
		currentScore += 1;
		if (currentScore < 9999) {
			scoreBoard.innerText = currentScore;
			console.log(currentScore);
		}
	}
});  