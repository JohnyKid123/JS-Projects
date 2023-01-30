const n = parseInt(prompt("Enter the number of elements: "));
let sum = 0;
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Enter a number: "));
    sum += num;
}
console.log(sum);
