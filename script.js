const passwordBox = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%(){}[]*-+/=~";

const allChars = upperCase + lowerCase + symbol + number ;

function createPassword(){
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];
    password = password + number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password = password + allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copy(){
    passwordBox.select();
    document.execCommand("copy");
}




