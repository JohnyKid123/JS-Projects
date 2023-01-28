let n = parseInt(prompt("Enter number of inputs"));

let d1 = 0, d2 = 0, d3 = 0, d4 = 0, d5 = 0;
for (let i = 0; i < n; i++) {
    let currentNumber = parseInt(prompt("Enter a number"));

    if (currentNumber < 200) d1++;
    else if (currentNumber < 400) d2++;
    else if (currentNumber < 600) d3++;
    else if (currentNumber < 800) d4++;
    else d5++;
}

console.log((d1 / n * 100).toFixed(2) + "%");
console.log((d2 / n * 100).toFixed(2) + "%");
console.log((d3 / n * 100).toFixed(2) + "%");
console.log((d4 / n * 100).toFixed(2) + "%");
console.log((d5 / n * 100).toFixed(2) + "%");
