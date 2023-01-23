const n = parseInt(prompt("Enter the height of the tree:"));

for (let i = 0; i <= n; i++) {
  printRow(i, n);
}

function printRow(stars, n) {
  let spaces = "";
  let asterisks = "";
  
  for (let i = 0; i < n - stars; i++) {
    spaces += " ";
  }
  for (let i = 0; i < stars; i++) {
    asterisks += "*";
  }

  console.log(spaces + asterisks + " | " + asterisks + spaces);
}
