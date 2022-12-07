function getInput() {
  return Deno.readTextFileSync("./day6/input.txt");
}

function findMarker(data: string, size: number) {
  for (let i = size; i <= data.length; i++) {
    const sequence = data.slice(i - size, i);
    const hasDuplicate = /(.).*\1/;

    if (!hasDuplicate.test(sequence)) {
      return i;
    }
  }

  return null;
}

function part1() {
  const data = getInput();
  return findMarker(data, 4);
}

function part2() {
  const data = getInput();
  return findMarker(data, 14);
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
