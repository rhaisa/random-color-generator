var randomColor = require('randomcolor');

const color = randomColor({
  luminosity: process.argv[3S],
  hue: process.argv[2],
});

console.log(color);
const chalk = require('chalk');

console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('#########            ##########'));
console.log(chalk.hex(color).bold(`#########  ${color}   ##########`));
console.log(chalk.hex(color).bold('#########            ##########'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
console.log(chalk.hex(color).bold('###############################'));
