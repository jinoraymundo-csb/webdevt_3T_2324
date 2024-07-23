// The undefined type
// we will get undefined if we declare a variable, but do not assign any value to it
let message;
console.log(message == undefined);
console.log(typeof message);

// The null type
let messageNull = null;
console.log(messageNull == null);
console.log(typeof messageNull);

// The Boolean types
let found = true;
let lost = false;
let foundOther = "true";

console.log(`The type of found is: ${typeof found}`);
console.log(`The type of lost is: ${typeof lost}`);
console.log(`The type of foundOther is: ${typeof foundOther}`);