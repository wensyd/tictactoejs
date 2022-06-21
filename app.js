//variables for x and circle
const x_class = 'x'
const circle_class = 'circle'
//select all the cells
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn


//loop through cells
//add event listener that handle the click once its true. allows to fire the evenr once
cellElements.forEach(Cell =>{
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? circle_class : x_class
    placemark(cell, currentClass)

    //placeMark
    //check for win
    //check for Draw
    //Switch turns
}
