/* Data Object 1 */

/*
The setInterval() method calls a function or evaluates an expression
at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.

*/

function displayMessage(){

	document.write("Hello ");
}


setInterval(displayMessage,2000);

