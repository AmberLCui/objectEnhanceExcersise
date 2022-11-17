//Same keys and values
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
};

//Computed Property Names
//let favoriteNumber = 42;
//const instructor = {
  //  firstName: "Colt",
    //[favoriteNumber]: "That is my favorite!"
//};

//Object Methods
let instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//Create Animal
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;    
        }
    }
} 
