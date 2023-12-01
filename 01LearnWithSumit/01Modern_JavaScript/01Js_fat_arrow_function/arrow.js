
// get/ catch the data from html
const searchInput = document.querySelector(".search"); // input box
const result = document.querySelector('.result'); // p tag catch by class
const thank = document.querySelector('.thanks'); // p tag catch by class

// normal function that works perfectly
function show() {
    
    result.innerHTML = this.value

    var self = this

    setTimeout(function() {
       
        thank.innerHTML = `You have type: ${self.value}`;
        
    }, 1000); // setTimeout tekes two perameter
};

searchInput.addEventListener("keyup", show) // input box call this addEventListener