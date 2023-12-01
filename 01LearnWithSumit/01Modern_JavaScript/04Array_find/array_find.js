// array.prototype.find

var numbers = [1,2,3,4,5,6,7,8,9];

var res = numbers.find(function(currentValue, curIndex, arr){
    // console.log(curIndex);
    // console.log(arr);
    return currentValue >= 8;
});

console.log(res);