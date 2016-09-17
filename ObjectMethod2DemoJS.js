/*Object Method*/


/*Methods are functions that are stored as object properties.

Use the following syntax to create an object method:

methodName: function(){code lines}

Access an object method using the following syntax:

objectName.methodName()

*/

/*A method is a function, belonging to an object. It can be referenced 
using this keyword. The this keyword is used a a reference to the 
current object, meaning that you can access the objects properties and 
methods using it. 

Defining methods is done inside the constructor function.
*/


function person(name,age){
 this.name=name;
 this.age=age;
 this.changeName = function(name){
 	this.name=name;
 }

}

var p = new person("Kent",24);
document.write(p.name + "\t" + p.age+"<br>");
p.changeName("Louis");
document.write(p.name + "\t" + p.age);


/*Output

Kent	24
Louis	24

*/

