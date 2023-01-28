const n = parseInt(prompt("Enter a number: "));

for (let i = 0; i < n; i++) {
  document.write(".");
}
for (let i = 0; i < 3 * n; i++) {
  document.write("*");
}
for (let i = 0; i < n; i++) {
  document.write(".");
}
document.write("<br>");

for (let i = n - 1; i >= 1; i--) {
  printStandardRow(n, i);
}

for (let i = 0; i < 5 * n; i++) {
  document.write("*");
}
document.write("<br>");

for (let i = 1; i <= n * 2; i++) {
  printStandardRow(n, i);
}

for (let i = 0; i < 2 * n + 1; i++) {
  document.write(".");
}
for (let i = 0; i < n - 2; i++) {
  document.write("*");
}
for (let i = 0; i < 2 * n + 1; i++) {
  document.write(".");
}
document.write("<br>");

function printStandardRow(n, offset) {
  for (let j = 0; j < offset; j++) {
    document.write(".");
  }
  document.write("*");

  let middleFill = 5 * n - offset * 2 - 2;
  for (let j = 0; j < middleFill; j++) {
    document.write(".");
  }

  document.write("*");
  for (let j = 0; j < offset; j++) {
    document.write(".");
  }

  document.write("<br>");
}
