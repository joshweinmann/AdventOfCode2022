function getInput() {
  const inputText = Deno.readTextFileSync("./day1/input.txt");
  return inputText.split("\n\n").map((calories) =>
    calories.split("\n").map((cal) => Number(cal))
  );
}

function getSortedElfCalories() {
  const elves = getInput();
  const calories = elves.map((elf) => {
    let sum = 0;
    for (const cal of elf) sum += cal;
    return sum;
  });
  return calories.sort((a, b) => b - a);
}

function part1() {
  const calories = getSortedElfCalories();
  return calories[0];
}

function part2() {
  const calories = getSortedElfCalories();
  return calories[0] + calories[1] + calories[2];
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
