"use strict";
// for(let i=10; i>=0; i--) {
//     console.log(i + " is a cool number")
// }

let i = 10
while (i >= 5) {
    console.log(i)
    i--
}

function countdown(fromNumber) {
    console.log(fromNumber);
    if(fromNumber-1 > 0) {
        countdown(fromNumber-1)
    }
}
countdown(5);
