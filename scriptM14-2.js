//Meeting 14 Code Practice 2
function cmToMeter(cm) {
    var m = cm*0.01;
    return `${cm} cm is ${m} meter `;
}

function cmToKilometer(cm) {
    var km = cm / 100000;
    return `${cm} cm is ${km} km`;
}

function cmToMillimeter(cm) {
    var mm = cm * 10;
    return `${cm} cm is ${mm} km`;
}
	
console.log(cmToMeter(100));
console.log(cmToKilometer(150000));
console.log(cmToMillimeter(5));