
function def1(...params){ // rest operator
    // console.log(arguments); // object return korbe { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    console.log(params); // array return korbe [ 1, 2, 3, 4, 5, 6 ]
}

def1(1,2,3,4,5,6); 


function def(a, ...params){
    // console.log(arguments); // object return korbe { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    console.log(a, params); // array return korbe [ 1, 2, 3, 4, 5, 6 ]
}

def(7, 1,2,3,4,5,6);  // 7 [ 1, 2, 3, 4, 5, 6 ]