
var age = 11;
var type;

// if(age >= 18){
//     type = "He/She is adult";
//     console.log(type)
// }else{
//     type = "He/She is not adult";
//     console.log(type)
// }


// we can write it in one line by ternary operator
var type = (age >= 18) ? "adult" : "not adult";
console.log(type)


// nested ternary operator condition
var another = (age >= 18) ? 'He/She is adult' : (age < 10) ?
                                                "He/She is child" 
                                                : "He/She is not under 18"
            
console.log(another);