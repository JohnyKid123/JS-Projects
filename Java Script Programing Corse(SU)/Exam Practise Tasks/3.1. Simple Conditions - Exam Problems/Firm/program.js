let needTime = parseInt(prompt("Enter the needed time: "));
let days = parseInt(prompt("Enter the days: "));
let workers = parseInt(prompt("Enter the number of workers: "));
let firmdays = days*0.9;
let workHfirm = firmdays * 8 * workers;
let overtime = workers * firmdays * 2;
let totalFirmTime = Math.floor(workHfirm + overtime);
let diff = Math.abs(totalFirmTime - needTime);
if (needTime <= totalFirmTime) {
    console.log("Yes! " + diff + " hours left.");
} else {
    console.log("Not enough time! " + Math.ceil(diff) + " hours needed.");
}
