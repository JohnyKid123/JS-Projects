const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input) => {
  if (input.includes('.')) {
    console.log("floating-point");
  } else {
    console.log("integer");
  }
  rl.close();
});
