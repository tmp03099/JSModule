class Hamster {
    constructor(name){
      this.owner = '';
      this.name = name;
      this.price = 15;
    }
    wheelRun(){
      console.log('squeak squeak');
    }
    eatFood(){
      console.log('nibble nibble');
    }
    getPrice(){
      return this.price;
    }
}

class Person{

    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`I am ${this.name} hello`);
    }

    eat(){
        this.weight ++;
        this.mood ++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount +=10;
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood +=10;
        this.bankAccount -=hamster.getPrice();
    }

}

// Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

// Age Timmy five years
for(let i = 0; i<5 ; i++){
    timmy.ageUp();

    //Have him eat five times.
    timmy.eat();

    //Have him exercise five times
    timmy.exercise();
}

// Age Timmy 9 years
for (let i = 0; i<9; i++){
    timmy.ageUp();
}

// Create a hamster named "Gus"
const gus = new Hamster("Gus");

// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

// Have Timmy "buy" Gus
timmy.buyHamster(gus);

//Age Timmy 15 years
for( let i = 0 ; i < 15 ; i++){
    timmy.ageUp();
}

// Have Timmy eat twice
timmy.eat();
timmy.eat();

// Have Timmy exercise twice
timmy.exercise();
timmy.exercise();

console.log(timmy);

//

class Dinner{

    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef{

    
}