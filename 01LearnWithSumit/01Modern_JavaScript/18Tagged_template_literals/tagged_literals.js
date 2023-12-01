
function modifier(strings, ...values){
    
    // console.log(string); // output [ 'Balling, Bating ', ' and also Bating, Balling ', ' ' ]
    // console.log(values); // output [ 'Sakib al Hasan', 'Mahmudullah' ]

    var m = strings.reduce((previusVal, currentVal) => {
        
        return previusVal + currentVal + (values.length ? "Mr." + values.shift() : "");

    }, "");

    return m;


}   

var player1 = "Sakib al Hasan";
var player2 = "Mahmudullah";

console.log(modifier`Balling, Bating ${player1} and also Bating, Balling ${player2} `)