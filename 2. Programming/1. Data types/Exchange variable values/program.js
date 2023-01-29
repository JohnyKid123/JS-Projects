const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
  let a = parseInt(answer);
  rl.question('Enter another number: ', (answer) => {
    let b = parseInt(answer);
    console.log("Before:");
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log("After:");
    console.log(`a = ${b}`);
    console.log(`b = ${a}`);
    rl.close();
  });
});
