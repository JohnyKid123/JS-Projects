const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a data type: ", function(type) {
    if (type === "int") {
        console.log(Number.MAX_SAFE_INTEGER);
        console.log(Number.MIN_SAFE_INTEGER);
    } else if (type === "uint") {
        console.log(4294967295);
        console.log(0);
    } else if (type === "long") {
        console.log(Number.MAX_VALUE);
        console.log(Number.MIN_VALUE);
    } else if (type === "byte") {
        console.log(255);
        console.log(0);
    } else if (type === "sbyte") {
        console.log(127);
        console.log(-128);
    }

    rl.close();
});
