let x = true;
let y = true; 
let z = false;
let a = false;

console.log(x || y);  // true or true -> true
console.log(x || z);  // true or false -> true
console.log(z || a);  // false or false -> false
console.log(z || x);  // false or true -> true