var colors = require("colors/safe");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  colors.red.bold(
    "Are you sure you know what you are doing? \nThis deploys to production. [Y/N]"
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
