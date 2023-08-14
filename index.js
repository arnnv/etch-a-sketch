const grid = document.querySelector(".grid");

const gridStyle = getComputedStyle(grid);

const gridWidthPx = parseInt(gridStyle.width);
const gridHeightPx = parseInt(gridStyle.height);

let n = 16;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${gridWidthPx / n}px`;
    box.style.height = `${gridHeightPx / n}px`;
    grid.appendChild(box);
  }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = `#${randomColor}`;
  });
});
