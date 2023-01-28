let days = parseInt(prompt("Enter number of days: "));

let doctors = 7;
let treatedPatients = 0;
let untreatedPatients = 0;

for (let i = 1; i <= days; i++) {
    if (i % 3 == 0 && (untreatedPatients > treatedPatients)) {
        doctors++;
    }

    let patients = parseInt(prompt("Enter number of patients for day " + i + ": "));
    if (patients <= doctors) {
        treatedPatients += patients;
    } else {
        treatedPatients += doctors;
        untreatedPatients += patients - doctors;
    }
}

console.log("Treated patients: " + treatedPatients + ".");
console.log("Untreated patients: " + untreatedPatients + ".");
