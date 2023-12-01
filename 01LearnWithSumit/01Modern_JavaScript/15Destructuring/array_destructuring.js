var numbers = [1,2,3,5,6,7]

var [a, b] = numbers; // output 1 2
var [, , x, , y] = numbers; // output 3 6

console.log(a, b);
console.log(x, y);



var nums = [1,2,3,[10,45,68],7,9,15];

var [, , , [, c], , , d] = nums; // output 45 15

console.log(c,d);