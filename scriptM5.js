//Task 1  Meeting 5
console.log("Task Meeting 5");

//cek nilai -40
let number1 = -40;
let number2 = 50;
let number3 = 0;

function checkAngka(angka) {
    if (angka > 0) {
        console.log(`${angka} is positive`);
    } else if (angka < 0) {
        console.log(`${angka} is negative`);
    }else {
        console.log(`${angka} is zero`);
    }
}
checkAngka(number1);
checkAngka(number2);
checkAngka(number3);
console.log();

//Task 2  Meeting 5
console.log("Task 2 Meeting 5");
let age = 17;

if (age >= 17) {
    console.log("Eligible to get a driver's license");
} else {
    console.log("Not eligible to get a driver's license");
}
console.log();

//Task 3  Meeting 5
console.log("Task 3 Meeting 5");
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
console.log();

//Task 4  Meeting 5
console.log("Task 4 Meeting 5");
let totalPayment = 200000;
let member = true;

if (member == true) {
    let discount = 0.10 * totalPayment;
    totalPayment = totalPayment - discount;
}else {
    console.log("Tidak Ada Diskon");    
}
console.log("Total Payment: " + totalPayment);
console.log();

//task 5  Meeting 5
console.log("Task 5 Meeting 5");
let chosenPlayer = "Knight";

if (chosenPlayer == "Knight") {
    console.log("Welcome, Knight the hero!");
} else if (chosenPlayer == "Wizard") {
    console.log("Welcome, Wizard the witch!");
} else {
    console.log("Welcome, Adventurer!");
}