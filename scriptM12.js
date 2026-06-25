//Meeting 12 Code Practice 2    
var area;
var circum;

function square(side) {
    area = side * side;
    circum = 4 * side;
    console.log('---Square-----');
    console.log(`Area : ${area}`);
    console.log(`Circumference : ${circum}`);
}

function rect(lenght, width) {
    area = lenght * width;
    circum = 2 * (lenght + width);
     console.log('---Rectangle-----');
    console.log(`Area : ${area}`);
    console.log(`Circumference : ${circum}`);
}