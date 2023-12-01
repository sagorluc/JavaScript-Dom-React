// export import

import {pi, name, myFunction} from './extranal.js'; // named import
import * as test from './extranal.js'; // all import
import external from './extranal.js'; // default 

console.log(pi, name);
console.log(test);

myFunction();

console.log(external);