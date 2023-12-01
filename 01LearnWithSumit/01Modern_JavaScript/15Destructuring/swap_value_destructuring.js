var a = 5;
var b = 9;
console.log(a, b); // output 5 9

// old way to swap the value
var temp = a;
a = b;
b = temp;
console.log(a, b); // output 9 5

// Destructuring way to swap the value
var [b, a] = [a, b];
console.log(b, a)