const n = parseInt(prompt("Enter a number:"));
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
  let row = Array(startSegmentLength + 1).join(startSegmentChar) + "*" + Array(middleSegmentLength + 1).join(middleSegmentChar) + "*" + Array(5 * n - startSegmentLength - middleSegmentLength - 2 + 1).join("-");
  console.log(row);
}
