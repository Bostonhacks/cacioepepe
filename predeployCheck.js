var colors = require("colors/safe");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  colors.red.bold(
    "Are you sure you know what you are doing? \nRishab said don't deploy if you don't know what you are doing 👀. [Y/N]"
  ),
  function(answer) {
    if (answer.toLowerCase().substring(0, 1) == "y") {
      process.exit(0);
    } else {
      console.log(
        colors.rainbow("This incident has been logged, deploy canceled ") + "😡"
      );
      process.exit(1);
    }
  }
);
