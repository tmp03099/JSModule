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
            console.log(`${this.name} can drink`);
            return true;
        }else{
            console.log(`${this.name} can't drink due only ${this.age()} years old`);
            return false;
        }
    }
}



//PostalWorker inherit Person class
class PostalWorker extends Person{

    //create constructor for PostalWorker child use super keyword
    constructor(name, dob, job){
        super(name, dob, job);
    }

    citizen(state){
        return (`${this.name} is citizen of ${state}`);
    }

    // ? over writing the position method from parent class
    position(){
        if (this.job.toLowerCase() === "postal"){
            console.log(`${this.name} work in Postal Industry`);
            return true;
        }else{
            //call parent method
            console.log(super.position());
            return false;
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
            console.log(`${this.name} is chef `);
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
        return (`${this.name} is creativity Chef`);

    }
    
}

const Riana = new PostalWorker("Riana", "05/08/1985", "Postal");
console.log(Riana.position());

const Mina = new Chef ("Mina", "12/01/1878", "Chef", null, ["Knife", "Creativity", "Organization", "Cleanliness"] );
console.log(Mina.skillSet());