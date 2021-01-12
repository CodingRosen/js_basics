// Session 6 12/17/2020
    // Flow control review
// .txt, .js, .doc, etc. this called "file extensions"
//      they tell the OS what type of file it is and the OS will load it to the proper
//      application that is assigned e.g. doc will be loaded to MS Word

// We are going to use a JS Library - code availabe but not by default
// so we need to tell Node to include it at time of execution
//      Include JS Packages aka Libraries with NPM
//      NPM - Node Package Manager  
const { exit } = require('process');
var readline = require('readline');
var rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});



app();
function app() {
    console.log("starting session 6 app...");
    // Sales catalog
    //      Show items available
    //      user selections item and provide quantity
    // while(true){
                    // sync - blocking vs async - non-blocking
                    // Blocking meaning no other action is happening
                    // Not blocking - allow other actions to continue
    promptUser(); // promptUser runs sync while the r1.question method runs async
    console.log("after question promption but no answer from user");
    // }
}


function promptUser() {
     // the question method runs async
    rl.question(`
    Howdy, welcome to the Game Shop, please select a game you'd like to purchase: 
        1. Call of Duty
        2. Starcraft
        3. World of Warcraft
        4. Among Us
        5. To exit
    Enter your choice of 1-4: 
    `, function(gameChosen1) {  //34 gameChosen1 hold the user's response
        
            gameChosenRespond(gameChosen1); // line 36 and line 43 are connected
            rl.close();
        });
    
}


function gameChosenRespond(gameChosen2) {
    console.log('logging..gameChosen w/ arug ' + gameChosen2);
    switch (gameChosen2) { 
        case '2':
            console.log(' you chose 2')
            break;
        case '3':
            console.log(' you chose 3')
            break;
        case '1':
            console.log(' you chose 1' )
            break;
        case '4':
            console.log(' you chose 4')
            break;
        case '5':
            exit;
        default:
            console.log('we don\'t have that game');
    }

}



// function ex1Flow(){
//     var x = 10;
//     var y = 20;
//     console.log( ++x );
//     console.log( y );
//     y++; // after this line executes, y becomes 21
//     x = x + y; // 
//     console.log( x );
// }



// Ordering food
//      welcome the user - done
//      ask for drinks or food or both - done
//      prompt the correct menu - drinks, food, or both - done

//         bonus include error checking - also using trim method
// Ordering Food Example
// console.log("Welcome to Scooties Diner!");
// rl.question("Would you like food, drinks, or both?", function(answer) {
//     if(answer.trim() === "food") {
//         console.log("Well we have burgers, side items, and pizza if you're hungry");
//     } else if (answer.trim() === "drinks") {
//         console.log("Are you looking for alcohol or are you more of a soda person?");
//     } else if (answer.trim() === "both") {
//         console.log("We have a variety of combos you can purchase!");
//     } else {
//         console.log("That answer does not work, please try again");
//     }
//     rl.close();
//   });