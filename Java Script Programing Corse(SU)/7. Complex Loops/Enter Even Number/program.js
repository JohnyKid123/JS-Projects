let number = parseInt(prompt("Enter even number: "));
while (number % 2 !== 0) {
  console.log("Invalid number!");
  number = parseInt(prompt("Enter even number: "));
}
console.log(`Even number entered: ${number}`);
