//variables for x and circle
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
//set all the winning combinations
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//select all the cells
const cellElements = document.querySelectorAll('[data-cell]')
//get the board element
const board= document.getElementById('board')

//select winning message element
const winningMessageElement= document.getElementById('winningMsg')

//call the play again button

const playAgainButton = document.getElementById('playAgainButton')

//get the winning message
const winningMessageTxtElement = document.querySelector('[data-winning-msg-txt]')
let circleTurn

startGame()

playAgainButton.addEventListener('click', startGame) // event listener for starting the game over

function startGame(){
    circleTurn = false
    //loop through cells
//add event listener that handle the click once its true. allows to fire the evenr once
cellElements.forEach(cell =>{
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {once:true})
})
setBoardHoverclass()
winningMessageElement.classList.remove('show')
}



function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //placemark for current class either x or cicle
    placeMark(cell, currentClass) 
    // check for win
    if( checkWin(currentClass) ){
        endGame(false)
    } else if (isDraw()) {               //check for draw

        endGame(true)
    } else {
   //Switch turns
   swapTurns()
   setBoardHoverclass()
    }
  
 

}

function endGame(draw){
    if(draw){
        winningMessageTxtElement.innerText = 'Draw!'
    }else {
        winningMessageTxtElement.innerText = `${circleTurn ? "O's" : "X's"} Win!`
    }
        winningMessageElement.classList.add('show')
}

//create function that checks to see if all cells are filled with x's || o's and declare a draw

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}


function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}
function setBoardHoverclass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
    })
})
}


