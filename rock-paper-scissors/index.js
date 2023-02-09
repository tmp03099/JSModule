
// ---Rock, Paper, Siccors -----
console.log(`%c ---Rock, Paper, Siccors -----`, `color:yellow;`)

function randomGame(){
    let result =  Math.floor(Math.random()*3);
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
let userDices = randomGame();

let pcDices = randomGame();

let userChoice = convertGame(userDices);

console.log("userChoice", userChoice)

let pcChoice = convertGame(pcDices);
console.log("pcChoice", pcChoice)

if (userChoice === "paper" && pcChoice === "scissors"){
    console.log("PC WIN");

} else if (userChoice === "scissors" && pcChoice === "paper"){
    console.log("USER WIN");

}else if (userChoice === "paper" && pcChoice === "rock"){
    console.log("USER WIN");

}else if (userChoice === "rock" && pcChoice === "paper"){
    console.log("PC WIN");

}else if(userChoice === "scissors" && pcChoice === "rock"){
    console.log("PC WIN");

}else if(userChoice === "rock" && pcChoice === "scissors"){
    console.log("USER WIN");
    
}else{
    console.log("IT's DRAW");
}





