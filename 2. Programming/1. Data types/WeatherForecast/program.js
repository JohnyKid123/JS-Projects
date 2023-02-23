const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", function(input) {
    if (parseInt(input) <= 127 && parseInt(input) >= -128) {
        console.log("Sunny");
    } else if (parseInt(input) <= 2147483647 && parseInt(input) >= -2147483648) {
        console.log("Cloudy");
    } else if (parseInt(input) <= 9223372036854775807 && parseInt(input) >= -9223372036854775808) {
        console.log("Windy");
    } else {
        console.log("Rainy");
    }
    rl.close();
});
