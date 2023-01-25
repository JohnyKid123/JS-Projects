const n = parseInt(prompt("Enter a number"));
const a = Math.floor(n / 100) % 10;
const b = Math.floor(n / 10) % 10;
const c = n % 10;

for (let i1 = 1; i1 <= c; i1++) {
    for (let i2 = 1; i2 <= b; i2++) {
        for (let i3 = 1; i3 <= a; i3++) {
            console.log(`${i1} * ${i2} * ${i3} = ${i1 * i2 * i3};`);
        }
    }
}
