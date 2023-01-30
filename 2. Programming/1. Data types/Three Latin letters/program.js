const n = parseInt(prompt("Enter a number: "));
const letters = [];
for (let i = 97; i < 97 + n; i++) {
  letters.push(String.fromCharCode(i));
}
const triples = [];
for (let a of letters) {
  for (let b of letters) {
    for (let c of letters) {
      if (a <= b || b <= c || c <= a) {
        triples.push(a + b + c);
      }
    }
  }
}
for (let triple of triples) {
  console.log(triple);
}
