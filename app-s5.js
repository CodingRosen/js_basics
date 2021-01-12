app();
function app() {
    console.log("starting app...")
    // example 1
    // var userInput = 5;
    // userInput = testInputPlus50(userInput); // jump to line 9, executes lines 9-12; Then line 6;
    // console.log(userInput); // print the user input + 50 by invoking the fn testInputPlus50
    
    // example 2
    // changesValues();

    // example 3 
        // step 1 - create fn w/ 1 paramenter - line 57
        // step 2 - invoke the fn with 1 arg of "hello" - line 19
        // step 3 - add "world" to the arg in the fn - lines 58 to 60
        // step 4 - print the return that should be "hello world" - line 19 & 20;
        
       
        var x = userTest("hello ");
        console.log(x);
}
// example 1

// function testInputPlus50(a) {
//     console.log("logging... testInputPlus50");
//     newInput = a + 50; // a is now 55;
//     return newInput;
// }

// example 2
// function changesValues(){
//     console.log('logging...changesValues fn');
//     var a, b, c;
//     a = 5;
//     console.log(a); // 5
//     // b = ++a; // ++ increment by 1 this increments the actually variable itself
//     console.log(++a); // 6
//     console.log(a); // 5
//     // console.log(b); // ?
// }

// ++x increment the binary number by 1 this increments the actually variable itself
//      faster than x = x + 1
// var a = 5;
// console.log(a); // 5
// b doesn't matter in this example
// // b = ++a; // pre increment ++a; post increment a++;
// console.log(++a); // 6
// console.log(a); // 6
// console.log(a++) // 6 but after this line a = 7




// example 3
function userTest(a) {
    var b =  "world";
    c = a + world;
    return c;
};

// Concise
// function userTest(a) {
//     return a + "world";
// };