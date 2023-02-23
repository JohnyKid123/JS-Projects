const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let capacity = 0;
rl.question("Enter the number of times to fill the container: ", function(n) {
    for (let i = 0; i < n; i++) {
        let liters = parseInt(prompt("Enter the amount of liters to fill the container: "));
        
        let remainingCapacity = 255 - capacity;
        if (liters <= remainingCapacity) {
            capacity += parseInt(liters);
        } else {
            console.log("Insufficient capacity!");
        }
    }

    console.log(capacity);
    rl.close();
});
