//Meeting 7 Code Practice 1
console.log("Task Meeting 7 Code Practice 1");

//task 1
console.log("--- Task 1: Print Name 20 Times ---");

for (let i=1; i <=20; i++) {
    console.log("i'm Steve");
}

//task 2
console.log("--- Task 2: Sequence 1-20 ---");

let sequence = "";
for (let i=1; i <=20; i++) {
    sequence += i + " ";
}
console.log(sequence.trim());

//task 3
console.log("\n--- Task 3: Multiples of 5 (5 to 100) ---");

let multiples = "";
for (let i=5; i <=100; i+=5) {
    multiples += i + " ";
}  
console.log(multiples.trim());