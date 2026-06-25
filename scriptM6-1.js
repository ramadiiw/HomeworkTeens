//Meeting 6 Task 1
console.log("Task Meeting 6 Code Practice 1");

var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

var operator = ['x', '+', '-', ':'];

var random = Math.floor(Math.random() * 4);
var choosenOperator = operator[random];

console.log(`angka pertama = ${num1}`);
console.log(`angka kedua = ${num2}`);
console.log(`operator yang dipilih = ${choosenOperator}`);
console.log("-------------------------------");

switch (choosenOperator) {
    case 'x':
        total = num1 * num2;
        console.log(total);
        break;
    case '+':
        total = num1 + num2;
        console.log(total);
        break;
    case '-':
        total = num1 - num2;
        console.log(total);
        break;
    case ':':
        total = num1 / num2;
        console.log(total);
        break;
}