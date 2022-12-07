function getInput() {
  return Deno.readTextFileSync("./day6/input.txt");
}

function part1() {
  const data = getInput();

  for (let i = 4; i <= data.length; i++) {
    const sequence = data.slice(i - 4, i);
    const hasDuplicate = /(.).*\1/;

    if (!hasDuplicate.test(sequence)) {
      return i;
    }
  }

  return null;
}

function part2() {
  const data = getInput();

  for (let i = 14; i <= data.length; i++) {
    const sequence = data.slice(i - 14, i);
    const hasDuplicate = /(.).*\1/;

    if (!hasDuplicate.test(sequence)) {
      return i;
    }
  }

  return null;
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
