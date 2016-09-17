/*Logical Operators

&& Returns true, if both operands are true
|| Returns true, if one of the operands is true
! Returns true, if the operands is false, and false, if the operand is true

*/


if((4>2) && (10<15) ){
document.write("true");
}
else{
document.write("false");
}

/*Ternary Conditional Operator

Syntax: variable =(condition)? value1:value2

*/
document.write("<br>");
var age = 20;
var isAdult=(age<18)? "Too young" : "Old Enough";

document.write(isAdult);

/*output

true
Old Enough

*/