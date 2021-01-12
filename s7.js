// 12/19/2020 - Session 7
    // Review of Sync/Async - Blocking/Non-blocking
    //      Readline question method running async
    // Reviewed Arrays & Loops
    // ArrayMethodsExamples
    // objects, creating them
    // practiced typeof
    // learned about the Constructor method
    // this, new, instanceof - the new keywords covered
    
//  What is an Array (the concept)? group of elements, ideally of the same data type
        // array of numbers or array of strings or arrays of objects
                //0         1   2       3           4       5       6   etc.
var myCars = ["Altima", "F150", "i550", "Accord", "Cami", "Civic", "Colorado", "Tacoma", "RAV4", "Rogue"];

// console.log(myCars);
// console.log(myCars[2]); //i550 

var car = {
    model: "Altima",
    type: "Sedan",
    brand: "Nissan",
    owner: {
        name: "steve",
        dob: 100501,
        year: 2005
    }
};

var person = {
    name: "steve",
    age: 85
}


// console.log(car);
// console.log(person);
// console.log(typeof car);
// console.log(typeof person);
// console.log(typeof "hello");

// What if I added a person object to the array cars? that's not okay; 
// myCars.push(person); BAD!!!

// Need to assign an object type of Car & Person properly
// use the new Keyword to show we are calling a Constructor fn to create a new object with a specific Type
var myAltima = new Car("Altima", "Sedan", "Nissan");


// console.log(myAltima);
// console.log(myAltima.brand);
// console.log(typeof myAltima);
// console.log(myAltima instanceof Car );
// console.log(person instanceof Car );

// Constructor - the proper way to create an Object
    // note the capital C in Car
function Car(model, type, brand){
    console.log('log...creating Car fn')
    // Every time we enter this function we create a single object of the type Car
    // Once we set the properties we return the instance
    
    // set the properties of this Object using the "this" keyword
    this.model = model;
    this.type = type;
    this.brand = brand;
    this.year = 2020;
};

console.log(new Person("Scott", "29"));
function Person(name, age) {
    console.log('log...creating Person fn')
    this.name = name;
    this.age = age;
    return this;
};

// create a person constructor

// var book = {
//     name: "Dylan Potty",
//     year: 1995,
//     author: "JKR"
// } --> in session 4

// Print out the array of cars 1 by 1 using a loop
//  include an "ID" for each car - just the index in the array i
// for(i = 0; i < myCars.length; i++) {
//     // use the display Function to print
//     // display(myCars);
// }


// function display(cars){
//     console.log("ID: " + (i+1) + " Car: " + cars[i]);
// }
// ID: 1 Car: Accord
// ID: 2 Car: Civic
// ID: 3 Car: RAV4
// ID: 4 Car: Tacoma
// ID: 5 Car: Rogue
// ID: 6 Car: Colorado
// ID: 7 Car: F150

// What are the 3 parts of a loop's ()?
//      1. initial variable value common the index of an array - var i = 0 or var i = 1,  
//      2. condition, i < 10; or i <= 10;
//      3. option - after each iteration - i++;
//      each separated by a ;


function arrayMethodsExamples(){
    // Built-in JavaScript Array Functions (like Strings have built in functions)
// console.log(myCars.includes("F150")); // true
// console.log(myCars.includes("f150")); // false
console.log(myCars.push("f150z", "f250", "f350")); // 
console.log(...myCars); // spread operator (not a fn), provides all the elements
var myFavoriteCar = myCars.pop(); // removes f350 from array and assigns it to the variable
console.log(myFavorite ); // prints f350
console.log(...myCars); // spread operator, provides all the elements

// Advanced topic - the forEach method
// Another way to loop through the elements of an Array 1 by 1 and still use the index
// myCars.forEach( function( element,  i) {
//         console.log(element + " " + (i+1));
// } );
}