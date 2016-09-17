var isActive=true;
var isHoliday=false;

if(isActive){
document.write("<p>It's Active</p>");
}
else{
document.write("<p>It's Inactive</p>");
}

if(isHoliday){
document.write("<p>It's Holiday</p>");
}
else{
document.write("<p>Just Regular Day</p>");
}

/*Output

It's Active

Just Regular Day

*/

/*
The Boolean value of 0(zero),null,undefined,empty string is false.
Everything with a "real" value is true.
*/