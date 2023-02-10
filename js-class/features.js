class Dog {
    // property declared outside constructor - attached directly to class
    age;
  
    // constructor runs immediately when new instance (an individual object)
    // is created
    constructor(name, likesWalks = true) {
      // creates property on instance and initializes it to name parameter
      this.name = name;
      // creates property on instance and initializes it to likesWalks parameter
      this.likesWalks = likesWalks;
    }
  
    // instance method that expects no arguments
    bark() {
      console.log("Woof!");
    }
  
    // instance methods that expect 1 argument
    wagTail(numWags) {
      console.log(
        `*${this.name} wags tail ${numWags} times and knocks over everything nearby with tail*`
      );
    }
  
    // instance method that expects 2 arguments
    chaseMailman(ripPantsCondition, distance) {
      console.log(
        `${this.name} chases the mailman ${distance} feet and rips his pants ${ripPantsCondition}`
      );
    }
  }
  
  // initialize new Dog object, provide argument
  let bowser = new Dog("Bowser", true);
  // set property values using dot notation
  // bowser.name = "Bowser";
  bowser.age = 6;
  // alternatively, with bracket notation
  bowser["age"] = 8;
  
  console.log("%c-------- Instance methods --------", "color: yellow;");
  // call instance methods on Dog instance
  bowser.bark();
  bowser.wagTail(5);
  bowser.chaseMailman("badly", 13);
  
  // create array to represent how many dogs you have at home
  // your home can be thought of as a container for dogs
  // so, we use an array to hold the dogs since arrays are containers
  let dogsInHome = [bowser, new Dog("Rufus", true), new Dog("Daisy")];
  
  console.log("%c-------- Accessing dogs in array --------", "color: yellow;");
  // make first dog bark
  dogsInHome[0].bark();
  // make second dog wag his tail
  dogsInHome[1].wagTail(3);
  
  console.log("%c-------- LOOP --------", "color: yellow;");
  // loop through dogsInHome array and use individual dog
  // for each iteration
  dogsInHome.forEach((dog) => {
    dog.chaseMailman("to shreds", 5);
  });