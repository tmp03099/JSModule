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
}

//Have him eat five times.
for(let i = 0; i<5 ; i++){
    timmy.eat();
}
   
//Have him exercise five times
for(let i = 0; i<5 ; i++){
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

    // Add a constructor to dinner
    // sets the string properties, appetizer, entree and dessert
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }

}

//Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
class Chef{
    
    menu = [];
    
    setDinner(appetizer, entree, dessert){

        //returns a new Dinner based on those arguments.
        //* create an instance of dinner class
        const dinner = new Dinner(appetizer, entree, dessert);
        this.menu.push(dinner);
    }
 
}

const newDish = new Chef();

const firstDinner =  newDish.setDinner("Corn Bread", "Grilled Salmon Teriyakki", "Custard Ice Cream");

const secondDinner = newDish.setDinner("Seared Ahi Tuna", "Filer Mignon", "Cheese Cake");

const thirdDinner = newDish.setDinner("Meat Ball", "Smothered Chicken", "Flan");

// console.log(firstDinner);
console.log(newDish);



// A. Q + A
/*
1. How do we assign a value to a variable? let somevar = 10
    A. Using key word let and name variable to set your value with the assignment operator

2. How do we change the value of a variable? somevar = 12
    A. Select the variable and change to new value

3. How do we assign an existing variable to a new variable? let newvar = somevar
    A. Assign a new variable and assign the existing variable to new variable. 

4. Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
    A. Declare is create a new variable
    b. Assign is set a new value to a variable
    c. Define is decide a function

5. What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish

6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say
*/

