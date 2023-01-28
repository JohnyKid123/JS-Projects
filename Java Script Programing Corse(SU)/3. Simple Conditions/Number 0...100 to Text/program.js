const n = parseInt(prompt("Enter a number"));

const digits = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
const tens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
const rounds = [ "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

if (n < 0 || n > 100) { console.log("invalid number"); }
else if (n >= 0 && n <= 9) { console.log(digits[n]); }
else if (n >= 10 && n <= 19) { console.log(tens[n - 10]); }
else if (n >= 20 && n <= 99) {
    if (n % 10 == 0) { console.log(rounds[n / 10 - 2]); }
    else { console.log(rounds[n / 10 - 2] + " " + digits[n % 10]); }
} else { console.log("one hundred"); }
