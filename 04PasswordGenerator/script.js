
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const copyMessage = document.getElementById('copy');

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&'*+,-.:;<=>?@";


clipboardEl.addEventListener('click', () => {
    let str = document.getElementById('result');
    str.contentEditable = true;
    str.focus();
    document.execCommand('selectAll');
    document.execCommand("copy");
    str.contentEditable = false;
    copyMessage.innerHTML = '<i class="fa-solid fa-circle-check"></i> Password Copied';
});


generateEl.addEventListener('click', () => {
    let resultEl = document.getElementById('result');
    copyMessage.innerHTML = '';
    resultEl.innerHTML = "";
    let generatedPassword = "";
    let combinedPassword = "";
    let essentials = "";
    let otherThanEssentials = "";
    if (parseInt(lengthEl.value) > 0){
        if (symbolsEl.checked == true){
            essentials = `${getRandomSymbol()}${essentials}`;
            otherThanEssentials = `${otherThanEssentials}${symbols}`;
        }
        if (numbersEl.checked == true){
            essentials = `${getRandomNumber()}${essentials}`;
            otherThanEssentials = `${otherThanEssentials}${numbers}`;
        }
        if (lowercaseEl.checked == true){
            essentials = `${getRandomLower()}${essentials}`;
            otherThanEssentials = `${otherThanEssentials}${letters}`;
        }
        if (uppercaseEl.checked == true){
            essentials = `${getRandomUpper()}${essentials}`;
            otherThanEssentials = `${otherThanEssentials}${letters.toUpperCase()}`;
        }
    
        for (let i = 0; i < parseInt(lengthEl.value); i++) {
            combinedPassword += otherThanEssentials.charAt(Math.floor(Math.random() * otherThanEssentials.length));
        }
        combinedPassword = essentials + combinedPassword;
        generatedPassword += combinedPassword.substring(0, parseInt(lengthEl.value));
        resultEl.innerText = generatedPassword;
    }
    else{
        resultEl.innerHTML = "";
    }
});



function getRandomLower() {
    let randomLower = letters.charAt(Math.floor(Math.random() * 26));
    return randomLower;
}

function getRandomUpper() {
    let randomUpper = letters.charAt(Math.floor(Math.random() * 26));
    return randomUpper.toUpperCase();
}

function getRandomNumber() {
    let randomNumber = numbers.charAt(Math.floor(Math.random() * 10));
    return randomNumber;
}

function getRandomSymbol() {
    let randomSymbol = symbols.charAt(Math.floor(Math.random() * 20));
    return randomSymbol;
}