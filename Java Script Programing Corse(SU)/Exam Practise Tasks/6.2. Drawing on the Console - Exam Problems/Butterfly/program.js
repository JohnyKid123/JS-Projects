const n = parseInt(prompt("Enter a number: "));

function printBody(n, isUpper) {
    for (let i = 0; i < n - 2; i++) {
        if (i % 2 === 0)
            printRow(n, '*', isUpper);
        else
            printRow(n, '-', isUpper);
    }
}

function printMiddle(n) {
    for (let i = 0; i < n - 1; i++)
        console.log(' ');
    console.log('@');
}

function printRow(n, c, isUpper) {
    for (let i = 0; i < n - 2; i++)
        console.log(c);

    if (isUpper) console.log("\\/");
    else console.log("/\\");

    for (let i = 0; i < n - 2; i++)
        console.log(c);

    console.log();
}

printBody(n, true);
printMiddle(n);
printBody(n, false);
