import { config } from "https://deno.land/std@v0.160.0/dotenv/mod.ts";
import type { Day, Year } from "./types.ts";

async function getInputData(year: Year, day: Day): Promise<string> {
  const env = await config();

  // fetch input data from url
  const response = await fetch(
    `https://adventofcode.com/${year}/day/${day}/input`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "text/plain; charset=utf-8",
        cookie: `session=${env.AOC_SESSION}`,
      },
    },
  );

  return response.text();
}

function validateArgs(args: string[]) {
  if (args.length !== 2) {
    console.error("Wrong number of arguments");
    return false;
  }

  const yearArg = Number(args[0]);
  const dayArg = Number(args[1]);

  if (isNaN(yearArg)) {
    console.error("Year argument is not a number");
    return false;
  }

  if (isNaN(dayArg)) {
    console.error("Day argument is not a number");
    return false;
  }

  if (yearArg < 2015 || yearArg > 2022) {
    console.error(`Year argument (${yearArg}) not in range (2015-2022)`);
    return false;
  }

  if (dayArg < 1 || dayArg > 25) {
    console.error(`Day argument (${dayArg}) not in range (1-25)`);
    return false;
  }

  return true;
}

async function createDayFolder() {
  const args = Deno.args;

  if (validateArgs(args)) {
    const year = <Year> <unknown> args[0];
    const day = <Day> <unknown> args[1];

    // create directory
    await Deno.mkdir(`./day${day}`);

    // get input data and write to file file
    const inputData = await getInputData(year, day);
    await Deno.writeTextFile(`./day${day}/input.txt`, inputData);

    // create .ts file from template in new directory
    const templateText = await Deno.readTextFile("./util/template.ts");
    const editedTemplateText = templateText.replace("{{day}}", `day${day}`);
    await Deno.writeTextFile(`./day${day}/main.ts`, editedTemplateText);
  }
}

createDayFolder();
