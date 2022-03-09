//global to keep track of the current grid size
let currentGridSize = 16;

//squares variable, which contains all DOM square elements, will be updated in initGrid
let squares;

//function to create a single square in the etch-a-sketch
function createSquare(){
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square", "unselected-square");
    return newSquare;
}

//function to create a row of squares in the etch-a-sketch
function createRow(gridLength){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    for (let i = 0; i < gridLength; i++){
        newRow.appendChild(createSquare());
    }

    return newRow;
}

//function to determine new sizing of each square
//  this is used because the etch-a-sketch size is constant, but the number of squares is variable
//  function works by setting the height of the row, and the width of the square
//  global "squares" array is used, and query selector grabs all rows for modification
function resizeSquares(numSquares){
    let size = (100/numSquares).toString() + "%";

    squares.forEach(square => {
        square.style.width = size;
    });

    let rows = Array.from(document.querySelectorAll(".grid-row"));
    rows.forEach(row => {
        row.style.height = size;
    });
}




//function to draw the initial etch-a-sketch
const etchGrid = document.querySelector(".body-wrapper");

function initGrid(rows){ 
    for(let i = 0; i < rows; i++){
        etchGrid.appendChild(createRow(rows));
    }
    
    //querySelector for all of the squares in the etch-a-sketch
    squares = Array.from(document.querySelectorAll(".grid-square"));

    //resize the squares
    resizeSquares(rows);

    //event listener on each square in the etch-a-sketch to handle the "drawing" via class toggling
    squares.forEach(square => {
        square.addEventListener('click', e => {
            e.target.classList.toggle("clicked-grid");
        });
    });

}

//draw the initial etch-a-sketch
initGrid(currentGridSize);


//querySelector for reset button
const reset = document.querySelector(".reset-button");

//eventListener which handles the reset of squares
reset.addEventListener('click', e => {
    squares.forEach( square => {
        square.classList.remove("clicked-grid");
    })
});

//querySelector to determine the input for etch-a-sketch size
const sizeOfSketch = document.querySelector(".grid-def");

//event listener which adjusts the size of the etch-a-sketch
sizeOfSketch.addEventListener('change', e => {
    for(let i = 0; i < currentGridSize; i++){
       etchGrid.removeChild(etchGrid.lastChild);
    }
    currentGridSize = e.target.value;
    initGrid(currentGridSize);
})