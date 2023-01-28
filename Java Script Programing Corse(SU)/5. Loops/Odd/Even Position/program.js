let n = parseFloat(prompt("Enter a number: "));
let EvenSum = 0.0;
let OddSum = 0.0;
let EvenMin = Number.MAX_VALUE;
let OddMin = Number.MAX_VALUE;
let EvenMax = Number.MIN_VALUE;
let OddMax = Number.MIN_VALUE;

for (let i = 1; i <= n; i++) {
    let num = parseFloat(prompt("Enter number: "));
    if (i % 2 === 0) {
        EvenSum += num;
        if (num > EvenMax) {
            EvenMax = num;
        }
        if (num < EvenMin) {
            EvenMin = num;
        }
    } else {
        OddSum += num;
        if (num > OddMax) {
            OddMax = num;
        }
        if (num < OddMin) {
            OddMin = num;
        }
    }
}

if (n === 0) {
    console.log("OddSum=0,\nOddMin=No,\nOddMax=No\nEvenSum=0,\nEvenMin=No,\nEvenMax=No");
}
if (n === 1) {
    console.log("OddSum=" + OddSum + ",\nOddMin=" + OddMin + ",\nOddMax=" + OddMax + "\nEvenSum=0,\nEvenMin=no,\nEvenMax=no");
} else {
    console.log("OddSum=" + OddSum + ",\nOddMin=" + OddMin + ",\nOddMax=" + OddMax);
    console.log("EvenSum=" + EvenSum + ",\nEvenMin=" + EvenMin + ",\nEvenMax=" + EvenMax);
}
