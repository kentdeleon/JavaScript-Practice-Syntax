/*Array 6*/

/*
Associative Arrays

While many programming languages support arrays with named indexes(text instead of numbers)
called associative arrays, JavaScript does not.
However, you still can used the named array syntax, which will produce an object.
*/

var person =[] //empty array
person["name"] = "Kent";
person["age"] ="24";

document.write("My name is " + person["name"] + " I'm "+person["age"]+" years old");