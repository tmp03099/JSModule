// ---Rock, Paper, Siccors -----
console.log(`%c ---Rock, Paper, Siccors -----`, `color:yellow;`)

function randomGame(){
    const result =  Math.floor(Math.random()*3);
    return result;
}

function convertGame(numberInput){

    let userChoice = "";

    if (numberInput == 0){
        userChoice = "paper";
    }else if(numberInput == 1){
        userChoice = "scissors";
    }else{
        userChoice ="rock";
    }
    return userChoice;
}

// let userInput = prompt("What do you like (0: paper , 1: scissors, 2: rock)");
const userDices = randomGame();

const pcDices = randomGame();

const userChoice = convertGame(userDices);

const pcChoice = convertGame(pcDices);

console.log(`User choice: ${userChoice} --- PC choice: ${pcChoice}`);

if (userChoice === pcChoice){
    console.log("IT's DRAW");
} else if (userChoice === "scissors" && pcChoice === "paper"){
    console.log("USER WIN");
} else if (userChoice === "paper" && pcChoice === "rock"){
    console.log("USER WIN");
} else if (userChoice === "rock" && pcChoice === "scissors"){
        console.log("USER WIN");
}else{
    console.log("PC WIN");
}



// ! Way 2
console.log(`%c ---Rock, Paper, Siccors Way 2 -----`, `color:yellow;`)

const choice = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() *3);

let uChoice = "";
let isNotValid = true;

while (isNotValid){
    //ask user
    uChoice = prompt("");

    //convert their choice to match with condition
    uChoice = uChoice.trim().toLowerCase();

    if (uChoice === "rock" || uChoice === "paper" || uChoice ==="scissors"){
        isNotValid = false; //to  stop the loop
    }
}

