/* Data Object 2 */

/*
The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute,
a second, and milliseconds.

Using new Date(), create a new date object with the current date and time.

*/


var d = new Date(); //d stores current date and time

document.write(d + "<br>");

/*
The other ways to initialize dates allow for the creation of new date objects 
from the specified date and time.

var d1 = new Date(milliseconds);
var d2 = new Date(dateString);
var d3 = new Date(year, month, day,	hours, minutes,seconds,milliseconds);
*/



var d1 =  new Date(86400000);
var d2 = new Date("September 18, 2016 8:02 PM");
var d3 = new Date(2016,8,18);
document.write(d1 + "<br>");
document.write(d2 + "<br>");
document.write(d3 + "<br>");