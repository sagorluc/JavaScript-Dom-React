var JavaScript = {

    name: 'JavaScript', // attribute
    libery: ['React', 'Angular', 'Vue', 'Node'], // attribute
    printLiberys: function () {
        // var self = this
        // this.libery.forEach(function(a) {
        //     console.log(`${self.name} Love ${a}`);
        // });

        // use arrow function
        this.libery.forEach((a) => console.log(`${this.name} Love ${a}`));
    }, 

};

JavaScript.printLiberys();