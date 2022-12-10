function getInput() {
  const inputText = Deno.readTextFileSync("./day8/input.txt").trim();
  return inputText.split("\n").map((row) =>
    row.split("").map((height) => Number(height))
  );
}

function checkIfVisible(
  rowIndex: number,
  colIndex: number,
  height: number,
  row: number[],
  col: number[],
) {
  if (
    (rowIndex === 0 || rowIndex === row.length - 1 || colIndex === 0 || colIndex === col.length - 1) || // edge
    (row.slice(colIndex + 1, row.length).every((h) => h < height)) || // right
    (row.slice(0, colIndex).every((h) => h < height)) || // left
    (col.slice(rowIndex + 1, col.length).every((h) => h < height)) || // up
    (col.slice(0, rowIndex).every((h) => h < height)) // down
  ) {
    return true;
  }

  return false;
}

function getScenicScore(
  rowIndex: number,
  colIndex: number,
  height: number,
  row: number[],
  col: number[],
) {
  let rightScore = 0, leftScore = 0, upScore = 0, downScore = 0;

  // right
  for (let i = colIndex + 1; i < row.length; i++) {
    rightScore++;
    if (row[i] >= height) break;
  }

  // left
  for (let i = colIndex - 1; i >= 0; i--) {
    leftScore++;
    if (row[i] >= height) break;
  }

  // up
  for (let i = rowIndex - 1; i >= 0; i--) {
    upScore++;
    if (col[i] >= height) break;
  }

  // down
  for (let i = rowIndex + 1; i < col.length; i++) {
    downScore++;
    if (col[i] >= height) break;
  }

  return rightScore * leftScore * upScore * downScore;
}

function part1() {
  const trees = getInput();
  let count = 0;

  for (let r = 0; r < trees.length; r++) {
    const row = trees[r];

    for (let c = 0; c < row.length; c++) {
      const col = trees.map((line) => line[c]);

      if (checkIfVisible(r, c, row[c], row, col)) {
        count++;
      }
    }
  }

  return count;
}

function part2() {
  const trees = getInput();
  let highScore = 0;

  for (let r = 0; r < trees.length; r++) {
    const row = trees[r];

    for (let c = 0; c < row.length; c++) {
      const col = trees.map((line) => line[c]);
      const scenicScore = getScenicScore(r, c, row[c], row, col);

      if (highScore < scenicScore) {
        highScore = scenicScore;
      }
    }
  }

  return highScore;
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
