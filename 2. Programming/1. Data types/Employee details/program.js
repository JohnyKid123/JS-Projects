const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (a) => {
  rl.question('Enter your last name: ', (b) => {
    rl.question('Enter your age: ', (c) => {
      rl.question('Enter your gender: ', (d) => {
        rl.question('Enter your personal ID: ', (e) => {
          rl.question('Enter your unique employee number: ', (f) => {
            console.log(`First Name: ${a}`);
            console.log(`Last Name: ${b}`);
            console.log(`Age: ${parseInt(c)}`);
            console.log(`Gender: ${d}`);
            console.log(`Personal ID: ${parseFloat(e)}`);
            console.log(`Unique Employee number: ${parseFloat(f)}`);
            rl.close();
          });
        });
      });
    });
  });
});
