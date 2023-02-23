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

    let max = -9223372036854775807;
    for (let i = 0; i < n; i++) {
      rl.question('', (idInput) => {
        const id = parseInt(idInput);

        if (id > max && id <= upperBound) {
          max = id;
        }

        if (i === n - 1) {
          const sentenceTerm = (max < 0) ? -128 : 127;
          const sentence = Math.ceil(max / sentenceTerm);

          const yearsWord = (sentence === 1) ? "year" : "years";
          console.log(`Prisoner with id ${max} is sentenced to ${sentence} ${yearsWord}`);
          rl.close();
        }
      });
    }
  });
});
