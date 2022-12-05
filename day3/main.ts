function getInput() {
  const inputText = Deno.readTextFileSync("./day3/input.txt").trim();
  return inputText.split("\n");
}

function getCompartmentsFromRucksack(rucksack: string) {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2, rucksack.length),
  ];
}

function getRucksacksByElfGroup(rucksacks: string[]) {
  const elfGroups = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    elfGroups.push(rucksacks.slice(i, i + 3));
  }
  return elfGroups;
}

function getMatch(...rucksacks: string[]) {
  for (const item of rucksacks[0]) {
    if (rucksacks[1].includes(item) && (rucksacks[2]?.includes(item) ?? true)) {
      return item;
    }
  }
  return "";
}

function getPriority(item: string) {
  if (item === item.toUpperCase()) {
    return item.charCodeAt(0) - 38;
  }
  return item.charCodeAt(0) - 96;
}

function part1() {
  const rucksacks = getInput();
  let total = 0;

  for (const rucksack of rucksacks) {
    const [compartment1, compartment2] = getCompartmentsFromRucksack(rucksack);
    const match = getMatch(compartment1, compartment2);
    if (match) total += getPriority(match);
  }

  return total;
}

function part2() {
  const rucksacks = getInput();
  const elfGroups = getRucksacksByElfGroup(rucksacks);
  let total = 0;

  for (const [rucksack1, rucksack2, rucksack3] of elfGroups) {
    const match = getMatch(rucksack1, rucksack2, rucksack3);
    if (match) total += getPriority(match);
  }

  return total;
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
