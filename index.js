let num1 = 0;
let num2 = 0;
document.getElementById("result-home").textContent = num1
document.getElementById("result-guest").textContent = num1

let sumEl = document.getElementById("result-home")
function homeone(){
    num1 = num1 + 1
    sumEl.innerText = num1
}

function hometwo(){
    num1 = num1 + 2
    sumEl.innerText = num1
}

function homethree(){
    num1 = num1 + 3
    sumEl.innerText = num1
}

let sumEl2 = document.getElementById("result-guest")

function guestone(){
    num2 = num2 + 1
    sumEl2.innerText = num2
}

function guesttwo(){
   num2 = num2 + 2
    sumEl2.innerText = num2
}

function guestthree(){
   num2 = num2 + 3
    sumEl2.innerText = num2
}