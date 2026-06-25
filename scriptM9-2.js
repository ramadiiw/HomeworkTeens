//Meeting 9 Code Practice 2
console.log("Task Meeting 9 Code Practice 2");

const expectedNumber = 5;
let randomNumber;

do {
    randomNumber = Math.floor(Math.random() * 11);
    console.log(`Generated number: ${randomNumber}`);

} while (randomNumber !== expectedNumber);
console.log("----- Task Completed: Expected number generated! ---");
console.log(`Succsess! The Program Stopped because the number is ${expectedNumber}`);