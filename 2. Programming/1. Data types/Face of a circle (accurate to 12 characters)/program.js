const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let n = parseFloat(answer);
  console.log(`${(n * n * Math.PI).toFixed(12)}`);
  rl.close();
});
