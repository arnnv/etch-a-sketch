const grid = document.querySelector(".grid");

let n = 16;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${600 / n}px`;
    box.style.height = `${600 / n}px`;
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
