const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let n = parseInt(answer);
  let numbers = new Array(2 * n);
  let totalLoss = 0;

  for (let i = 0; i < 2 * n; i++) {
    rl.question(`Enter number ${i + 1}: `, (answer) => {
      numbers[i] = parseInt(answer);
    });
  }

  for (let i = 0; i < 2 * n; i += 2) {
    let quotient = Math.floor(numbers[i] / numbers[i + 1]);
    let remainder = numbers[i] % numbers[i + 1];
    totalLoss += remainder;
  }

  console.log(totalLoss);
  rl.close();
});
