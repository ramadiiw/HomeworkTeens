//Task 1  Meeting 5
console.log("Task Meeting 5");

//cek nilai -40
let number1 = -40;
let number2 = 50;
let number3 = 0;

function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive`);
    } else if (number < 0) {
        console.log(`${number} is negative`);
    }else {
        console.log(`${number} is zero`);
    }
}
checkNumber(number1);
checkNumber(number2);
checkNumber(number3);