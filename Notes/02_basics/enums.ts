// many times we just want to assign a specific value to a variable;
// we can use enums

enum SeatChoices {
    ASILE,
    MIDDLE,
    WINDOW
}

const seat = SeatChoices.ASILE;

// In the example above the ASILE will have a default value 0 and the other option would be 1 and 2
// we can override this. It can be
// enum SeatChoices {
//     ASILE = 10,
//     MIDDLE,
//     WINDOW
// }
// then asile would be 10 and middle 11, window 12
// Also, it can be
// enum SeatChoices {
//     ASILE = "asile",
//     MIDDLE = "middle",
//     WINDOW = "window"
// }

// you can also give 
// enum SeatChoices2 {
//     ASILE = 'asile',
//     MIDDLE = 2,
//     WINDOW
// }


// One thing to note, once the above code is complied, a immediately executible function gets generated.
// Generally we don't want our JS code to have complex code. 
// example of compiled code
/** 
"use strict";
var SeatChoices;
(function (SeatChoices) {
    SeatChoices[SeatChoices["ASILE"] = 0] = "ASILE";
    SeatChoices[SeatChoices["MIDDLE"] = 1] = "MIDDLE";
    SeatChoices[SeatChoices["WINDOW"] = 2] = "WINDOW";
})(SeatChoices || (SeatChoices = {}));
const seat = SeatChoices.ASILE;
 */
// this code is complicated. If we want to solve this issue then we can just add const before enum

/**

const enum SeatChoices {
    ASILE,
    MIDDLE,
    WINDOW
}

const seat = SeatChoices.ASILE;

 this code gives

"use strict";
const seat = 0 // SeatChoices.ASILE;

 */
