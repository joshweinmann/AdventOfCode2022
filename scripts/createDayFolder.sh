#!/bin/bash

year=2021

deno run --allow-read --allow-env --allow-write --allow-net lib/createDayFolder.ts $year $1
