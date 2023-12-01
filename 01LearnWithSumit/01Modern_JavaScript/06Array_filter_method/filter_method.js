var numbers = [1,2,3,4,5,6,7,8,9,10]
var result = numbers.filter((curValue, curIndex, arr) => {
    console.log(curIndex)
    console.log(arr)
    return curValue > 4;
})

console.log(numbers);
console.log(result);
