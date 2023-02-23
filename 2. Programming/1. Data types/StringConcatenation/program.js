const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a separator: ", (separator) => {
    rl.question("Enter 'even' or 'odd': ", (evenOrOdd) => {
        rl.question("Enter a count n: ", (n) => {
            const concatenateOnEvenSteps = (evenOrOdd === "even");
            let result = "";
            
            for (let i = 1; i <= n; i++) {
                rl.question(`Enter string ${i}: `, (input) => {
                    const isEvenStep = (i % 2 === 0);
                    if (concatenateOnEvenSteps === isEvenStep) {
                        result += input + separator;
                    }
                    
                    if (i === n) {
                        result = result.slice(0, -1);
                        console.log(`Result: ${result}`);
                        rl.close();
                    }
                });
            }
        });
    });
});
