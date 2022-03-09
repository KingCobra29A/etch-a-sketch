
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

const squares = Array.from(document.querySelectorAll(".grid-square"));

squares.forEach(square => {
    square.addEventListener('click', e => {
            e.target.classList.toggle("clicked-grid");
    })
});