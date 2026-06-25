//Bonus Meeting 5
console.log("Bonus Meeting 5");

function checkPlayerPosition(x, y) {
    if (x > 0 && y > 0) {
        console.log(`Player at (${x}, ${y}) is on the top right`);
    } else if (x < 0 && y < 0) {
        console.log(`Player at (${x}, ${y}) is on the top left`);
    } else if (x > 0 && y < 0) {
        console.log(`Player at (${x}, ${y}) is on the bottom right`);
    } else if (x < 0 && y > 0) {
        console.log(`Player at (${x}, ${y}) is on the bottom left`);
    } else if (x == 0 && y == 0) {
        console.log(`Player at (${x}, ${y}) is at the middle`);
    } else {
        console.log(`Player at (${x}, ${y}) is on the axis`);
    }
}

//uji posisi player
checkPlayerPosition(5, 5);
checkPlayerPosition(-5, -5);
checkPlayerPosition(5, -2);
checkPlayerPosition(-5, 7);
checkPlayerPosition(0, 0);

