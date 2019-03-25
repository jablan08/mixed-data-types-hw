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
    // if (bright === true){console.log("The light is on!");}
// A user's email address.
    // I would hold the email address in a object as a string, just in case 
    // more information will be added later for that user.
    // const user = {
    //     email: "wookie@gmail.com",
    //     name: "",
    // };
// A spaceship with a hull, laser blasters, tractor beam, 
// and warp drive.
    // I would use a array to hold all the information of the spaceship
    // const spaceship = ["hull", "laser blasters", " tractor beam", "warp drive"];
// A list of student names from our class.
    // I would store this in a array. 
    // const students = ["Luke", "Maul"]
// A list of student names from our class, each with a location.
    // I would make this an object array.
    // const student1 = {
    //     name: "Luke",
    //     location: "In the Force"
    // };
// A list of student names from our class, each with a 
// location and each with a list of favorite tv shows.
    // I would still use an object similar to the one above.


//     2. Take it Easy
//  Make an array that holds all of the colors of the rainbow.
    const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
//  Write code that will access "blue" from the rainbow array.
    console.log(rainbow[4]);
//  Make an object that is called your name and holds the information about 
//  your favorite food, a hobby, the name of the town 
//  that you live in currently, and your favorite datatype.
    const joshua = {
        favFood: "Sushi",
        hobby: "Troubleshooter",
        town: "Ontario",
        favDataType: "Objects"
    };
//  Write code that will access your hobby from the object that you just created.
    joshua.hobby



// 3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// Use crazyObject to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);