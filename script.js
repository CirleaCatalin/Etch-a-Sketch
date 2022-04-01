const board = document.querySelector(".board");
board.id = "board";
console.log(board);
function makeGrid(rows, cols) {
  board.style.setProperty("--grid-rows", rows);
  board.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    board.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", paint);
  }
}

function paint(e) {
  e.target.style.backgroundColor = "black";
}
const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  board.innerHTML = "";
  makeGrid(16, 16);
});

makeGrid(16, 16);
