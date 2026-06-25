//Meeting 7 Code Practice 2
console.log("Task Meeting 7 Code Practice 2");

const timelimit = 2;
const gameHours = [2, 2, 3, 3, 1, 4, 5];

let totalTime = 0;
let exceededCount = 0;

for (let i = 0; i < gameHours.length; i++) {
    totalTime += gameHours[i];

    if (gameHours[i] > timelimit) {
        exceededCount++;
    }
}

console.log(` total time Steve spent playing the game is ${totalTime} hours`);
console.log(`number of times he exceeded the game time limit : ${exceededCount} times`);
