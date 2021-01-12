

// a();
// b("hello");
// c();

// Parameter and Argument is the SAME just symantics 

function a() {
    console.log("fn a");

    var testArg = "test";
    console.log(testArg); // how get this value to be shared with fn b?
    b(testArg);
}

function b(testParam) {
    console.log("fn b");
    console.log(testParam);
}

function c() {
    console.log("fn c");
}



