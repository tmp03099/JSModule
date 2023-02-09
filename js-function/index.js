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
