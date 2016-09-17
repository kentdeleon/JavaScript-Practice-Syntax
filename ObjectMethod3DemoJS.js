/*Object Method 3*/

/*You could also define the function outside of the constructor
function and associate it with the object. */

function person(name,age){
 this.name= name;
 this.age=age;
 this.yearOfBirth=bornYear;

}

function bornYear(){

 return 2016 - this.age;
}

var p = new person("Kent",24);
document.write(p.yearOfBirth());

/*Output

1992

*/