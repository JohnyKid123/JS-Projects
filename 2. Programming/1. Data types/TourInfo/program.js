const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a metric value and unit: ", function(input) {
    let [originalMetricValue, originalMetric] = input.trim().split(" ");
    originalMetricValue = Number(originalMetricValue);

    let convertedMetric = "";
    let conversionRate = 0;

    if (originalMetric === "miles") {
        convertedMetric = "kilometers";
        conversionRate = 1.6;
    } else if (originalMetric === "inches") {
        convertedMetric = "centimeters";
        conversionRate = 2.54;
    } else if (originalMetric === "feet") {
        convertedMetric = "centimeters";
        conversionRate = 30;
    } else if (originalMetric === "yards") {
        convertedMetric = "meters";
        conversionRate = 0.91;
    } else if (originalMetric === "gallons") {
        convertedMetric = "liters";
        conversionRate = 3.8;
    }

    console.log(originalMetricValue.toFixed(2), originalMetric, "=", 
                (originalMetricValue * conversionRate).toFixed(2), convertedMetric);

    rl.close();
});
