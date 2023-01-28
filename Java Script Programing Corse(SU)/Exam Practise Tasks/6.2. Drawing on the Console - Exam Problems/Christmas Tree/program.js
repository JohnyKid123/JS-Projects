const n = parseInt(prompt("Enter a number: "));

for (let i = 0; i <= n; i++) {
  printRow(i, n);
}

function printRow(stars, n) {
  let spaces = "";
  for (let i = 0; i < n - stars; i++) {
    spaces += " ";
  }

  let leftStars = "";
  for (let i = 0; i < stars; i++) {
    leftStars += "*";
  }

  let rightStars = "";
  for (let i = 0; i < stars; i++) {
    rightStars += "*";
  }
  
  console.log(spaces + leftStars + " | " + rightStars + spaces);
}
