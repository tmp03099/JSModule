/* the difference between them is that function expressions cannot be invoked before they are defined; 
 whereas function declarations are hoisted to the top of their scope and can therefore be invoked even if
 they are defined later in the source code. 
*/

//hoisted function (function declearation) can call function any where
function add(a ,b){
    return a + b;
}

// ? unhoisted function (expression function) 
const addNum = function (a,b){
    return a + b;
}
// ? need to call function after declared function
console.log(addNum(10,10));

// ! arrow function need to call function after declared function
const addTwo = (a,b) => a + b;
console.log(addTwo(10,15));



// TODO: Ternary Operator
let isNightTime = true;
isNightTime ? console.log("a") : console.log("B");
//TODO


// * function with extra arguments
console.log('%c-----function with extra arguments----', 'color:yellow')

function getDevObject(name, lastName) {
    // ["Maria", "Smith" ,"html", "css", "js"]
    const skills = [];

    for (let i = 2; i < arguments.length; i++){
        skills.push(arguments[i])
    }

    return {
        devName: name,
        devLastName: lastName,
        jobSkills: skills
    }

}
const devObj = getDevObject("Maria", "Smith" ,"html", "css", "js", "react");
console.log(devObj);



// TODO: function with Rest arguments
console.log('%c-----function with rest arguments----', 'color:yellow')

function getDeObject(name, lastName, ...skills){

    return {
        getName: name,
        getLastName: lastName,
        getSkills: skills
    }
}
const deObj = getDeObject("Maria", "Smith" ,"html", "css", "js", "react");
// call deObj function and access the function just want to getName in the object
console.log(deObj.getName);





// ! EXERCISE 1: Write a Function Declaration

// ? Write a function named computeArea using the function declaration approach.

// ? It will have two parameters: width & height.

//? It will compute the area of a rectangle (width X height) and return a string in the following form:

// ? The area of a rectangle with a width of _ and a height of _ is ___ square units.
// ? Invoke the function to test it.

console.log('%c-----function----', 'color:yellow')

function computeArea(width, height){

    const area = width * height;

    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`);
}
console.log(computeArea(5,8));



//way2
console.log('%c-----function way 2----', 'color:yellow')

const computeAreas = (width,height) => {
    const areas = width * height;
    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${areas} square units`);
}
console.log(computeAreas(5,8));


// ! EXERCISE 2: Write a Function Expression

// Write a function named planetHasWater using the function expression syntax.

// It will have one parameter: planet.

// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.

// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

// Invoke the function a couple of times to test it!

console.log('%c-----function planet----', 'color:yellow')

const planetHasWater = (planet) => {
    planet = planet.toUpperCase();
    if (planet === "EARTH" || planet ==="MARS"){
        return true;
    }else{
        return false;
    }
}
console.log(planetHasWater("mars"));




// ? addList function
console.log('%c-----function addList----', 'color:yellow')

function addListMore () {

    let sum = 0;
     
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return(sum);

}
callAddList = addListMore(2,5,8);
console.log(callAddList);



//Ways 2
function addList(...number){

    let sum = 0;
    number.forEach(item => {
        sum += item;
    })
    return sum;
    
}
getAddList = addList(5,7,9);
console.log(getAddList);



// ! Add a key value pair to an object
// ADD CODE HERE 
const addWaldo = function(name){
    name.Waldo = 'unknown'
    
    return name
}
// Uncomment these to check your work!
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

// ! get value from key of an object
  // ADD CODE HERE
  const findWaldo = function(obj){
    let keys = Object.keys(obj);
      for(let i= 0 ; i< keys.length ; i++){

        // * get key and value 
        console.log(`${keys[i]}: ${obj[keys[i]]}`);

        if (keys[i] === "Waldo"){
            return obj.Waldo;
        }
    }
    return `Where's Waldo?`;
}
      
// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'


// ! count object value and returns an array filled with the numbers of elements
function arrayBuilder(obj) {
  // ADD CODE HERE
  let arr3 = [];

  
 for(let keys in obj){
    if(obj[keys] > 1){
        let i = 0;
      while(i < obj[keys]){ //run until i >= obj[keys]
        arr3.push(keys);
        i++;
      }
    }else{
      arr3.push(keys);
    }
 
  }
  return arr3
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []