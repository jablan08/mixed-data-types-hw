// 1. Data Types
// Suppose you are tasked with creating some software, 
// and it is up to you to determine which datatypes
// and what data structure to use. For each of the 
// following, write which data types you would use to 
//represent the data, and then give a small example of the 
// data structure:

// A light switch that can be either on or off.
    // I would use a If else statement where if the light was on it 
    // would return true and if it was off it would return fasle.
    if (bright === true){console.log("The light is on!");}
// A user's email address.
    // I would hold the email address in a object as a string, just in case 
    // more information will be added later for that user.
    const user = {
        email: "wookie@gmail.com",
        name: "",
    };
// A spaceship with a hull, laser blasters, tractor beam, 
// and warp drive.
    // I would use a array to hold all the information of the spaceship
    const spaceship = ["hull", "laser blasters", " tractor beam", "warp drive"];
// A list of student names from our class.
    // I would store this in a array. 
    const students = ["Luke", "Maul"]
// A list of student names from our class, each with a location.
    // I would make this an object array.
    const student1 = {
        name: "Luke",
        location: "In the Force"
    };
// A list of student names from our class, each with a 
// location and each with a list of favorite tv shows.
    // I would still use an object similar to the one above.