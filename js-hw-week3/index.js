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

getMaxOfThree = maxOfThree ( 3,15,12);
console.log(getMaxOfThree);


  