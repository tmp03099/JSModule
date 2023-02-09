typeof(15)
// Prediction:number
// Actual: 

typeof(5.5)
// Prediction:number
// Actual: 

typeof(NaN)
// Prediction:undefined
// Actual: number
console.log(typeof(NaN));

typeof("hello")
// Prediction:string
// Actual: 

typeof(true)
// Prediction:1
// Actual: 

typeof(1 != 2)
// Prediction: true
// Actual: 
console.log(typeof(1 != 2));

"Ostentatiou" + "s"
// Prediction: Ostentatious
// Actual:


"Facetious" - "s"
// Prediction: nan
// Actual:

"1" + "5"
// Prediction: 15
// Actual:

"1" - "5"
// Prediction: nan
// Actual:-4
console.log("1" - "5");

"ivory" + "5"
// Prediction:ivory5
// Actual:

"ivory" - "5"
// Prediction:
// Actual:NaN
console.log("ivory" - "5");

99 - "cheese rolling"
// Prediction:NaN
// Actual:
console.log(typeof(99 - "cheese rolling"));



// Uncomment the lines below to see examples of strings
// console.log('A string can be written inside of single quotes.');
// console.log("It can also be written inside of double quotes.");
// console.log(`Backticks work, too.`);

// ADD CODE BELOW
mySingleString = 'Phung';
myDoubleString = "you're the best";
myBackString = `congratulations`;

// Uncomment the line below to check your work!
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);


//JS SUM


var num1 = 9;

var num2 = 99;

var sum = num1 + num2;

var multiple = num1 * num2;

var divide = num2 / num1;

var total = sum + multiple - divide;

console.log("total " + total);

total += total * sum;

console.log ("final total " + total);


//JS AVG

var numAve1 = 1;
var numAve2 = 2;
var numAve3 = 3;
var numAve4 = 4;
var numAve5 = 5;
var numAve6 = 6;
var numAve7 = 7;
var numAve8 = 8;
var numAve9 = 9;
var numAve10 = 10;


var firstFiveAvg = (numAve1+ numAve2+ numAve3+ numAve4+ numAve5)/5;

console.log("first avg " + firstFiveAvg);

var secondFiveAvg = (numAve10+ numAve6+ numAve7+ numAve8+ numAve9)/5;
console.log("second avg " + secondFiveAvg);

var avg = (firstFiveAvg + secondFiveAvg) / 2;

console.log("final avg " + avg);


//JS Operation


let numb1 = 32;
let numb2 = 25;
let numb3 = 92;
let numb4 = 64;

numb1 +=17;
console.log("num1: " + numb1);

numb2 -=14;
console.log("num2: " +numb2);

numb3 *=11;

console.log("num3: " +numb3);

numb4 /=8;
console.log("num4: " +numb4);





//JS COMPARISON

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
const isSmaller = (small < large);

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
const isLooselyEqual = (num == string);
const isStrictlyEqual= (num === string);

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
const isTrueNotFalse = (isTrue !== isFalse);

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);

console.log("%c _____kevin weather ____ ","color:yellow");

// create a const variable name kelvin set forecast today is 293
const kelvin = 283;
// celcius less than kevlin 273;
let celsius = kelvin - 273;
//convert celsius to farenheit degree 
let fahrenheit = celsius * (9/5) + 32;
//round the number by Math.floor
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


console.log("%c ------human - dog year ", "color:yellow");
//Create variable name myAge
const myAge= 8;
// create earlyYears cause first two years of dog is 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;
//calculate lateryear by minus first 2 years 
let laterYears = (myAge - 2 );
// human each years will calculate by four years of dog
laterYears *= 4;
//Convert human age to dog age
let myAgeInDogYears = earlyYears + laterYears;
//Create your name and applied method to lower case
let myName = "ABC".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

console.log("%c ------2D array - dog year ", "color:yellow");

var arr = [[1,2], [3,4], [5,6]];

for (let i = 0; i<arr.length ; i ++){
    for(let j = 0; j<arr[0].length ; j ++){
        console.log(arr[j], "j");
        console.log(arr[i]);
    }
   
}



// ADD CODE HERE
for (let i = 10; i > 0 ; i--){
  countDown--
}
console.log(countDown);
