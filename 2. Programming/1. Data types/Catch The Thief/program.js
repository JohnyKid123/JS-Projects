const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (type) => {
  rl.question('', (nInput) => {
    const n = parseInt(nInput);
    
    let upperBound = 0;
    if (type === "sbyte") upperBound = 127;
    else if (type === "int") upperBound = 2147483647;
    else if (type === "long") upperBound = 9223372036854775807;
    
    let max = -9223372036854775808;
    for (let i = 0; i < n; i++) {
      const id = parseInt(rl.readline());
      
      if (id > max && id <= upperBound) max = id;
    }
    
    console.log(max);
    rl.close();
  });
});
