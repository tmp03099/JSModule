//create an object
const movies = {
    name: "thor",
    time: 120,
    belongs: ["disney", "adventure", "game"]
}

// ! access obj with loop
console.log(`%c --movie.belongs---- `, `color:yellow`);
for (let i = 0; i < movies.belongs.length ; i++){
    console.log(movies.belongs[i]);
}

//for of loop
console.log(`%c --for of loop---- `, `color:yellow`);
for (item of movies.belongs){
    console.log(item);
}

//for property
console.log(`%c --for prop---- `, `color:yellow`);
for(prop in movies){
    console.log(prop);
}

console.log(`%c --propName---- `, `color:yellow`);
const propName = "timePoint"
console.log("time" in movies);

//create a new property in movies obj
movies.cost = 1200000;

//create function  in movies obj
movies.costMovie = function(){
    console.log("cost!!!!");
}

//create a property using square brackets || movies.american
movies["american"]= {
    name: "Up",
    type: "Bat"
}

//create and push a new property array within an american obj
movies.american.belongs = ["grammy", "oscar"];

console.log(`%c --movies---- `, `color:yellow`);
console.log(movies);

console.log(`%c --call costMovie()---- `, `color:yellow`);
movies.costMovie();


//create an array of obj
const song = [
    {title: "I can hear you", minutes: 4},
    {title: "Hello", minutes: 3.45},
    {title: "Love", minutes: 3}
];
console.log(`%c --array of obj---- `, `color:yellow`);
console.log(song);
console.log(song[2].title);


//access array of obj with loop
console.log(`%c --loop array---- `, `color:yellow`);
for(let i = 0; i<song.length ; i++){
    console.log(song[i]);
    console.log(song[i].title);
}


//this keyword example
console.log(`%c --this keyword---- `, `color:yellow`);
const player = {
    playerName: "Ko",
    heath: 1000,
    power: 90,
    sayHi : function () {
        console.log("Hello " + this.playerName);
    }
}

player.sayHi();


//? ===============Exercise 1: ===========================
// * Make an object that represents a dog called myDog 
//which contains the properties name (a string), legs, tails and friends.

// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.

//Only change code below this line
const myDog = {
    name: "Lucci",
    legs: 4,
    tails: 1,
    friends: ["Lili", "Lucky" , "Popy", "Sandy"]
}
console.log(`%c --ex1---- `, `color:yellow`);
console.log(`myDog ${myDog}`);


//? ===============Exercise 2: ===========================
//* Setup
const testObj = {
hat: "ballcap",
shirt: "jersey",
shoes: "cleats"
};
// ? Assign each variable its corresponding value from the object
// ! MEANING: CREATE NEW VARIABLE TO HOLD THE VALUE OF A PROPERTY FROM THE OBJECT
//Only change code below this line
console.log(`%c --ex2---- `, `color:yellow`);

//assign the variable
const hat = testObj.hat;

const shirt = testObj.shirt ;

const shoes = testObj.shoes ;

console.log(hat);
console.log(shirt);
console.log(shoes);


//? ===============Exercise 3: ===========================
//* Read the values of the properties 'an entree' and 'the drink' of 
// * testObj2 using bracket notation and assign them to two new variables
// * entreeValue and drinkValue respectively.

// Setup
const testObj2 = {
"an entree": "hamburger",
"my side": "veggies",
"the drink": "water"
};

// Only change code below this line
console.log(`%c --ex3---- `, `color:yellow`);

//assign the variable
const entreeValue = testObj2["an entree"]
const drinkValue = testObj2["the drink"] 
console.log(entreeValue);
console.log(drinkValue);


//? ===============Exercise 4: ===========================
//* Set the playerNumber variable to 16. Then, use the variable to 
//* look up the player's name and assign it to player.

// Setup
const testObj3 = {
12: "Namath",
16: "Montana",
19: "Unitas"
};

// Only change code below this line
console.log(`%c --ex4---- `, `color:yellow`);

//set playerNumber hold key
const playerNumber = 16; // Change this line

//get the value of key (get name) in obj
const player2 = testObj3[playerNumber]; // Change this line

console.log(player2);


//* ===============Exercise 5: ===========================
// Update the myDog2 object's name property.
// Let's change her name from Coder to Happy Coder. 
// You can use either dot or bracket notation.

// Setup
const myDog2 = {
name: "Coder",
legs: 4,
tails: 1,
friends: ["freeCodeCamp Campers"]
};

// Only change code below this line
console.log(`%c --ex5---- `, `color:yellow`);
myDog2.name = "Happy Coder"
console.log(myDog2);


//* ===============Exercise 6: ===========================
//Add a bark property to myDog3 and set it to a dog sound, such as "woof".
// You may use either dot or bracket notation.

const myDog3 = {
name: "Happy Coder",
legs: 4,
tails: 1,
friends: ["freeCodeCamp Campers"]
};

// Only change code below this line
console.log(`%c --ex6---- `, `color:yellow`);
myDog3.bark = "woof";
console.log(myDog3);


//* ===============Exercise 7: ===========================
//Delete the tails property from myDog4. 
// You may use either dot or bracket notation.

// Setup
const myDog4 = {
name: "Happy Coder",
legs: 4,
tails: 1,
friends: ["freeCodeCamp Campers"],
bark: "woof"
};

// Only change code below this line
console.log(`%c --ex7---- `, `color:yellow`);
delete myDog4.tails
console.log(myDog4);


//* ===============Exercise 8: ===========================
// Add a new album to the myMusic array.
// Add artist and title strings, release_year number, 
// and a formats array of strings.

const myMusic = [
{
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
}
];

// Only change code below this line
console.log(`%c --ex8---- `, `color:yellow`);
const newAlbum = {
    artist: "Adele",
    title: "Hello",
    release_year: 2019,
    formats: ["CD","DIGITAL","LP"]
}

myMusic[1] = newAlbum;

console.log(myMusic);


//* ===============Exercise 9: ===========================
// Access the myStorage object and assign the contents of 
// the glove box property to the gloveBoxContents variable. 
// Use dot notation for all properties where possible, 
// otherwise use bracket notation.

const myStorage = {
car: {
    inside: {
    "glove box": "maps",
    "passenger seat": "crumbs"
    },
    outside: {
    trunk: "jack"
    }
}
};

// Only change code below this line
console.log(`%c --ex9---- `, `color:yellow`);
const gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents);


//* ===============Exercise 10: FINAL BOSS ===========================
// Using dot and bracket notation, set the variable secondTree
// to the second item in the trees list from the myPlants object.
// ! ASSIGN VARIBALE SECONDTREE TO HOLD THE SECOND ITEM FROM THE TREES LIST

const myPlants = [
{
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
},
{
    type: "trees",
    list: ["fir", "pine", "birch"]
}
];

// Only change code below this line
console.log(`%c --ex10---- `, `color:yellow`);

const secondTree = myPlants[1].list[1]
console.log(secondTree);


