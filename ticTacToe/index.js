var turn = "X";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];
var board = ["", "", "", "", "", "", "", "", ""];

function changeturn(t) {
  t === "X" ? (turn = "O") : (turn = "X");
}

function checkWin() {
  for (let index = 0; index < winningCombos.length; index++) {
    const row = winningCombos[index];
    const c1 = row[0];
    const c2 = row[1];
    const c3 = row[2];
    // console.log(c1, c2, c3);
    // console.log(board[c1], board[c2], board[c3]);
    if (
      board[c1] === board[c2] &&
      board[c2] === board[c3] &&
      board[c3] === board[c1] &&
      board[c1] !== "" &&
      board[c2] !== "" &&
      board[c3] !== ""
    ) {
      alert(`${turn} Won !! \n Winner Winner Chicken Dinner!!!  `);
    }
  }
}
function handleClick(i) {
  // i is ID
  //   console.log(i);
  if (board[i] === "") {
    document.getElementById(i).innerHTML = turn;
  }
  board[i] = turn;
  checkWin();
  changeturn(turn);
}
