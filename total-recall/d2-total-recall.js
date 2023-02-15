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
        console.log(i,"FizzBuzz");
    }else if (i % 5 === 0 ){
        console.log(i,"Buzz");
    }else if (i % 3 === 0){
        console.log(i,"Fizz");
    }else{
        console.log(i);
    }
}


////////////////////////////////
//* Wild Wild Life
////////////////////////////////


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