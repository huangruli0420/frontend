let theDigit = Math.ceil(Math.random()*100);

console.log(Math.random());

console.log(theDigit);

const input = document.querySelector("#input");
const digitText = document.querySelector("#digitText");
const btn = document.querySelector("#btn");

var botLimit = 1;
var topLimit = 100;

function guessDigit(){
    let guessedDigit = parseInt(input.value);
    console.log(guessedDigit)
    if(guessedDigit < botLimit || guessedDigit > topLimit){
        digitText.innerText = "請輸入" + botLimit + " - " + topLimit + "之間的整數";
    }
    else if(guessedDigit < theDigit){
        botLimit = guessedDigit
        digitText.innerText = botLimit + " - " + topLimit;
    }
    else if(guessedDigit > theDigit){
        topLimit = guessedDigit;
        digitText.innerText = botLimit + " - " + topLimit;
    }
    else if(guessedDigit == theDigit){
        digitText.innerText = "猜到了!";
        btn.style.opacity = 0.5;
        btn.disabled = true;
    }
}

btn.addEventListener("click", guessDigit)