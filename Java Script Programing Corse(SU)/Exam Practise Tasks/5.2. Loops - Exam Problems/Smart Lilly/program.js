const n = parseInt(prompt("Enter a value for n"));
const half = n / 2;

for (let i = 0; i < n; i++) {
    printStandardRow(n, 3 * n, "-", i, "-");
}
for (let i = 0; i < half; i++) {
    printStandardRow(n, 3 * n, "*", n - 1, "-");
}
for (let i = 0; i < half - 1; i++) {
    printStandardRow(n, 3 * n - i, "-", n - 1 + i * 2, "-");
}
printStandardRow(n, 3 * n - half + 1, "-", n + half * 2 - 3, "*");

function printStandardRow(n, startSegmentLength, startSegmentChar, middleSegmentLength, middleSegmentChar) {
    console.log(startSegmentChar.repeat(startSegmentLength) + "*" + middleSegmentChar.repeat(middleSegmentLength) + "*" + "-".repeat(5 * n - startSegmentLength - middleSegmentLength - 2));
}
