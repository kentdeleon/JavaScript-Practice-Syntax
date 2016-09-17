/*Object Constructor and Create Sample Objects */

function person(name,age,color){

	this.name=name;
	this.age=age;
	this.color=color;
}

/*Above function(person) is an object constructor, 
which takes parameters and assign them to the object properties.*/


/*Note: This keyword refers to the current object.

Note that this is not a variable. It is a keyword, and its value
cannot be changed. 
*/



/*Once you have an object constructor, you can use the new keyword to create new objects of the same type.
*/

var p1 = new person("Kent",24,"blue");
var p2 = new person("Louis",23,"green");


document.write(p1.name +"\t" + p1.color);
document.write("<br>");
document.write(p2.name + "\t" + p2.color);

/*Output
Kent	blue
Louis	green

*/
