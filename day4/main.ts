function getInput() {
  const inputText = Deno.readTextFileSync("./day4/input.txt").trim();
  return inputText.split("\n").map((pair) => {
    const [elfOne, elfTwo] = pair.split(",");
    const elfOneSections = elfOne.split("-");
    const elfTwoSections = elfTwo.split("-");

    return {
      elfOne: {
        start: Number(elfOneSections[0]),
        end: Number(elfOneSections[1]),
      } as Elf,
      elfTwo: {
        start: Number(elfTwoSections[0]),
        end: Number(elfTwoSections[1]),
      } as Elf,
    } as Pair;
  });
}

interface Pair {
  elfOne: Elf;
  elfTwo: Elf;
}

interface Elf {
  start: number;
  end: number;
}

function elfContains(elfOne: Elf, elfTwo: Elf, full?: boolean) {
  return full ? (
    elfOne.start <= elfTwo.start && elfOne.end >= elfTwo.end
  ) : (
    elfOne.start >= elfTwo.start && elfOne.start <= elfTwo.end
  );
}

function part1() {
  const pairs = getInput();
  let count = 0;

  for (const { elfOne, elfTwo } of pairs) {
    if (elfContains(elfOne, elfTwo, true) || elfContains(elfTwo, elfOne, true)) {
      count++;
    }
  }

  return count;
}

function part2() {
  const pairs = getInput();
  let count = 0;

  for (const { elfOne, elfTwo } of pairs) {
    if (elfContains(elfOne, elfTwo) || elfContains(elfTwo, elfOne)) {
      count++;
    }
  }

  return count;
}

console.log("Part 1:", part1());
console.log("Part 2:", part2());
