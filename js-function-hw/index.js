// 1. function declaration
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  console.log(maxOfTwoNumbers(3, 9));
  
// 2. function expression
const maxOfThree = function ( x, y, z){
  if (x > y && y > z){
    return x;
  } else if ( x < y && y > z){
    return y;
  }else{
    return z;
  }
}

let getMaxOfThree = maxOfThree ( 3,15,12);
console.log(`%c-- getMaxOfThree ---`,`color:yellow;`);
console.log(`Max of three is : ${getMaxOfThree}`);

// 3. function declaration isCharAVowel
function isCharAVowel(character){

    const vowel = ["a", "o", "e", "u", "i"];
    let isTrueAVowel = false;

  //inline function
  vowel.forEach(items =>{
    if((character.toLowerCase()) === items){
      isTrueAVowel = true;
    }
  })
  
  if (isTrueAVowel == true){
    return true;
  }else{
    return false;
  }
}

let checkAVowel = isCharAVowel("A");
console.log(`%c-- isCharAVowel ---`,`color:yellow;`);
console.log(`is Character a vowel: ${checkAVowel}`);

// 4. function expression sumArray
const sumArray = function (arr){

  let sum = 0;  
  for (let i=0; i<arr.length; i++){
    sum += arr[i];
  }  
  return sum;
}

let getSum = sumArray([2,4,5]);
console.log(`%c-- sumArray ---`,`color:yellow;`);
console.log(`Sum of Array is: ${getSum}`);

// 5. function declaration multiplyArray
function multiplyArray (arr){

  let multiply = 1;

  for(let i = 0; i <arr.length ; i++){
    multiply *= arr [i];
  }
  return multiply;

}
let getMultiply = multiplyArray([2,4,5]);
console.log(`%c-- multiplyArray ---`,`color:yellow;`);
console.log(`Multiple of Array is: ${getMultiply}`);


// 6. function expression numArgs
const numArgs = function(...arguments){
    return arguments.length;
}
let getNumArgs = numArgs(2,3,5,6,7,8,34,5,6,7);
console.log(`%c-- numArgs ---`,`color:yellow;`);
console.log(`Number of array is: ${getNumArgs}`);


// 7. function declaration reverseString
function reverseString(str){

  let stringHoder = "";
  for(let i = str.length - 1; i >= 0 ; i--){
    stringHoder += str[i];
    
  }
  return stringHoder;

}
console.log(`%c-- reverseString ---`,`color:yellow;`);
let getString = "rockstar";
console.log(`reverse string ${getString} is: ${reverseString(getString)}`);

// 8. function expression  longestStringInArray
const longestStringInArray = function(arr){

  let lengthStr = 0;
  //loop in a array
  for(let i = 0; i < arr.length ; i ++){

    //compare the default length with other length in Array
    if(lengthStr < arr[i].length){
      lengthStr = arr[i].length;

    }
  }
  return lengthStr;
  
}

console.log(`%c-- longestStringInArray ---`,`color:yellow;`)
let getLongestStringInArray = longestStringInArray(["Hello","How are you","Goodluck"]);
console.log(`The length of Longest String is: ${getLongestStringInArray}`);

// 9. function declaration stringsLonger
function stringsLonger(arr,numb){

  let getString = [];
  arr.forEach(item => {

    //check the length of string and the number;
    if (item.length > numb ){
      getString.push(item);    
       
    }
  })
  console.log(getString);
  

}
console.log(`%c-- stringsLonger---`,`color:yellow;`);
let getStringsLonger = stringsLonger(["Hi","How are you","Goodluck","Say"], 3);
