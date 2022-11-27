function _getInput(): string {
  const inputText: string = Deno.readTextFileSync("./{{day}}/input.txt");

  return inputText;
}

function part1(): number {
  // const data: string = getInput();
  return 0;
}

function part2(): number {
  // const data: string = getInput();
  return 0;
}

function checkAnswers() {
  const one: number = part1();
  const two: number = part2();

  console.log("Part 1:", one);
  console.log("Part 2:", two);
}

checkAnswers();
