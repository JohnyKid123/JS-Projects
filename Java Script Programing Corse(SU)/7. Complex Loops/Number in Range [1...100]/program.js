const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter a number in the range [1...100]:");
rl.on('line', (n) => {
  while(n < 1 || n > 100){
    console.log("Invalid Number!");
    rl.question("Enter a number in the range [1...100]:", (n) => {
      n = parseInt(n);
    });
  }
  console.log(`The number is: ${n}`);
  rl.close();
});
