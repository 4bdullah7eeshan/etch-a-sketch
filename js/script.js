function hover(box) {
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function generateGrid() {
    let numberOfBoxes;
    numberOfBoxes = Number(input.value);
    if (numberOfBoxes > 100) {
        alert("I am sorry friend! The maximum limit is 100.");
    }
    else {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
          }
        for (let i = 0; i < numberOfBoxes ** 2; i++) {
            const box = document.createElement("div");
            box.setAttribute("style", `height: ${(100 / numberOfBoxes)}%; width: ${(100 / numberOfBoxes)}%; outline: 1px solid black;`);
            box.addEventListener("mouseenter", function() {
                hover(box);
            });
            grid.appendChild(box);
        }
    }
    
}

const grid = document.querySelector("#grid");

for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    // In each row and column, there are going to be 16 squares. The size must be divided equally (100/16 = 6.25)
    // Use outline and not border, as border takes space from the size of the square.
    box.setAttribute("style", "height: 6.25%; width: 6.25%; outline: 1px solid black;"); 
    box.addEventListener("mouseenter", function() {
        hover(box);
    });
    grid.appendChild(box);
}


const promptSection = document.createElement("div");
const label = document.createElement("label");
const input = document.createElement("input");
const button = document.createElement("button");
label.textContent = "Enter number of squares";
input.setAttribute("type", "text");
button.textContent = "Click To Generate Grid";
button.addEventListener("click", generateGrid);
promptSection.appendChild(label);
promptSection.appendChild(input);
promptSection.appendChild(button);
document.body.insertBefore(promptSection, grid);