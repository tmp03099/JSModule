// create a Cat class
class Cat{

    eyes = 2;
    tail = 1;
    leg = 4;
    high = 50;
    emotion = "cute";

    constructor(catName, sound, color){
        this.catName = catName;
        this.sound = sound;
        this.color = color;
    }


    call(){
        console.log(`${this.catName} call ${this.sound}`);
    }

    jumping(height){
        this.high += height;
        console.log(`${this.catName} can jump ${this.high} meter`);
    }

    emotional(){
        console.log(`${this.catName} will suppose to be ${this.cute} every time it's make trouble`)
    }


}

//create an instance of the cat class
const Lucci = new Cat("Lucci","MEO","brown");
const Lessi = new Cat("Lessi", "M...E...O", "yellow");

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
const pirate1 = new Pirate("pirate 1", "brown", "Sword");
const pirate2 = new Pirate("pirate 2", "black", "Gauntlet");
const pirate3 = new Pirate("pirate 3", "red","knife");

console.log(`%c -- capture()---` , `color:red`);
pirate1.capture(200);
pirate2.capture(50);
pirate3.capture(120);

console.log(`%c -- attack()---` , `color:yellow`);
pirate1.attack("Pirate", "Rumble");
pirate2.attack("Anabia", "Pirate");
pirate3.attack("Mango");

//create pirateship array with two intance 
const pirateShip = [pirate1, pirate2,pirate3];
const pirateShip2 = [pirate1, pirate2,pirate3];

console.log(`%c -- forEach pirateShip---` , `color:yellow`);
pirateShip.forEach(item => 
    console.log(item));

console.log(`%c -- list pirateShip---` , `color:yellow`);

console.log(pirateShip);

console.log(`%c -- list pirateShip2---` , `color:yellow`);

console.log(pirateShip2);