function getInput() {
  const inputText = Deno.readTextFileSync("./day1/input.txt");
  return inputText.split("\n\n").map((calories) =>
    calories.split("\n").map((cal) => Number(cal))
  );
}

function sum(calories: number[]) {
  let result = 0;
  for (const cal of calories) {
    result += cal;
  }
  return result;
}

function part1() {
  const elves = getInput();
  const calories = elves.map((elf) => sum(elf));
  calories.sort((a, b) => b - a);

  return calories[0];
}

function part2() {
  const elves = getInput();
  const calories = elves.map((elf) => sum(elf));
  calories.sort((a, b) => b - a);

  return calories[0] + calories[1] + calories[2];
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
