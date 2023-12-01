

var numbers = [1,16,3,4,5,6,7,8,9,10]

var res = numbers.findIndex(function(curIdx, curVal, arr){
    return curVal %  2;
}, this)

console.log(res) // return korbe 1. that means true