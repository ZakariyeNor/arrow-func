/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/* 
function addTwoNumbers(a, b) {
    // Code block 
    return a + b;
}
let result = addTwoNumbers(3, 5)
console.log(result) */
// Arrow Function With Parameters

/* 
const addTwoNumbers = (a, b) => {
    // Code block 
    return a + b;
}

let result = addTwoNumbers(3, 5)
console.log(result)


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

console.log(returnMultibleLines()); */








// No spread operator
/* 
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2)

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3]

arr4.push(7);

console.log("Third array:", arr3)
console.log("FOurth array:", arr4)


// Copying an object

let obj1 = {a:1, b:2, c: 3 };
let obj2 = {...obj1, d:4 };
let obj3 = { ...obj1, b: 5 };

console.log('First object:', obj1);
console.log('Second object:', obj2);
console.log('Third object:', obj3);

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];

console.log(arr5) */







// Regular function call 

/* const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum)



// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("SUm2:", sum2)


// Function using ...rest

let sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest) {
        sum += i;
    }
    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3); */







// Destructuring arrays

let ages = [40, 50, 60];
/* let john = ages[0];
let mary = ages[1];
let joe = ages[2]; */

let [john, mary, joe] = ages;

console.log(john, mary, joe)


// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let { mike, jill, alicia } = jobs

console.log(mike, jill, alicia);



// Destructuring subsets

let languages = ["English", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
let [, , maryNative, marySecondary] = languages;

console.log(johnNative, johnSecondary);
console.log(maryNative, marySecondary);


let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let {firstLanguage, thirdLanguage } = languages2;

console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax


let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favoriteFoods;

console.log(brian)
console.log(anna)
console.log(rest)
