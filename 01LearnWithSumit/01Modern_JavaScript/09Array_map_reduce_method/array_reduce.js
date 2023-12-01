var numbers = [1,2,3,4,5,6]
var initialValue = 0;
var res = numbers.reduce(function sum(previusValue, currentValue, currentIndex, arr){
    return previusValue + currentValue;
}, initialValue);

console.log(res); // sum of total value 21
console.log(numbers); // main array change hobe nah