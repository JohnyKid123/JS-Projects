const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (first) => {
  rl.question('Enter your last name: ', (last) => {
    rl.question('Enter your age: ', (age) => {
      console.log(`Hello, ${first} ${last}. You are ${parseInt(age)} years old.`);
      rl.close();
    });
  });
});
