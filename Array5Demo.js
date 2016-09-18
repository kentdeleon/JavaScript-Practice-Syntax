/*Array 5*/

/*
Combining Arrays

JavaScript concat() method allows you to join arrays and create an entirely
new array.

*/


var c1=["HTML","CSS","JAVASCRIPT"];
var c2=["1", "2", "3"];

var c3 = c1.concat(c2); //combine two arrays c1 and c2 and store value to new array c3.



for(var i=0; i<c3.length; i++){

	document.write(c3[i]+"<br>");
}