
var numbers = [1,2,3];

// var newNumbers = [numbers[0], numbers[1], numbers[2], 3,4,5];
// var newNumbers = [...numbers, 3,4,5]; // spread operator

var a = numbers; // same value in a variable as numbers and change the element in array

var b = [...numbers] // will never change the main array

var res = b.push(4,5,6)

// console.log(newNumbers);
// console.log(numbers);

console.log(numbers); // [ 1, 2, 3 ]
console.log(a); // [ 1, 2, 3 ]
console.log(b); // [ 1, 2, 3, 4, 5, 6 ]
console.log(res); // 6