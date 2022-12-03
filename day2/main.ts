function getInput() {
  const inputText = Deno.readTextFileSync("./day2/input.txt").trim();
  return inputText.split("\n") as Round[];
}

type Round = "A X" | "A Y" | "A Z" | "B X" | "B Y" | "B Z" | "C X" | "C Y" | "C Z";

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const WIN = 6;
const LOSS = 0;
const TIE = 3;

const strategy1 = {
  "A X": TIE + ROCK,
  "A Y": WIN + PAPER,
  "A Z": LOSS + SCISSORS,
  "B X": LOSS + ROCK,
  "B Y": TIE + PAPER,
  "B Z": WIN + SCISSORS,
  "C X": WIN + ROCK,
  "C Y": LOSS + PAPER,
  "C Z": TIE + SCISSORS,
};

const strategy2 = {
  "A X": LOSS + SCISSORS,
  "A Y": TIE + ROCK,
  "A Z": WIN + PAPER,
  "B X": LOSS + ROCK,
  "B Y": TIE + PAPER,
  "B Z": WIN + SCISSORS,
  "C X": LOSS + PAPER,
  "C Y": TIE + SCISSORS,
  "C Z": WIN + ROCK,
};

function part1() {
  const rounds = getInput();
  let score = 0;

  for (const round of rounds) {
    score += strategy1[round];
  } 

  return score;
}

function part2() {
  const rounds = getInput();
  let score = 0;

  for (const round of rounds) {
    score += strategy2[round];
  } 

  return score;
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
