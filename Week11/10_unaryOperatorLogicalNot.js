// truthy vs falsy values
// whenever you use a Logical NOT operator (unary), it is "casted"
// to a Boolean value

console.log(!false);  // boolean is either true or false
console.log(!"blue"); // strings are truthy if not empty; falsy if empty
console.log(!0);      // 0 is falsy
console.log(!NaN);    // NaN is falsy
console.log(!"");     // strings are truthy if not empty; falsy if empty
console.log(!12345);  // non zero numbers are truthy
console.log(!-5);     // negative numbers are truthy