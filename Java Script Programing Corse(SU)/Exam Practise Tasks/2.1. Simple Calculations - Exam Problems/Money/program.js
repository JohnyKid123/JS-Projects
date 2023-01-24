const btc = parseInt(prompt("Enter the number of Bitcoins: "));
const cny = parseFloat(prompt("Enter the number of Chinese Yuan: "));
const commission = parseFloat(prompt("Enter the commission percentage: "));

const totalInLevs = btc * 1168 + cny * 0.15 * 1.76;
const total = (totalInLevs / 1.95) * (1 - commission * 0.01);
console.log(total);
