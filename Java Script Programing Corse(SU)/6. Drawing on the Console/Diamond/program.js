const n = parseInt(prompt("Enter a number:"));

let rowsCount, innerDashes;
if (n % 2 === 0) {
  rowsCount = n - 1;
  innerDashes = 0;
} else {
  rowsCount = n;
  innerDashes = -1;
}

let outerDashes = rowsCount / 2;

for (let i = 0; i < rowsCount; i++) {
  for (let j = 0; j < outerDashes; j++) {
    document.write("-");
  }

  document.write("*");
  for (let j = 0; j < innerDashes; j++) {
    document.write("-");
  }
  if (innerDashes >= 0) {
    document.write("*");
  }

  for (let j = 0; j < outerDashes; j++) {
    document.write("-");
  }

  document.write("<br>");

  if (i < rowsCount / 2) {
    outerDashes--;
    innerDashes += 2;
  } else {
    outerDashes++;
    innerDashes -= 2;
  }
}
