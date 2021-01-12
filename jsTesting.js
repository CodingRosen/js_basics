practice();
function practice() {
    console.log("fn practice is starting...");
    var userTest = 100;
    userTest = morePractice(userTest);
    console.log(userTest);
    // Try to get an output in the 2nd function of 150, but you must use the fn practice to get to that value.
}

function morePractice(x) {
    console.log("fn morePractice now logging...");
    practiceTest = x * 1.5;
    return practiceTest;
}


// app();
// function app() {
//     console.log("starti app...")  
//         var x = userTest("hello ");
//         console.log(x);
// }ng


// function testInputPlus50(a) {
//     console.log("logging... testInputPlus50");
//     newInput = a + 50; // a is now 55;
//     return newInput;
// }



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