function currencyConverter([arg1, arg2, arg3]) {
    let monetaryValue = Number(arg1);
    let inputCurrency = arg2;
    let outputCurrency = arg3;
    switch (inputCurrency) {
        case "USD": monetaryValue *= 1.79549; break;
        case "EUR": monetaryValue *= 1.95583; break;
        case "GBP": monetaryValue *= 2.53405; break;
    }
    switch (outputCurrency) {
        case "USD": monetaryValue /= 1.79549; break;
        case "EUR": monetaryValue /= 1.95583; break;
        case "GBP": monetaryValue /= 2.53405; break;
    }
    console.log(`${monetaryValue.toFixed(2)} ${outputCurrency}`);
}
