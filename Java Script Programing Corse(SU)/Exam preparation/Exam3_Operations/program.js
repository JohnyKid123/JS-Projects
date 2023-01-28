const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (a) => {
    rl.question("Enter another number: ", (b) => {
        rl.question("Enter a math operator (+, -, *, /, %): ", (mathOperator) => {
            if ((mathOperator === '/' || mathOperator === '%') && b === 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                console.log(`${a} ${mathOperator} ${b} = `);
                if (mathOperator === '/') console.log((a / b));
                else if (mathOperator === '%') console.log(a % b);
                else {
                    let result = 0;
                    if (mathOperator === '+') result = a + b;
                    else if (mathOperator === '-') result = a - b;
                    else if (mathOperator === '*') result = a * b;
                    console.log(result);
                    if (result % 2 === 0) console.log(" - even");
                    else console.log(" - odd");
                }
            }
            rl.close();
        });
    });
});
