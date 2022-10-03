// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const add = require('./add')
const multiply = require('./multiply')

const sum = add(2,2)

const total = multiply(sum, 4);
console.log(total);

console.log(multiply(add(2, 2), 4));

console.log('Hello from the developer console!');
const date = new Date()
console.log(date);