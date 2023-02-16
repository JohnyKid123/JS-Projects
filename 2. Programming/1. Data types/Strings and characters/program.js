const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first string: ', (a) => {
  rl.question('Enter the second string: ', (b) => {
    rl.question('Enter the third string: ', (c) => {
      rl.question('Enter the fourth string: ', (d) => {
        rl.question('Enter the fifth string: ', (e) => {
          console.log(a);
          console.log(b);
          console.log(c);
          console.log(d);
          console.log(e);
          rl.close();
        });
      });
    });
  });
});
