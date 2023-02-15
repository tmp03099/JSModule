////////////////////////////////
//* Easy Going
////////////////////////////////
console.log(`%c Write a for loop that will log the numbers 1 through 20`,`color:yellow;`);
for(let i = 1; i <= 20 ; i++ ){
    console.log(i);
}

////////////////////////////////
//* Get Even
////////////////////////////////
console.log(`%c Write a for loop that will log only the even numbers in 0 through 200`,`color:yellow;`);
for(let i = 0; i<=200; i+=2){
    console.log (i);
}

////////////////////////////////
//* Fizz Buzz
////////////////////////////////
// Write a javascript application that logs all numbers from 1 - 100. 
// If a number is divisible by 3 log "Fizz" . If a number is divisible by 5 log "Buzz" .
// If a number is divisible by 3 and 5 log "FizzBuzz" 
console.log(`%c ---Fizz Buzz---`,`color:yellow;`);
for(let i = 1; i<=100 ; i++){

    if (i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz");
    }else if (i % 5 === 0 ){
        console.log("Buzz");
    }else if (i % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}

////////////////////////////////
//* Wild Wild Life
////////////////////////////////
console.log(`%c ---Wild Wild Life---`,`color:yellow;`);

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "Gameboy";

console.log(wolfy);
////////////////////////////////
//* Yell at the Ninja Turtles
////////////////////////////////


////////////////////////////////
//* Methods, Revisited
////////////////////////////////


////////////////////////////////
//* Where is Waldo
////////////////////////////////


////////////////////////////////
//*  Excited Kitten
////////////////////////////////


////////////////////////////////
//*  Find the Median
////////////////////////////////