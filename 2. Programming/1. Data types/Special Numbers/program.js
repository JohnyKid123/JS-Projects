let n = parseInt(prompt("Enter n:"));
for (let num = 1; num <= n; num++) {
  let sumOfDigits = 0;
  let digits = num;
  while (digits > 0) {
    sumOfDigits += digits % 10;
    digits = Math.floor(digits / 10);
  }
  let special = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
  console.log(num + " -> " + special);
}
