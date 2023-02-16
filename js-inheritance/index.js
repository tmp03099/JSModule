class Governor{

    //static property be access directly outside class
    static state = "PA";

    //default property
    static name = "Tom Wolf";


    //static method be access directly outside class
    // * Only access with static property or function 

    static stateMethod(){
        return (`${this.name} is a Governer at ${this.state}`);
    }

}
console.log(Governor.state);
console.log(Governor.stateMethod());

//Inheritance Project
// Parent Class
class Person{

    //create constructor
    constructor(name, dob, job){
        this.name = name;
        this.dob = dob;
        this.job = job;
    }

    position(){
        return (`${this.name} is a/an ${this.job} person`);
    }
   

    age(){
        // calculate month diff from current date in time
        let monthDiff = Date.now()- new Date(this.dob).getTime();

        //convert the calculated diff in date format
        let ageDate = new Date(monthDiff);

        //extract year from date
        let year = ageDate.getUTCFullYear();
        
        //calculate the age 
        let userAge = Math.abs(year - 1970);

        return userAge;
    }

    canDrink(){

        if (this.age() >= 21){
            return (`${this.name} can drink`);
        }else{
            return (`${this.name} can't drink due only ${this.age()} years old`);
            
        }
    }
}



//PostalWorker inherit Person class
class PostalWorker extends Person{

    citizen(state){
        return (`${this.name} is citizen of ${state}`);
    }

    // ? overriding the position method from parent class
    position(){
        if (this.job.toLowerCase() === "postal"){
            return(`${this.name} work in Postal Industry`);
        }else{
            //call parent method
            return(super.position());
        }
    }


}

//Chef class inherit Person class
class Chef extends Person{
    //create constructor for PostalWorker child use super keyword
    constructor(name, dob, job, restaurant, skills ){
        super(name, dob, job);
        this.isChef = true;
        this.restaurant = restaurant;
        this.skills = skills;
    }

    checkRestaurant(){
        
        if (this.restaurant === null || this.restaurant === undefined || this.restaurant === ""){
            console.log(`${this.name} is ${this.job} `);
        } else{
            console.log(`${this.name} is chef and have ${this.restaurant} restaurant`);
        }

    }

    skillSet(){
        //assign the iscreative is false
        let iscreative = false;

        //loop the array by forEach
        this.skills.forEach(items =>{

            //compare each item with creativity string
            if(items.toLowerCase() === "creativity"){
                //set true if match condition
                iscreative = true;
            }
        });

        if(iscreative){
            console.log(`${this.name} is a creativity Chef`);
        }else{
            console.log(`${this.name} is ${this.job} `);
        }
        return iscreative;
        
    }
    
}

//PostalWorker
const riana = new PostalWorker("riana", "05/08/1985", "Postal");
const ryan = new PostalWorker("ryan", "02/09/2001", "HR");

console.log(`%c --Check citizen---` , `color:yellow;`);
console.log(riana.citizen("PA"));
console.log(ryan.citizen("CA"));

console.log(`%c --position---` , `color:yellow;`);
console.log(riana.position());
console.log(ryan.position());

//Chef

const mina = new Chef ("mina", "12/01/1987", "Chef", 2, ["Knife", "Creativity", "Organization", "Cleanliness"] );
const bob = new Chef ("bob", "12/01/1978", "Software Engineer", null, ["REACT", "HTML", "CSS", "JS"] );

console.log(`%c --Check Restaurant---` , `color:yellow;`);
mina.checkRestaurant();
bob.checkRestaurant();

console.log(`%c --Skills Check Creative---` , `color:yellow;`);
mina.skillSet();
bob.skillSet();

console.log(`%c --check age---` , `color:yellow;`);
console.log(bob.age());
console.log(riana.age());

console.log(`%c --check can Drink---` , `color:yellow;`);
console.log(mina.canDrink());
console.log(ryan.canDrink());