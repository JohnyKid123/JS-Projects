const heritage = parseFloat(prompt('Enter the heritage:'));
const year = parseInt(prompt('Enter the year:'));

let requiredMoney = 0;
for (let i = 1800; i <= year; i++) {
    requiredMoney += 12000;
    if (i % 2 !== 0) {
        requiredMoney += 50 * (18 + i - 1800);
    }
}

if (requiredMoney > heritage) {
    console.log(`He will need ${requiredMoney - heritage} dollars to survive.`);
} else {
    console.log(`Yes! He will live a carefree life and will have ${heritage - requiredMoney} dollars left.`);
}
