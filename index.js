var randomColor = require('randomcolor');
const chalk = require('chalk');

const luminosity = process.argv[3];
const hue = process.argv[2];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

//console.log(color);

console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#########            ##########
#########  ${color}   ##########
#########            ##########
###############################
###############################
###############################`),
);
