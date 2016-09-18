/*Array3*/

/*
JavaScript Arrrays are dynamic, so you can declare an array and not pass
any arguments with the Array() constructor. You can then add elements dynamically.
*/

var course= new Array();

course[0] = "HTML";
course[1] = "CSS";
course[2] = "JavaScript";
course[3] = "PHP";
course[4] = "MySQL";

//create a for loop that will display values for array course from first to last index.
for (var i = 0;  i<course.length; i++){

	document.write(course[i] + "<br>");
}

document.write("<br>");

//create a for loop that will display values for array course from last to first index.
for (var i = course.length - 1 ; i>=0; i--){

	document.write(course[i] + "<br>");
}

/*
Output
HTML
CSS
JavaScript
PHP
MySQL

MySQL
PHP
JavaScript
CSS
HTML

*/