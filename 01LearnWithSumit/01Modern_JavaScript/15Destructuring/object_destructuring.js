
// create object / dectionary
var user = {
    id: 75,
    name : "sakib al hasan",
    age : 35,
    education : {
        degree : "Masters",
        collage : "Lion Nozrul Islam University"
    }
}

// object theke name ke ber kore ante hobe jeno onno kothao use korte pari
// general vabe amra kori

// var name = user.name
var name1 = user['name']
// console.log(name1);


// jodi amra destructuring user kori 

var {name} = user; // destructuring method
var {name: nam} = user; // destructuring method
console.log(name);
console.log(nam);

var {education: {degree: x}} = user;
var {education: {collage: c}} = user;
console.log(x);
console.log(c);

// jodi kono object er property missing thake then how to solve the error
var {education: {degree} = {} } = user; // blank/empty object rakhte hobe default vabe
console.log(degree) // undefined