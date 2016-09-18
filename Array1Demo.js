/*Arrays 1*/

//declaring an array method1

var course = new Array("HTML","CSS","JS");

//looping the array to output all the values inside it.
for(var x = 0; x<course.length; x++){

	document.write(course[x] + "<br>");
}

document.write(course[10]); //Output is undefined since there's no value on index 10