let n = parseInt(prompt("Enter a number: "));

let count = 0;
for (let i1 = Math.max(0, n - 9); i1 <= Math.min(9, n); i1++) {
    for (let i3 = 0; i3 <= 8; i3 += 2) {
        for (let i4 = 0; i4 <= 9; i4 += 9) {
            for (let i5 = 3; i5 <= 6; i5 += 3) {
                console.log(i1 + "" + (n - i1) + "" + i3 + "" + i4 + "" + i5);
                count++;
            }
        }
    }
}
console.log("Count of winner numbers: " + count);
