const workDays = parseInt(prompt("Enter number of work days: "));
const wagePerDay = parseFloat(prompt("Enter wage per day: "));
const dollarRate = parseFloat(prompt("Enter dollar rate: "));

const monthlyWage = workDays * wagePerDay;
const incomePerYear = 14.5 * monthlyWage;
const taxes = 0.25 * incomePerYear;
const netIncome = (incomePerYear - taxes) * dollarRate;
const incomePerDay = netIncome / 365;

console.log(incomePerDay.toFixed(2));
