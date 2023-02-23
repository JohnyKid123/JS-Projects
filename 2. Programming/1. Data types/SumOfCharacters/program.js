const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (n) => {
  let sum = 0;

  rl.question('', (line) => {
    for (let i = 0; i < line.length; i++) {
      sum += line.charCodeAt(i);
    }
    
    console.log(`The sum equals: ${sum}`);
    rl.close();
  });
});
