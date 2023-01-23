const number = parseInt(prompt('Enter a number:'));
const sqrt = Math.sqrt(number);

let isPrime = number >= 2;
for (let i = 2; i <= sqrt && isPrime; i++) {
  if (number % i === 0) {
    isPrime = false;
  }
}

if (isPrime) {
  console.log('Prime');
} else {
  console.log('Not prime');
}
