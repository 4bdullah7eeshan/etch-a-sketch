const grid = document.querySelector("#grid");

for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.setAttribute("style", "height: 6.25%; width: 6.25%; outline: 1px solid black;");
    grid.appendChild(box);
}