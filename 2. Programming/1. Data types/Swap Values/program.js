const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter two integers separated by a space: ", function(input) {
    let [a, b] = input.trim().split(" ").map(Number);

    console.log("Before:");
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    let temp = a;
    a = b;
    b = temp;

    console.log("After:");
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    rl.close();
});
