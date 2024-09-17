// Create a 16x16 grid of square divs
    // Select "grid-container"
        // Create 16 rows, each row has 16 squares (function with parameters for modularity)

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16, 16);
});

// When button is clicked, delete the current grid and create a new one with the user's desired size (max 100x100)
squareNumberButton = document.querySelector("#square-number-btn");
squareNumberButton.addEventListener("click", function() {
    // ask user for input while not a number > 1 and < 100
    let userInput = 0;
    do {
        userInput = prompt("Enter number of rows (MAX 100): ");
    } while (userInput < 2 || userInput > 100);

    // delete the current grid
    document.querySelector(".grid-container").remove();
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid-container");
    document.body.appendChild(newGrid);

    // generate new grid
    createGrid(userInput, userInput);
})

// Create a row with square amount of squares
function createRow(squares) {
    // A row should be a div, flex, with children horizontally (append squares)
    let gridContainer = document.querySelector(".grid-container");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    
    // Append to the new row the pertinent number of squares
    for (let i = 0; i < squares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square", i);
        /* Set up a hover effect for each square */
        newSquare.addEventListener("mouseenter", function() {
            colorSquare(newSquare);
        })

        newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);
    // A row is the div container, square is the div with class square (and the dimensions defined in css)
}

function createGrid(rows, squares) {
    for (let i = 0; i < rows; i++) {
        createRow(squares);
    }
}

function colorSquare(squareToColor) {
    squareToColor.setAttribute("style", "background-color: black");
}


// It's best to put your grid of squares inside a "container" div (written in html)
// Use flexbox to make the divs appear as a grid
// Be careful with borders and margins (border-box??)
// Set up a hover effect so that the grid divs change color when your mouse passes over them (permanent color change I think)
// Add a button on the top of the screen that will send the user a
    // popup asking for the number of squares per side for the new grid.
    // Once entered, the existing grid should be removed, and a new grid should be generated
    // in the same total space as before (limit user max 100)

