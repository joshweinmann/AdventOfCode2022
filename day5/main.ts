function getInput() {
  const inputText = Deno.readTextFileSync("./day5/input.txt").trimEnd();
  const [crates, moves] = inputText.split("\n\n");
  const rows = crates.split("\n");
  const stacks: Stacks = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };

  // gross!
  for (let col = rows.length - 2; col >= 0; col--) {
    for (let x = 1; x <= 9; x++) {
      const y = (4 * x) - 3;
      
      if (rows[col].charAt(y).trim()) {
        stacks[x].push(rows[col].charAt(y));
      }
    }
  }

  return {
    stacks,
    moves: moves.split("\n").map((move) => {
      const [,amount,,from,,to] = move.split(" ");
      return {
        amount: Number(amount),
        from,
        to,
      } as Move;
    }),
  };
}

interface Stacks {
  [key: string]: string[];
}

interface Move {
  amount: number;
  from: string;
  to: string;
}

function getTopOfStacks(stacks: Stacks) {
  let top = "";

  for (const [, crates] of Object.entries(stacks)) {
    top += crates[crates.length - 1];
  }

  return top;
}

function part1() {
  const { stacks, moves } = getInput();

  for (const { amount, from, to } of moves) {
    let count = 0;
    while (count < amount) {
      stacks[to].push(stacks[from].pop()!);
      count++;
    }
  }

  return getTopOfStacks(stacks);
}

function part2() {
  const { stacks, moves } = getInput();

  for (const { amount, from, to } of moves) {
    const fromEndIndex = stacks[from].length;
    const crates = stacks[from].splice(fromEndIndex - amount, fromEndIndex);
    stacks[to].push(...crates);
  }

  return getTopOfStacks(stacks);
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
