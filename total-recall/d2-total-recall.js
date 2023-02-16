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

////////////////////////////////
//* Yell at the Ninja Turtles
////////////////////////////////
console.log(`%c ---Yell at the Ninja Turtles---`,`color:yellow;`);

const arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (item of arr){
    item = item.toUpperCase();
    console.log(item);
}

////////////////////////////////
//* Methods, Revisited
////////////////////////////////
console.log(`%c ---Methods, Revisited---`,`color:yellow;`);

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

for(let i = 0; i < favMovies.length ; i++){
    
    //favMovies[i] access the array for value of index i
    if (favMovies[i]  === "Titanic"){
        console.log(`index of Titanic is: ${i}`);
    }
}

favMovies.sort(); //sorts an array alphabet //didb't permanently

favMovies.pop();

favMovies.push("Guardians of the Galaxy");

favMovies.reverse(); //reverse the array

favMovies.shift(); //removes the first array element

favMovies.unshift("Up"); //add the first element to array

// splice"Django Unchained" and add "Avatar"
for(let i = 0; i < favMovies.length ; i++){
    
    //favMovies[i] access the array for value of index i
    if (favMovies[i]  === "Django Unchained"){
        favMovies.splice(i, 1, "Avatar");
    }
}

// slice the last half of the array
let halfLength = Math.ceil(favMovies.length / 2);
let sliceHalfArr = favMovies.slice(halfLength);
console.log(sliceHalfArr); 

console.log(`%c ---Final result---`,`color:yellow;`)
console.log(favMovies);

// console.log the index of "Fast and Furious" -We removed it from the array
for(let i = 0; i < favMovies.length ; i++){
    
    //favMovies[i] access the array for value of index i
    if (favMovies[i]  === "Fast and Furious"){
        favMovies.splice(i,1);
    }
}

// console.log(favMovies);
////////////////////////////////
//* Where is Waldo
////////////////////////////////
console.log(`%c ---Where is Waldo---`,`color:yellow;`)

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//remove Eggbert
whereIsWaldo.splice(1,1);

// Change "Neff" to "No One"
console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One";

// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
//*  Excited Kitten
////////////////////////////////
console.log(`%c ---Excited Kitten---`,`color:yellow;`)

const evenArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."]

for (let i = 1; i <=20 ; i++){
    if (i % 2 === 0){
        const randomNumber = (Math.floor(Math.random()*3));
        console.log(evenArray[randomNumber]);

    }else{
        console.log("Love me, pet me! HSSSSSS!");
    }
}

////////////////////////////////
//*  Find the Median
////////////////////////////////
//median is find the medium number of length array
console.log(`%c ---Find the Median---`,`color:yellow;`)

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//odd length
nums.sort(); // 

const midNums = Math.floor(nums.length/2);

let median = nums[midNums];

console.log(median);


//Hungry for More
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
//   Use that variable to add Kristyn's lost shoe to Thom's accessories array.
let kristynsShoe = kristynsCloset.splice(0,1); //? return array
thomsCloset[2].push(kristynsShoe[0]); //? push element so should kristynShoe[0]

console.log("kristynsCloset",thomsCloset);
// Modify your code to put together 3 separate outfits for Kristyn and Thom.
kristynsCloset.push("green Rayban glasses");
kristynsCloset.push("Nike shoe ");
kristynsCloset.push("Red dress");

thomsCloset[2].push("blue C glasses");
thomsCloset[0].push("jean jacket");
thomsCloset[2].push("C hat");

// loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for (items of kristynsCloset){
    console.log(`WHIRR: Now washing ${items}`);
}

// Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
console.log(`%c ---log Thom's arrays---`,`color:yellow;`)
console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);