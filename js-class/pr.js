console.log(`%c --movie.belongs---- `, `color:yellow`);
// Create a new class
class Vehicle {

    constructor(vin, make, model, year) {
        this.vin = vin;
        this.make = make;
        this.model = model
        this.running = false;
        this.year = year;
    }

    // instance method: will start the vehicle
    start() {
        this.running = true;
        console.log("Vehicle running....");
    }

    toString() {
        return `Vehicle ${this.vin} is a ${this.make}, model ${this.model}.`
    }

    // static method
    static vehicleInfo() {
        console.log("Vehicle class...");
    }

}

//* create an instance of the Vehicle class
const car1 = new Vehicle("7rh47rh", "Honda", "civic", 1995);

const car2 = new Vehicle("72gry2g", "BMW", "m3", 2022);

console.log(car1);
console.log(car2);

//* calling an instance method of Vehicle
car1.start()

//* calling a static method of Vehicle
Vehicle.vehicleInfo()

console.log(car1.toString())

//* Create a subclass or extend a parent class
class Electric extends Vehicle {
    battery = 300
}

const car3  = new Electric();
console.log(car3);


// instance method
const color = []
// color.forEach()

// static method
Math.random();


console.log(`%c -- PLAYER CLASS WITH FEATURES---` , `color:red`);
// ? Declare a new class
class Player{

    //assign default variable - attached directly to class
    leg = 2;
    arm = 2;
    eyes = 2; 
    #hairColor
    health = 500;
    damage = 100;

    // ! constructor runs immediately when new instance is created
    // ? you can assign default value inside a constructor
    //create parameter inside the constructor that can pass in name, age, hair
    constructor(name,age,hairColor){
        this.name = name;
        this.age = age;
        this.#hairColor = hairColor;  //! "#" make the property is private
        // this is default value can assign with 
        this.isLoveTrue = true;
    }

    //instance method with default parameter
    greet(otherCharacter = "friend"){
        console.log(`Hello ${otherCharacter}`);
    }

    //instance method with no argument
    //set name by using this keyword
    attack(){
        console.log(`${this.name} is attacking`)
    }

    //instance method with 1 argument
    //set health level after damage
    takeDamage(damageLevel){
        this.health -= damageLevel;
        console.log(`${this.name} now has a health level of ${this.health}, and damage ${damageLevel}`);
    }

    // ! want to make anything change should make a method 
    // Set hair 
    setHair(newHairColor){
        this.#hairColor = newHairColor;
    }

    //get hair 
    getHair(){
        console.log(this.#hairColor);
        return this.#hairColor;
    }

}

//create an instance of Player class or 
// Initialize new mario Obj
const mario = new Player("Mario", 22, "black");
const luigi = new Player("Luigi", 35, "green");

// * set property values using dot notation
mario.damage = 90;

//* OR set property values using bracket notation
mario["damage"] = 70;


//call instance of Player class
mario.greet("Luigi");
luigi.greet(); //? default friend

mario.attack(); // Mario is attacking
luigi.attack(); // Luigi is attacking

console.log(`%c -- updated prop by method ---` , `color:yellow`);
mario.setHair("yellow");
// create newMarioHair property to keep the value getHair() from mario instance
const newMarioHair = mario.getHair();

//to check mario within Player class "True"
console.log(mario instanceof Player);


// TODO: Create a inheritance Friend child of Player parent class
class Friend extends Player{

    constructor(name, age, hair, ...skills){
        super(name, age, hair);
        this.skills = skills;
    }

    fly(){
        console.log(`${this.name} is flying....`);
    }

    //over writing function attack
    attack(){
        console.log("Fireball!!!!!!");
    }

    doubleAttack(){
        super.attack();
        this.attack();
    }
}

//create an instance of Friend class
const toad = new Friend("Toad" , 20, "mushroom", "builder","runner","power","rumble");

// TODO: Create a inheritance Enemy child class of Player parent class
class Enemy extends Player{

}
//create an instance of Enemy class
const bowser = new Enemy("Bowser" , 37, "red");



//printing
console.log(`%c -- mario---` , `color:yellow`);
console.log(mario);

console.log(`%c -- luigi---` , `color:yellow`);
console.log(luigi);

//new instace of Friend child class
console.log(`%c -- toad from Friend child class---` , `color:yellow`);
console.log(toad);

//new instace of Enermy child class
console.log(`%c -- Bowser from Enemy child class---` , `color:yellow`);
console.log(bowser);

//original attack() function
console.log(`%c -- original attack() function---` , `color:orange`);
mario.attack();

//over writting attack() function in Friend child class
console.log(`%c -- over writting attack() function in Friend child class---` , `color:orange`);
toad.attack();

// ? Used super keyword to access the attack() parent class
// ? b/c the attack() over writting in Friend child class
console.log(`%c -- doubleAttack() function with using Super keyword ---` , `color:orange`);
toad.doubleAttack(); //Toad is attacking used super keyword
                    // Fireball!!! used this keyword

                
const randomNum = Math.floor(Math.random() * 2);
if(randomNum < 1){
    bowser.takeDamage(mario.damage);
}else{
    luigi.takeDamage(bowser.damage);
}


//create an array to represent how many player have
// so use an array to hold the player 
// ? Create playerList as a container to hold player [arrays are container]
let playerList = [mario, luigi, toad, bowser];

//acessing the playerList array
console.log(`%c -- assessing player in array for property name---` , `color:yellow`);
console.log(playerList[1].name);

console.log(`%c -- assessing player in array for method---` , `color:yellow`);
console.log(playerList[2].getHair());

//loop the array print each player
console.log(`%c -- loop playerList array---` , `color:yellow`);
playerList.forEach((players) => {

    // ? can assess the method of class through the loop 
    // players.takeDamage(50);
    
    //printing list of player
    console.log(players);
});
