# Advent Of Code 2022
Solutions for Advent of Code 2022 using TypeScript with Deno.

A .env file needs to be in the root of the directory with AOC_SESSION set to your Advent of Code session id. This can be found in your cookies when on the Advent of Code website.

`AOCSESSION=abcd1234`

## Scripts

### Create New Day Folder

Creates a new folder for the given day in the root of the directory.

It includes:
- a boilerplate .ts file for solutions
- a .txt file with the input from the Advent of Code website.

`sh scripts/createNewDayFolder.sh {{dayNumber}}`

### Run Solution

Runs main.ts file for given day.

`sh scripts/checkAnswers.sh {{dayNumber}}`
