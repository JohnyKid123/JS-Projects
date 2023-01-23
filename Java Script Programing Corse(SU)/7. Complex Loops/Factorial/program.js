const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(n) {
    var num = 1;
    do {
        num = n * (num);
        n--;
    } while (n >= 1);
    console.log(num);
    rl.close();
});
