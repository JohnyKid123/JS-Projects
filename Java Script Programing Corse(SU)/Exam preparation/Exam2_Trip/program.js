const budget = parseFloat(prompt("Enter budget: "));
const season = prompt("Enter season (summer/winter): ");
if (season === "summer") {
  if (budget <= 100) {
    const price = 0.3 * budget;
    console.log("Somewhere in Bulgaria");
    console.log(`Camp - ${price.toFixed(2)}`);
  } else if (budget <= 1000) {
    const price = 0.4 * budget;
    console.log("Somewhere in Balkans");
    console.log(`Camp - ${price.toFixed(2)}`);
  } else if (budget > 1000) {
    const price = 0.9 * budget;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${price.toFixed(2)}`);
  }
} else if (season === "winter") {
  if (budget <= 100) {
    const price = 0.7 * budget;
    console.log("Somewhere in Bulgaria");
    console.log(`Hotel - ${price.toFixed(2)}`);
  } else if (budget <= 1000) {
    const price = 0.8 * budget;
    console.log("Somewhere in Balkans");
    console.log(`Hotel - ${price.toFixed(2)}`);
  } else if (budget > 1000) {
    const price = 0.9 * budget;
    console.log("Somewhere in Europe");
    console.log(`Hotel - ${price.toFixed(2)}`);
  }
}
