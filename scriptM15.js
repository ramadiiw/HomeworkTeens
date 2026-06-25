//Meeting 15  

var random = Math.floor(Math.random() * 10);
var adjectives = ["pretty", "happy", "brave", "clever", "silent", "strong", "funny", "cool", "gentle", "bright"];
var nouns = ["butterfly", "tiger", "lion", "panda", "monkey", "rabbit", "eagle", "dolphin", "dragon", "koala"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

var newUsername;
var newPassword;

function generate(option) {
    if (option === "1"){
        newUsername = adjectives[random] + nouns[random];
        console.log("--- Username Generated ---");    
        console.log(`Your New Username: ${newUsername}`);
        alert(`Your new Username: ${newUsername}`);

    }else if (option === "2"){
        var nounCapital = nouns[random].toUpperCase();
        var randomPassNumber = Math.floor(Math.random() * 10);

        newPassword = nounCapital + randomPassNumber + symbols[random];
        console.log("--- Password Generated ---");
        console.log(`Your new password: ${newPassword}`);
        alert(`Your new password: ${newPassword}`);
    }   
}
    
var userOption;

do {
    userOption = prompt("Choose an option:\n1. Generate Username\n2. Generate Password");
} while (userOption !== "1" && userOption != "2");

generate(userOption);
    
