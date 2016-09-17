function student(course,name){

	this.course=course;
	this.name=name;
}

var Kent = new student("CPE","Kent");

var Louis = new student("CS","Louis");


document.write(Kent.course + "\t" + Kent.name + "<br>");

document.write(Louis.course + "\t" + Louis.name );


/*Output

CPE	Kent
CS	Louis

*/