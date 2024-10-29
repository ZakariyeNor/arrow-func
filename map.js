  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let result = [];

for (let num of nums) {
    result.push(num * 2);
}

console.log(result)


// Using map()

const multByTwo = function (num) {
    return num * 2;
}

const mapResult = nums.map(multByTwo);
console.log(mapResult)


// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);


// Simplfied w/ map() + arrow function

const withAr = nums.map(num => num *2 );
console.log(withAr);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentWithIds = students.map(student => [student.name, student.id]);
console.log(studentWithIds);


const studentWithIds2 = students.map(student => ({
    id: student.id, 
    name: student.name
}));
console.log(studentWithIds2);


students.push({age: 1,});
console.log(students);