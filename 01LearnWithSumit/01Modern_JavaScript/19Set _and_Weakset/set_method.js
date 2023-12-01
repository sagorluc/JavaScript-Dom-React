
function print(any){
    return console.log(any);
};

var arr   = []; // literal syntex array
var arr   = new Array()
var mySet = new Set()

// mySet.add(5);
// mySet.add('Bangladesh');
// mySet.add(5.23);
// mySet.delete(5.23);

mySet.add(6).add(8).add('Bangladesh').add(2.59).delete(8)
// mySet.add(6).add(8).add('Bangladesh').add(2.59).clear()

print(mySet.size);
print(mySet);
print(mySet.has(5.23));