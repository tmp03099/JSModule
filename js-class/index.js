// create a Cat class
class Cat{

    eyesColor = "blue";
    tail = 1;
    high = 50;
    emotion = "CUTE";
    sound = "M...E...O"
    color = "yellow";

    constructor(catName){
        this.catName = catName;
    }


    call(){
        console.log(`${this.catName} call ${this.sound}`);
    }

    jumping(height){
        this.high += height;
        console.log(`${this.catName} can jump ${this.high} meter`);
    }

    emotional(){
        console.log(`${this.catName} will show ${this.emotion} face every time it's make trouble`)
    }


}

//create an instance of the cat class
const Lucci = new Cat("Lucci");
const Lessi = new Cat("Lessi");

console.log(`%c -- call()---` , `color:yellow`);
Lucci.call();
Lessi.call();

console.log(`%c -- jumping()---` , `color:yellow`);
Lucci.jumping(10);
Lessi.jumping(20);

console.log(`%c -- emotional()---` , `color:yellow`);
Lucci.emotional();
Lessi.emotional();

console.log(`%c -- Lucci---` , `color:yellow`);
console.log(Lucci);

console.log(`%c -- Lessi---` , `color:yellow`);
console.log(Lessi);




//create a Pirate class
class Pirate{

    assets = 10000;

    constructor(name, hairColor, weapon){
        this.name = name;
        this.hair = hairColor;
        this.weapon = weapon;
    }

    //Set name and weapon for each pirate
    //create method
    getWeapon(){
        console.log(`${this.name} have weapon is ${this.weapon}`)
    }

    capture(reward){
        this.assets += reward;
        console.log(`${this.name} capture has ${this.assets}`);
    }

    attack(ship1, ship2 = "Nightmare"){
       console.log(`${this.name} will attack ${ship1} ship and ${ship2} ship`);
    }

}

//create new instance
const pirate1 = new Pirate("Pirate 1", "Brown", "Sword");
const pirate2 = new Pirate("Pirate 2", "Black", "Gauntlet");
const pirate3 = new Pirate("Pirate 3", "Red","Club");
const pirate4 = new Pirate("Pirate 4", "Blue", "Spear");
const pirate5 = new Pirate("Pirate 5", "Yellow", "Crossbow");
const pirate6 = new Pirate("Pirate 6", "Black","Halberd");

console.log(`%c -- capture()---` , `color:red`);
pirate1.capture(200);
pirate2.capture(50);
pirate3.capture(120);

console.log(`%c -- attack()---` , `color:yellow`);
pirate1.attack("Pirate", "Rumble");
pirate2.attack("Anabia", "Pirate");
pirate3.attack("Mango");

//create pirate ship array with 3 pirates intance 
const jollyRoger = [pirate1, pirate2,pirate3];
const blackPearl = [pirate4, pirate5,pirate6];

console.log(`%c -- forEach jollyRoger ship---` , `color:yellow`);
jollyRoger.forEach(items =>{
    console.log(`Pirate Name: ${items.name} - Weapon: ${items.weapon} - Hair color: ${items.hair}`);
});

console.log(`%c -- forEach blackPearl ship---` , `color:yellow`);
blackPearl.forEach(item =>{
    console.log(`Pirate Name: ${item.name} - Weapon: ${item.weapon} - Hair color: ${item.hair}`);
});