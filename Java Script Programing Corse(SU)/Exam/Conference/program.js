let rent = parseInt(prompt("Enter the rent: "));
let caterring = rent * 2;
let drinks = 0.85 * caterring;
let gifts = (caterring + drinks) / 7;

let total = rent + caterring + drinks + gifts;
console.log(total.toFixed(2));
