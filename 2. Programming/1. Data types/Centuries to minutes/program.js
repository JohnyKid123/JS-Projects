const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number of centuries: ', (answer) => {
  let c = parseInt(answer);
  let y = 100 * c;
  let d = y * 365.2422;
  let h = 24 * d;
  let m = 60 * h;
  let s = 60 * m;
  console.log(`${c} centuries = ${y} years = ${d} days = ${h} hours = ${m} minutes`);
  rl.close();
});
