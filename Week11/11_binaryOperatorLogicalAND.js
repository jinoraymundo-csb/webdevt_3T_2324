let x = true;
let y = true; 
let z = false;
let a = false;

console.log(x && y);  // true and true -> true
console.log(x && z);  // true and false -> false
console.log(z && a);  // false and false -> false
console.log(z && x);  // false and true -> false