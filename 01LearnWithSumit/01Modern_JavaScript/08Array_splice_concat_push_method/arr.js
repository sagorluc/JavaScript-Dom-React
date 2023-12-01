// array.Prototype.splice

var numbers = [1,2,3,4,5]
var numbers1 = [6,7,8,9]
var numbers2 = [10,11,12,13,14]

var res = numbers.splice(1, 2, 10, 11, 12); // 3 perameter

console.log(numbers); // 1,10,11,12,4,5 main array change hobe
console.log(res); // 2,3


// array.Prototype.concat
var res1 = numbers.concat(numbers1, numbers2) // main array change hobe nah
console.log(res1);



// array.Prototype.push
var num = [1,2,3,4]

var re = num.push(5,6);
console.log(num); // 1,2,3,4,5,6 main array ke change kore
console.log(re); // 6
