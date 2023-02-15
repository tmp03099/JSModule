// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/* 
    1. How do we assign a value to a variable?
        A. With the assignment operator "=" 
    2. How do we change the value of a variable? 
        A. selecting the value and change it to new value.
    3. How do we assign an existing variable to a new variable? 
        A. Assign a new variable using the assignment operator - then using the assignment operator to assgin existing variable to new variable;
    4. Remind me, what are declare, assign, and define? 
        A. Declare is create a new avariable using key word let or var or const - Assign a new value to a variable - Define a function with block of code designed to perform a specific task.
    5. What is pseudocoding and why should you do it? 
        A.  Pseudocoding mean fake code. It is step-by-step description of an algorithm uses the simple English language text as it is intended for uncoding people easy understand. It is very detail and great template for programmer writting code. 
    6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
        A. 50%
*/

// B. Strings
console.log(`%c --- Strings ----`, `color:yellow;`);
    // 1. Create a variable called firstVariable
        let firstVariable;
    // 2. Assign it the value of the string "Hello World"
        firstVariable = "Hello World";
    // 3. Change the value of this variable to some number
        firstVariable = 9;
    // 4. Store the value of firstVariablein a new variable called secondVariable
        let secondVariable;
        firstVariable = secondVariable;
    // 5. Change the value of secondVariableto any string.
        secondVariable = "How are you";
    // 6. What is the value of firstVariable? A. undefined
        console.log(firstVariable);
    // 7.Create a variable called yourNameand set it equal to your name as a string. 
    // Then, write an expression that takes the string "Hello, my name is " and 
    // the variable yourNameso that it returns a new string with them concatenated.
        let yourName = "Phung";
        console.log (`Hello, my name is ${yourName}`);


// C. Booleans
console.log(`%c --- Booleans ----`, `color:yellow;`);
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false || false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The Farm
console.log(`%c --- The Farm ----`, `color:yellow;`);
    let animal = "cow";
    if (animal.toLowerCase() === "cow"){
        console.log("moooooo");
    }else{
        console.log("Hey! You're not a cow");
    }
    
// E. Driver's Ed
console.log(`%c --- The Driver's Ed ----`, `color:yellow;`);
    let age = 30;
    if(age >= 16){
        console.log("Here are the keys!");
    }else{
        console.log("Sorry, you're too young");
    }
//_____________________________________________________________






// II. Loops
console.log(`%c --- Loops ----`, `color:red;`);
// A. The Basics
    // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
    console.log(`%c --- from 0 to 10 ----`, `color:yellow;`);
    for (let i = 0 ; i <= 10 ;  i++){
        console.log(i);
    }
    //2. Write a loop that will print out all the numbers from 10 up to and including 400
    console.log(`%c --- from 10 up to and including 400 ----`, `color:yellow;`);
    for(let i = 10; i<= 400 ; i++){
        console.log(i);
    }

    //3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
    console.log(`%c --- starting with 12 and going no higher than 4000 ----`, `color:yellow;`);
    for ( let i = 12 ;  i < 4000 ; i+=3){
        console.log(i);
    }

// B. Get even
    // 1. Print out the numbers that are within the range of 1 - 100
    //2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    console.log(`%c --- even Number ----`, `color:yellow;`);
    for( let i = 1 ; i <= 100 ; i++){
        if(i % 2 === 0){
            console.log (`${i} is an even number`);
        }else{
            console.log(i);
        }
    }

// C. Give me Five
    // 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    // print out "I found a number. Three is a crowd" if the number is a multiple of three
    console.log(`%c --- multiple of five ----`, `color:yellow;`);
    for( let i = 3 ; i <=100 ; i ++){

        if( i % 5 === 0){
            console.log(`I found a ${i}. High five!`);
        }
        if (i % 3 === 0){
            console.log(`I found a ${i}. Three is a crowd!`);
        }

    }

// D. Savings account
    //1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    console.log(`%c --- sum number 1-10 ----`, `color:yellow;`);
    let sum = 0;
    for (let i = 1; i <=10 ; i++){
        sum += i;
    }
    console.log(`Your balance account $${sum} `);

    //2. You got a bonus! Your pay is now doubled each week. 
    // Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    console.log(`%c --- sum number 1-100 multiplied by 2----`, `color:yellow;`);
    let sumNumber = 0;
    for(let i = 1; i <=100; i++){
        sumNumber += i;
    }
    let multipleTwo = sumNumber * 2;
    console.log(`Your balance account $${multipleTwo} in it`);

//_____________________________________________________________








// III. Arrays & Control Flow
// A. Talk about it:
/*
    1. What are the things in an array called? A. An element
    2. Do Arrays guarantee those things will be in order? A. Does not guarantee order
    3. What real-life thing could you model with an array? A. A Library
*/

// B. Easy Does It
    // 1. Create an array that contains three quotes and store it in a variable called quotes
    let quotes = ["Your patience is your power", "Be Yourself", "Confident"];

// C. Accessing elements
console.log(`%c --- C. Accessing elements----`, `color:yellow;`);
    const randomThings = [1, 10, "Hello", true]

    // 1. How do you access the 1st element in the array? 
        randomThings[0];

    // 2.Change the value of "Hello"to "World"  
        randomThings[2] = "World";

    // 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log(); 
    //  A. Because we updated the value of the array 
        console.log (randomThings);

// D. Change values
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

    //1. What would you write to access the 3rd element of the array?
    ourClass[2];

    //2. Change the value of "Github" to "Octocat"
    ourClass[4] = "Octocat";

    //3. Add a new element, "Cloud City" to the array
    ourClass.push("Cloud City");

// E. Mix It Up

    const myArray = [5, 10, 500, 20]

    // Add the string "Aegon"to the end of the array. 
    //! push - end Array
    myArray.push ("Aegon");
    myArray.push ("Lovely");

    // Remove the 5 from the beginning of the array.
    //! shift - remove first element 
    myArray.shift();

    //Add the string "Bob Marley"to the beginning of the array.
    //! unshift - add first element 
    myArray.unshift("Bob Marley");

    // Remove the string of your choice from the end of the array.
    //! pop - remove end element 
    myArray.pop();

    //Reverse this array using Array.prototype.reverse() 
    // A. The array mutated. Mutate means the array changed itself. .reverse() return the reverse array
    myArray.reverse();
    console.log(`%c --- E. Mix it up---`, `color:yellow;`);
    console.log(myArray);

    
// F. Biggie Smalls
console.log(`%c --- F. Biggie Smalls---`, `color:yellow;`);
    const numb = 99;
    if (numb < 100){
        console.log(`Little number`);
    } else{
        console.log(`Big number`);
    }

// G. Monkey in the Middle
console.log(`%c --- G. Monkey in the Middle---`, `color:yellow;`);
    const inputNumber = 7;
    if (inputNumber < 5 ){
        console.log("Little Number");
    } else if(inputNumber > 10){
        console.log("Big Number");
    }else{
        console.log("Monkey");
    }


// H. What's in Your Closet?
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

console.log(`%c --- Your Closet---`, `color:yellow;`);
    // What's Kristyn wearing today?
    console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

    // Add "raybans"to her closet after "yellow knit hat".
    // ! Add a value in specific index array
    kristynsCloset.splice(6,0,"raybans");

    //modify this item to read "stained knit hat"instead of yellow.
    kristynsCloset[5] = "stained knit hat";

    // console.log(kristynsCloset);
    //Using bracket notation, access the first element in Thom's shirtsarray.
    thomsCloset[0];

    // access one item from Thom's pants array.
    thomsCloset[1][0];

    // access one item from Thom's accessories array.
    thomsCloset[2][1];

    //Log a sentence about what Thom's wearing
    console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]} !`);

    //Modify the name of his PJ pants to Footie Pajamas.
    thomsCloset[1][2] = "Footie Pajamas";
//_____________________________________________________________








// IV. Functions
console.log(`%c --- IV. Functions---`, `color:red;`);
// A.
    function printGreeting(name){
        return(`Hello there, ${name} !`);
    }
    console.log(printGreeting("Slimer"));
    
// B.
    function printCool(name){
        return (`${name} is cool`);
    }
    console.log(printCool("Captain Reynolds"));

// C.  
    // Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
    function calculateCube(num){
        let cube = Math.pow(num,3);
        return cube;
    }
    console.log(calculateCube(5));

// D.
    // Write a function isVowel
    function isVowel(char){
        const vowel = ["a","o","e","u","i"];

        let isTrue = false;
        vowel.forEach(items =>{
            if (char.toLowerCase() === items){
                isTrue = true;
            }
        });
        return isTrue;

    }

    console.log(isVowel("A"));

// E.
    // Write a function getTwoLengths that accepts two parameters (strings).
    function getTwoLengths(str, str2){

        // * return an array of the length of Strings
        //static form 
        return [str.length, str2.length];
    }

    console.log(getTwoLengths("Hank", "Hippopopalous"));

// F.
    // Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
    function getMultipleLengths(singleParameter){
  
        let arrNumber = [];

        singleParameter.forEach(items =>{
            //add value to array
            arrNumber.push(items.length);
        });
        //can change
        return arrNumber;
    }
    console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.
    // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them
    function maxOfThree(num1, num2, num3){
        
        if(num1 > num2 && num1 > num3){
            return num1;
        }else if(num2 > num1 && num2 > num3){
            return num2;
        }else{
            return num3;
        }
    }

    console.log(`%c --- maxOfThree---`, `color:yellow;`);
    console.log(maxOfThree(6, 9, 1));
// H.
    // Write a function printLongestWord that accepts a single argument, an array of strings
    console.log(`%c --- printLongestWord---`, `color:yellow;`);
    function printLongestWord(arg){

        let longestLength = 0;
        let longestString = "";

        arg.forEach(items =>{

            if (longestLength < items.length){
                longestLength = items.length;
                longestString = items;
            }

        });
        return longestString;

    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//_____________________________________________________________






// V. Objects
console.log(`%c --- Objects---`, `color:red;`);
// A.
    //Create an object
    const user = {
        name: "Lizz",
        email: "Lizz@gmail.com",
        age: 29,
        purchased: []
    }
// B.
    // update the email value to a new email address.
    // * access the object and change the value
    user.email = "Lizzlizz@gmail.com";

    // increment the agevalue using the postfix operator.
    user.age++;

// C.
    // Add a new key location to the object, and give it a value or some-or-other location (a string).
    // * Add new key pair value to the object
    user.location = "Pittsburgh";

// D.
    // Add the string "carbohydrates" to the purchasedarray.
    user.purchased.push("carbohydrates");
    // Add the string "peace of mind" to the purchasedarray.
    user.purchased.push("peace of mind");
    // Add the string "Merino jodhpurs" to the purchasedarray.
    user.purchased.push("Merino jodhpurs");

    console.log(`User purchased : ${user.purchased[2]}`);
// E.
    // * create a new object friend within existing object user
    user.friend = {
        name: "Grace Hopper",
        age: 85,
        location: "New York",
        purchased: []
    }

    console.log (`Friend name: ${user.friend.name}`);
    console.log (`Friend location: ${user.friend.location}`);

    // CHANGE the friend's age to 55
    user.friend.age = 55;

    //Add "The One Ring" to the friend's purchasedarray.
    user.friend.purchased.push("The One Ring");

    //Add "A latte" to the friend's purchasedarray.
    user.friend.purchased.push("A latte");

    console.log(`Friend purchased: ${user.friend.purchased[1]}`);
// F.
    // Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
    // * loop the purchased array inside user obj
    console.log("Each element of User Purchased : ");
    for(let i = 0; i < user.purchased.length ; i++){
        console.log(user.purchased[i]);
    }

    // Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
    console.log("Each element of Friend Purchased : ");
    for(let i = 0; i < user.friend.purchased.length ; i++){
        console.log(user.friend.purchased[i]);
    }

// G.
    // Write a single function updateUserthat takes no parameters.
    function updateUser(){
        user.age++;
        //updated userName
        user.name = user.name.toUpperCase();
    }

    // Write a function oldAndLoud that performs the exact same tasks as updateUser. with parameter person
    function oldAndLoud(person){
        person.age++;
        //updated userName
        person.name = person.name.toUpperCase();
    }

    oldAndLoud(user);

    console.log(user);
//_____________________________________________________________

// Extra
console.log(`%c --- Cat Combinator---`, `color:red;`);
// Mama Cat
const cat1 = {
    name: "Lozzi",
    breed: "Sphynx cat",
    age: 8
}

console.log(`cat1 age: ${cat1.age}`);

console.log(`cat1 breed: ${cat1.breed}`);

//PAPA cat
const cat2 = {
    name: "Popy",
    breed: "Burmese cat",
    age: 9
}

// Write a function combineCats that has two parameters mama, and papa.The function will take two arguments -- each a cat object.
function combineCats(mama,papa){
    let parentName = mama.name + papa.name;
    let parentBreed = mama.breed + "-" + papa.breed;

    let combineCatsObj = {
        name: parentName,
        age: 1,
        breed: parentBreed
    };
    return combineCatsObj;
}

console.log(combineCats(cat1, cat2));

//? way2 to combineCats function by writing the objects straight into the parentheses
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

//? two levels deep of combineCats.
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))); 

//? three levels deep of combineCats
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));