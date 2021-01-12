console.log('Dylan Is Poopy - Session 4'); // prints to the terminal running

// Review
// var - keyword that means variable
var a, b, c, d, e, f, g, h, i; // declare variables
a = 10; // 10 to variable a - Number
b = "10";   // String
c = true;   // boolean
d = {};     // object 
e = null;   // null value but null is a typeof object...
// f        // undefined
g = (0/0)   // NaN typeof NaN is...Number 
h = []      // Array typeof Object
i = function() {};  // function 
i = "5"; // reassigning (not declaring or initializing since lines 5 & 14 do that )
// console.log( i );

var x = "hello";
console.log(x.length); // length is a property of the x string object, provide us how many characters in the string

// 5 == 5 returns true
// 5 === 5 returns true

// 5 == "5" returns true
// 5 === "5" return false ignores Type Cohersion -> Best practice!

// 5 != "5" = returns false because they are equal
// 5 !== "5" = returns true (best practice)
var userInput = 6;
if(userInput != "6") {
    // console.log('only print if userInput does not equal 6')
} else {
    // console.log('userInput does equal 6');
}


// Creating functions w/ Parameter
// some program code here
// user inputs 2 numbers 
// I need to sum these 2 numbers 
var addedNumbersReturnedValue = sumTwoNumbers(7, 3); 
// console.log( addedNumbersReturnedValue );
        // parameters = variables that another part of app can past its values here
function sumTwoNumbers(a, b) {
    // console.log('line 45')
    var sum = a + b;
    return sum;
}

// Can only define a function with the same name once! The last one written is saved
// var testingNewFunction = sumTwoNumbers(6, 5); // 1 
// function sumTwoNumbers(a, b) {
//     console.log('line 52');
//     var sum = a - b;
//      return sum;
//  }
// console.log(testingNewFunction);



// write more code for app
// now I need a function that multiple my number by 3
var userInput = 3;
var userMultiplier = 6;

var multiplyTwoNumbers = multiplyTwoNumbers(userInput, userMultiplier);
function multiplyTwoNumbers(a, b) {
    var multiplying = a * b;
    return multiplying;
}

// console.log(multiplyTwoNumbers);

// write a fn that increments my number by 1 aka plus 1

var inputNumber = 5;
inputNumber = testIncrement(inputNumber); // line 100 returns c here but is not assigned anything
// console.log(inputNumber);


function testIncrement(c) {
    c = c + 1; // add 1 to that number
    return c;
}


//  OBJECTS!!!!!

// var book = {} // {} means Object so this is a book object
// may look like a function but no fuction keyword
// I want to give this book a name, year, author
// object use key/value pair
var book = {
    name: "Dylan Potty",
    year: 1995,
    author: "JKR"
}

console.log(book);
// write code - now I need to show the user just the name of the book...
console.log("Title: " + book.mena);

// different part 
console.log("The year is: " + book.year);

//  last part
console.log(book.author);

// create any object with 2 properties

var steven = {
    name: "Steven",  
    nickname: "ehh",
    orientation: "not sure" 
}

// console.log(steven.name);
// console.log(steven.nickname);
// console.log(steven.orientation);

console.log(steven.name + " is kinda cool, but sometimes he's " + steven.nickname + ". " + "Sometimes I'm " + steven.orientation + " if he's straight or not.");

// Challenge 5
// var input = ?; // could be 5, 3, 11, etc.
function challenge5() {
    // write here with console.log, no need to return
}