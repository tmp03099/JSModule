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



// // ADD CODE HERE
// let countDown = 10;
// for (let i = 10; i > 0 ; i--){
//   countDown--;
// }
// console.log(countDown);


let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if (bool){
    return (`Plans made with ${name} this weekend`);
  } else{
    return(`Everyone is busy this weekend`)
  }
}

// Uncomment these to check your work!
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."



function addN(arr, n){
  // ADD CODE HERE
  let newNum = 0;
  let arr2=[];
  
  for (let i = 0; i<arr.length ; i++){
    newNum= arr[i] + n;
    arr2.push(newNum);
    
  }
  return arr2;
  
} 

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]


function mergingElements(array1, array2){
  // ADD CODE HERE
  let sum = 0;
  let arr3 = [];
  if (array1.length > array2.length){
    for (let i= 0 ; i<array1.length ; i++){
      if (array2[i] == null ){
        sum = array1[i] + 0

      }else{
        sum  = array1[i] + array2[i];
      }
      arr3.push(sum);
    }
  }else{
    for (let i= 0 ; i<array2.length ; i++){
      sum = array1[i] + array2[i];
      arr3.push(sum);
    }
  }
  return arr3
};
// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4, 9, 10], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]



function mergingTripletsAndQuints(array1, array2) {
 // ADD CODE HERE
  let sum = 0;
  let arr3 = [];
  for (let i = 0 ; i<array1.length ; i++){
    if  ((array1[i] % 3 === 0) || (array1[i] % 5 === 0)){
    		sum = array1[i] + array2[i];
      	arr3.push(sum);
  	}else{
      arr3.push(array1[i]);
    }
  }
  return arr3;

}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]