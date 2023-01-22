console.log("n = ");
const n = parseInt(prompt("Enter the number of integers:"));
let sum = 0;

for (let i = 0; i < n; i++) {
  const num = parseInt(prompt("Enter an integer:"));
  sum += num;
}

console.log("sum = " + sum);
