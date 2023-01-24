let n = parseFloat(prompt("Enter n"));
let n1 = 0;
let n2 = 0;
let n3 = 0;
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Enter number"));
    if (num % 2 === 0) n1++;
    if (num % 3 === 0) n2++;
    if (num % 4 === 0) n3++;
}
console.log((n1 / n * 100) + "%");
console.log((n2 / n * 100) + "%");
console.log((n3 / n * 100) + "%");
