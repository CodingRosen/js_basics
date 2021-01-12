//challenge #5 - for input of 3, print out a pattern in sequential order. Do the same for input of 5.

pattern();
function pattern() {
    console.log("Fn pattern is starting");
    rl.question(`
    Howdy, what kind of pattern are you looking for today? 
        1. Pattern of 3
        2. Pattern of 5
        3. Neither!
    Enter your choice 1-3:    
    `), function(patternChoice) { 
        while(true) {
            patternChoiceResponse(patternchoice);
        }
        rl.close();
    };
}

function patternChoiceResponse(patternChoice2) {
    console.log('logging...patternChoice')
}

// app();
// function app() {
//     console.log("starting session 6 app...");
//     // Sales catalog
//     //      Show items available
//     //      user selections item and provide quantity
//     rl.question(`
//     Howdy, welcome to the Game Shop, please select a game you'd like to purchase: 
//         1. Call of Duty
//         2. Starcraft
//         3. World of Warcraft
//         4. Among Us
//         5. To exit
//     Enter your choice of 1-4: 
//     `, function(gameChosen1) {  //34 gameChosen1 hold the user's response
//         while(true){
//             gameChosenRespond(gameChosen1); // line 36 and line 43 are connected
//         }
//         rl.close();
//     });
// }

// function gameChosenRespond(gameChosen2) {
//     console.log('logging..gameChosen w/ arug ' + gameChosen2);
//     switch (gameChosen2) { 
//         case '2':
//             console.log(' you chose 2')
//             break;
//         case '3':
//             console.log(' you chose 3')
//             break;
//         case '1':
//             console.log(' you chose 1' )
//             break;
//         case '4':
//             console.log(' you chose 4')
//             break;
//         default:
//             console.log('we don\'t have that game');
//     }

// }