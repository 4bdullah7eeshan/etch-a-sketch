function hover(box) {
    box.style.backgroundColor = "black"; // Adds on the existing one. Don't do setAttr as it removes the previously set background color.
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