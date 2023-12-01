
// set union using spared operator

let a = new Set([1,2,3,4]);
let b = new Set([2,3,5,6,7]);

var union = new Set([...a, ...b]);

console.log(union);

// set intersection

var intersection = new Set([...a].filter( x => b.has(x)))
console.log(intersection);

// difference between two set
var difference = new Set([...a].filter( x => !b.has(x)))
console.log(difference);