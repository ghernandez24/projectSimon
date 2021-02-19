// console.log('hello')
// const gridButton = document.querySelectorAll('.js-button')

const computerChoices = [];

const gameGrid = document.querySelector('.game-grid')

gameGrid.addEventListener('click', (event) =>{
    event.preventDefault()
    if (event.target.classList.contains('js-button')){
        computerChoices.push(event.target.id)
        console.log(computerChoices)
    }
})
