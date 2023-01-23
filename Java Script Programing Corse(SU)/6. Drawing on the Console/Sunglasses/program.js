const n = parseInt(prompt("n = "));

function printBorderRow(n) {
    let row = "";
    for (let i = 0; i < 2 * n; i++) row += "*";
    for (let i = 0; i < n; i++) row += " ";
    for (let i = 0; i < 2 * n; i++) row += "*";

    console.log(row);
}

function printMiddleRow(n, middleSymbol) {
    let row = "";
    row += "*";
    for (let i = 0; i < n * 2 - 2; i++) row += "/";
    row += "*";

    for (let i = 0; i < n; i++) row += middleSymbol;

    row += "*";
    for (let i = 0; i < n * 2 - 2; i++) row += "/";
    row += "*";

    console.log(row);
}

printBorderRow(n);
for (let i = 0; i < n - 2; i++) {
    if (i + 1 === (n - 1) / 2) printMiddleRow(n, '|');
    else printMiddleRow(n, ' ');
}
printBorderRow(n);
