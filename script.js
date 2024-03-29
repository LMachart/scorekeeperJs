`use strict`

const button1 = document.querySelector("#ctr1")
let p1s = document.querySelector("#score1")
let score1 = 0

const button2 = document.querySelector("#ctr2")
let p2s = document.querySelector("#score2")
let score2 = 0

let reset=  document.querySelector("#reset")
let winner = document.querySelector("#winner")

button1.addEventListener("click", function(){
    let limit = document.querySelector("#limit").value;

    score1++;

    p1s.textContent = score1

    if(score1 == limit || (score1>score2 && score1>limit)){

        p1s.classList.add("green")
        button1.setAttribute("disabled", "true")
        button2.setAttribute("disabled", "true")

        printWinner()

    }
})

button2.addEventListener("click", function(){
    let limit = document.querySelector("#limit").value;

    score2++;

    p2s.textContent = score2

    if(score2 == limit || (score2>score1 && score2>limit)){

        p2s.classList.add("green")
        button1.setAttribute("disabled", "true")
        button2.setAttribute("disabled", "true")

        printWinner()
    }
})

reset.addEventListener("click", function(){
    
    button1.removeAttribute("disabled")
    button2.removeAttribute("disabled")
 
    p1s.classList.remove("green")
    p2s.classList.remove("green")

    score1 = 0
    score2 = 0

    p1s.textContent = score1
    p2s.textContent = score2

    document.querySelector("#limit").value = 5
    winner.textContent = ""
})

function printWinner(name){
    if (score1>score2){
        winner.textContent = "player1"
    }
    else{
        winner.textContent = "player2"
    }
}