const grid = document.querySelector(".grid");
const gridStyle = getComputedStyle(grid);
const gridWidthPx = parseInt(gridStyle.width);
const gridHeightPx = parseInt(gridStyle.height);
const changeSizeBtn = document.querySelector(".change-size");

function createBoxes(qty) {
  for (let i = 1; i <= qty; i++) {
    for (let j = 1; j <= qty; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${gridWidthPx / qty}px`;
      box.style.height = `${gridHeightPx / qty}px`;
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
}

createBoxes(16);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

function changeGridSize(newSize) {
  removeAllChildNodes(grid);
  createBoxes(newSize);
}

function changeSizeBtnFn() {
  let newSize = parseInt(prompt("Enter new size: ", 16));
  if (newSize >= 1 && newSize <= 100) {
    changeGridSize(newSize);
  } else if (newSize <= 0 || newSize > 100) {
    if (confirm("Enter a size between 1 & 100.")) {
      changeSizeBtnFn();
    }
  }
}

changeSizeBtn.addEventListener("click", changeSizeBtnFn);
