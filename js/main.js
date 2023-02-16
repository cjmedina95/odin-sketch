// Generates a user-defined block of X*X cells.
// cellSize has 0.01 subtracted due to odd numbers causing rounding errors,
// leading to strange margin sizes and wrapping issues. 

function generateGrid(gridSize, sketcherSize, sketcher) {
    sketcher.textContent = "";
    generateCells(gridSize, sketcherSize, sketcher);
    sketcher.style.grid = "repeat(" + gridSize + ", " + (sketcherSize / gridSize) + "px) / auto-flow " + (sketcherSize / gridSize) + "px";
}

function generateCells(cellCount, size, sketchBoard) {
    cellSize = size / cellCount;

    for (i = 0; i < (cellCount * cellCount); i++) {
        addCell(sketchBoard, cellSize);
    }
}

function randomColor(currentColor) {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    return "rgb(" + red + "," + green + ", " + blue + ")";
}

var mouseDown = false;

function addCell(node, cellSize) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.width = (cellSize-1) + "px";
    cell.style.height = (cellSize-1) + "px";
    cell.addEventListener("mousedown", (event) => {
        const toggleState = document.querySelector("#switchValue").checked;
        console.log(toggleState);
        if (toggleState == true) {
            event.target.style.backgroundColor = randomColor(event.target.style.backgroundColor);
        }
        else {
            event.target.style.backgroundColor = "rgb(0,0,0)";
        }
        mouseDown = true;
    }, false);
    cell.addEventListener("mouseup", (event) => {
        mouseDown = false;
    })
    cell.addEventListener("mouseenter", (event) => {
        const toggleState = document.querySelector("#switchValue").checked;
        console.log(toggleState);
        if (mouseDown) {
            if (toggleState == true) {
                event.target.style.backgroundColor = randomColor(event.target.style.backgroundColor);
            }
            else {
                event.target.style.backgroundColor = "rgb(0,0,0)";
            }
        }
    }, false);
    node.appendChild(cell, node);
}

const sketcher = document.querySelector("#sketchContainer");

const sketcherSize = 512;

sketcher.style.width = sketcherSize.toString() + "px";
sketcher.style.height = sketcherSize.toString() + "px";
sketcher.addEventListener("mouseleave", (event) => {
    mouseDown = false;
})

const newButton = document.querySelector("#new");
const resetButton = document.querySelector("#reset");

let gridSize = 30;

newButton.onclick = function() {
    gridSize = prompt("Enter a new grid size between 1 and 100: ");

    while (isNaN(gridSize) || gridSize < 1 || gridSize > 100 || gridSize % 1 != 0) {
        gridSize = prompt("Invalid input. Enter a new grid size between 1 and 100:");
    }
    
    generateGrid(gridSize, sketcherSize, sketcher);
};

resetButton.onclick = function() {
    generateGrid(gridSize, sketcherSize, sketcher);
};

generateGrid(gridSize, sketcherSize, sketcher);