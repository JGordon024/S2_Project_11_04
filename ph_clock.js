"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Jacob Gordon
   Date:  02/14/19

   Filename:   ph_clock.js     

*/
// Creates 4 variables, the first 2 are defining the amount of time that the minutes and seconds will have. The timeleft give the formula for how long to count down. Finally, the clockID is to be used to make the function work every second
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
var clockID = setInterval("countdown()", 1000);


// Creates the countdown function. It calls in another function for the minute and second strings.The minutes and seconds ID's in HTML are replaced with the 2 strings. 

function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    document.getElementById("seconds").textContent = secsString;
    document.getElementById("minutes").textContent = minsString;
    checkTimer();
    timeLeft--;
}
// Creates a function for the clock to stop the count down, once it ends text appears stating that the order has expired 
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', " <br />(Order Expired)");
    clearInterval(clockID);
}


/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}