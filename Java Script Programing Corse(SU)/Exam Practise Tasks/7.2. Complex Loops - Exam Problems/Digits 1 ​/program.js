let number = parseInt(prompt("Enter a number:"));

let firstDigit = Math.floor(number / 100) % 10;
let secondDigit = Math.floor(number / 10) % 10;
let thirdDigit = number % 10;
let rows = firstDigit + secondDigit;
let columns = firstDigit + thirdDigit;
let total = rows * columns;
let index = 0;

while (index < total) {
  if (number % 5 == 0) number -= firstDigit;
  else if (number % 3 == 0) number -= secondDigit;
  else number += thirdDigit;

  console.log(number + " ");

  if ((index + 1) % columns == 0) console.log();
  index++;
}
