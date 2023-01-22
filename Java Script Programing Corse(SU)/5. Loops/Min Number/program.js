console.log("n = ");
const n = parseInt(prompt("Enter the number of integers:"));
let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  const num = parseInt(prompt("Enter an integer:"));
  if (num < min) {
    min = num;
  }
}

console.log("min = " + min);
