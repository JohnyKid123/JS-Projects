const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first string: ', (a) => {
  rl.question('Enter the second string: ', (b) => {
    console.log(`${a} ${b}`);
    rl.close();
  });
});
