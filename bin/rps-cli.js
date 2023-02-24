#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

let help = 
`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

let rules = 
`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`;

if (args.h || args.help) {
    console.log(help);
    process.exit(0);
}

if (args.r || args.rules) {
    console.log(rules);
    process.exit(0);
}

const shot = args._[0];
if (!shot) {
    console.log("no shot");
} else {
    try {
        console.log(`shot: ${shot}`);
    } catch (OUT_OF_RANGE_ERROR) {
        console.log("out of range error");
    }
}
