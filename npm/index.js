var chalk = require("chalk");

var message = chalk.green("Hello ") + chalk.bgCyan.inverse.underline("World");
console.log(message);
