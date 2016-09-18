/*Array 2*/

var course = new Array(3); //declare array with size equal to 3.
var i = 1; //declaring the initial value for indexing the array.

//create a for loop that will execute 3 times to ask user input
for( i =1; i<=course.length; i++){

	course[i-1] = prompt("Enter number " +i);
}

for(i=0; i < course.length; i++){

	document.write("You've entered: " + course[i] + "<br>");
}

