const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (nInput) => {
  const n = parseInt(nInput);
  const ss = [];

  for (let i = 0; i < n; i++) {
    rl.question('', (symbol) => {
      ss.push(symbol);
      if (ss.length === n) {
        console.log("The word is: " + ss.join(''));
        rl.close();
      }
    });
  }
});
