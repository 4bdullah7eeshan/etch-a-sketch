function hover(box) {
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function generateGrid() {
    let numberOfBoxes;
    numberOfBoxes = input.value;
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



const hero = document.createElement("div");
hero.id = "hero";

const mainHeading = document.createElement("h1");
mainHeading.textContent = "Etch-A-Sketch";

hero.appendChild(mainHeading);


const websiteDescription = document.createElement("p");
websiteDescription.textContent = "Glide your cursor over the grid to leave trailing marks.";
websiteDescription.setAttribute("class", "description");
hero.appendChild(websiteDescription);

document.body.appendChild(hero);

const main = document.createElement("div");
main.id = "main";


const grid = document.createElement("div");
grid.id = "grid";

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

main.appendChild(grid);


const promptSection = document.createElement("div");
promptSection.id = "prompt-section";

const label = document.createElement("label");
label.id = "label";
label.textContent = "Change number of squares";

promptSection.appendChild(label);

const input = document.createElement("input");
input.id = "input";
input.setAttribute("type", "number");

promptSection.appendChild(input);

const button = document.createElement("button");
button.textContent = "Go";
button.addEventListener("click", generateGrid);

promptSection.appendChild(button);

main.appendChild(promptSection);

document.body.appendChild(main);


const footer = document.createElement("div");
footer.id = "footer";

const footerText = document.createElement("p");
footerText.textContent = "Copyright © Abdullah Zeeshan 2024";

footer.appendChild(footerText);

const footerLink = document.createElement("a");
footerLink.href = "https://github.com/4bdullah7eeshan/etch-a-sketch";
footerLink.target = "_blank";
footerLink.rel = "noopener noreferrer";

const githubLogo = document.createElement("i");
githubLogo.setAttribute("class", "fab fa-github");

footerLink.appendChild(githubLogo);

footer.appendChild(footerLink);

document.body.appendChild(footer);