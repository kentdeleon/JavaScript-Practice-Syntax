/*Date Object 3*/

/*
When a Date Object is created, a number of methods make it possible to perform operations on it

methods 			Description
getFullYear()     	Get the year
getMonth()			Get the month
getDate()   		gets the day of the month
getHours()     	    gets the hour
getMinutes()		gets the minutes
getSeconds() 	    gets the seconds
getMilliseconds()	gets the milliseconds

*/

function PrintTime(){

	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();

	document.body.innerHTML= hour+":"+min+":"+sec;
}

setInterval(PrintTime,1000);