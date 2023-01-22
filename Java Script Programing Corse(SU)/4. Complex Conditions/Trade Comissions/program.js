const town = prompt("Enter the town name:");
const sales = parseFloat(prompt("Enter the sales amount:"));

const sofiaTown = "Sofia";
const plovdivTown = "Plovdiv";
const varnaTown = "Varna";

const isSmallerThanFiveHundred = sales >= 0 && sales <= 500;
const isSmallerThan1000 = sales > 500 && sales <= 1000;
const isSmallerThan10000 = sales > 1000 && sales <= 10000;
const biggerThan10000 = sales > 10000;

let comission = -1.0;

if (town == sofiaTown) {
  if (isSmallerThanFiveHundred) {
    comission = 0.05;
  } else if (isSmallerThan1000) {
    comission = 0.07;
  } else if (isSmallerThan10000) {
    comission = 0.08;
  } else if (biggerThan10000) {
    comission = 0.12;
  }
} else if (town == varnaTown) {
  if (isSmallerThanFiveHundred) {
    comission = 0.045;
  } else if (isSmallerThan1000) {
    comission = 0.075;
  } else if (isSmallerThan10000) {
    comission = 0.1;
  } else if (biggerThan10000) {
    comission = 0.13;
  }
} else if (town == plovdivTown) {
  if (isSmallerThanFiveHundred) {
    comission = 0.055;
  } else if (isSmallerThan1000) {
    comission = 0.08;
  } else if (isSmallerThan10000) {
    comission = 0.12;
  } else if (biggerThan10000) {
    comission = 0.145;
  }
}

if (comission < 0.0) {
  console.log("error");
} else {
  const result = sales * comission;
  console.log(result.toFixed(2));
}
