#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

let help = 
`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

let rules = 
`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
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