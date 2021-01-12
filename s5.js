// 12-16-2020 Session 5
    // Reviewed S4
    //      vars declared vs init vs reassigned, !==, function w/ Args/parameters
    // More Function w/ Args
    // Fn calling another fn
    // app-s5.js took userInput into another fn, reviewed with Debugger
    // practice order of assignments and console.logs in app-s5.js
    // practiced pre and post increment - app-s5.js
    // example 3 in app-s5.js

console.log('test 5')

//  Example 1
// var a = 3;
// var b = 6;
// var x = 9;
// var y = 10
// // testingPara(a, b);
// testingParameters(a, b); // a = 3, b = 6
// testingParameters(x, y); // x = 9, y = 10

// function testingParameters(parm1, parm2) {
//     console.log("testing parameters fn");
//     testingPara();
// }

// function testingPara() {
//     console.log("testing para fn 2.0 - test");
// }

//  Example 2

var a = 5; // global scope variables are BAD!
var b = 6; // Typically we have Driver Class aka Main Class, in JS app.js
testParameters1();
function testParameters1() {
    // var x = 10;
    console.log(a + " " + b);
}
// console.log(x);

// create app.js or main.js