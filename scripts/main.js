
function createRow(gridLength){
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row");

    for (let i = 0; i < gridLength; i++){
        newRow.appendChild(createSquare());
    }

    return newRow;
}

function createSquare(){
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square", "unselected-square");
    return newSquare;
}

function test(rows){
    const etchGrid = document.querySelector(".body-wrapper");
    for(let i = 0; i < rows; i++){
        etchGrid.appendChild(createRow(rows));
    }    
}

test(16);


//add querySelector + eventListeners which handle the "drawing" via class toggling
const squares = Array.from(document.querySelectorAll(".grid-square"));

squares.forEach(square => {
    square.addEventListener('click', e => {
            e.target.classList.toggle("clicked-grid");
    })
});

//add querySelector + eventListener which handles the reset of squares
const reset = document.querySelector(".reset-button");

reset.addEventListener('click', e => {
    squares.forEach( square => {
        square.classList.remove("clicked-grid");
    })
});