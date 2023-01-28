const n = parseInt(prompt());

function printTop(n) {
    console.log('.'.repeat(n + 1) + '_'.repeat(2 * n + 1) + '.'.repeat(n + 1));
}

function printMiddleRow(n) {
    console.log('//' + '_'.repeat(2 * n - 3) + 'STOP!' + '_'.repeat(2 * n - 3) + '\\\\');
}

function printStandardRow(n, t, left, right) {
    console.log('.'.repeat(t) + left.repeat(2) + '_'.repeat(4 * n - 2 * t - 1) + right.repeat(2) + '.'.repeat(t));
}

printTop(n);
for (let i = n; i >= 1; i--) printStandardRow(n, i, '/', '\\');
printMiddleRow(n);

let start = 1;
if (n >= 100) start = 0;

for (let i = start; i <= n - 1; i++) printStandardRow(n, i, '\\', '/');
