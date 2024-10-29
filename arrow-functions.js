/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    // Code block 
    return a + b;
}
let result = addTwoNumbers(3, 5)
console.log(result) */
// Arrow Function With Parameters


const addTwoNumbers = (a, b) => {
    // Code block 
    return a + b;
}

let results = addTwoNumbers(3, 5)
console.log(results)


// Single Line Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => a + b; 
let sum = addTwoNumbers1(5, 8);
console.log(sum)



// Implicit Returns


const saySomething = message => console.log(message)
saySomething('Hello there!!');

const sayHello = () => console.log('hello')
sayHello()


// Returning Multiple Lines

const returnMultibleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)

console.log(returnMultibleLines()); 