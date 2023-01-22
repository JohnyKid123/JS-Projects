const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter product: ', (product) => {
  rl.question('Enter city: ', (city) => {
    rl.question('Enter unity: ', (unity) => {
      unity = parseFloat(unity);
      if(city === "Sofia") {
        if(product === "coffee")
          console.log(0.50 * unity);
        else if(product === "water")
          console.log(0.80 * unity);
        else if(product === "beer")
          console.log(1.20 * unity);
        else if(product === "sweets")
          console.log(1.45 * unity);
        else if(product === "peanuts")
          console.log(1.60 * unity);
      } else if(city === "Plovdiv") {
        if(product === "coffee")
          console.log(0.40 * unity);
        else if(product === "water")
          console.log(0.70 * unity);
        else if(product === "beer")
          console.log(1.15 * unity);
        else if(product === "sweets")
          console.log(1.30 * unity);
        else if(product === "peanuts")
          console.log(1.50 * unity);
      } else if(city === "Varna") {
        if(product === "coffee")
          console.log(0.45 * unity);
        else if(product === "water")
          console.log(0.70 * unity);
        else if(product === "beer")
          console.log(1.10 * unity);
        else if(product === "sweets")
          console.log(1.35 * unity);
        else if(product === "peanuts")
          console.log(1.55 * unity);
         }
     
