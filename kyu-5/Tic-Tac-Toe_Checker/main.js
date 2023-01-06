Object.defineProperty(Array.prototype, "flat", {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  },
}); // I love Stack Overflow lol

function isSolved(board) {
  let rows = board;
  let columns = board[0].map((x, i) => board.map((x) => x[i]));
  let diagonals = board.reduce(
    (acc, curr, i) => {
      acc[0] = acc[0].concat(curr[i]);
      acc[1] = acc[1].concat(curr[3 - i - 1]);
      return acc;
    },
    [[], []]
  );

  let linesScore = [rows, columns, diagonals]
    .flat()
    .map((x) => [...new Set(x)]);

  let isWin = linesScore.filter((x) => x.length == 1 && x[0] != 0);
  let boardFull = !linesScore.flat().includes(0);

  return isWin[0] ? isWin.flat()[0] : boardFull + isWin.length - 1;
}
