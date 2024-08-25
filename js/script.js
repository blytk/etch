// Create a 16x16 grid of square divs
    // Select "grid-container"
        // Create 16 rows, each row has 16 squares (function with parameters for modularity)

// Create a row with square amount of squares
function createRow(squares) {
    // A row should be a div, flex, with children horizontally (append squares)
    const gridContainer = document.querySelector(".grid-container");
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    
    // Append to the new row the pertinent number of squares
    for (let i = 0; i < squares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square", i);

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

// It's best to put your grid of squares inside a "container" div (written in html)
// Use flexbox to make the divs appear as a grid
// Be careful with borders and margins (border-box??)
// Set up a hover effect so that the grid divs change color when your mouse passes over them (permanent color change I think)
// Add a button on the top of the screen that will send the user a
    // popup asking for the number of squares per side for the new grid.
    // Once entered, the existing grid should be removed, and a new grid should be generated
    // in the same total space as before (limit user max 100)

