let magic = parseInt(prompt("Enter a number"));

for (let n1 = 0; n1 < magic; n1++) {
  for (let n2 = 0; n2 <= magic; n2++) {
    for (let n3 = 0; n3 <= magic; n3++) {
      for (let n4 = 0; n4 <= magic; n4++) {
        for (let n5 = 0; n5 <= magic; n5++) {
          for (let n6 = 0; n6 <= magic; n6++) {
            if (n1 * n2 * n3 * n4 * n5 * n6 === magic) {
              console.log(n1 + "" + n2 + "" + n3 + "" + n4 + "" + n5 + "" + n6);
            }
          }
        }
      }
    }
  }
}
