const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input1) => {
  rl.question('', (input2) => {
    let intPrice;
    let sbytePrice;
    if (!isNaN(parseInt(input1))) {
      sbytePrice = parseInt(input1);
      intPrice = parseInt(input2);
    } else {
      sbytePrice = parseInt(input2);
      intPrice = parseInt(input1);
    }
    const total = 10 * intPrice + 4 * sbytePrice;
    console.log(total);
    rl.close();
  });
});
