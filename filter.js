// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  

const oldEnoughPerson = people.filter(person => person.age >= 21);
console.log(oldEnoughPerson);

const forYoung = people.filter(person => person.age <= 18);
console.log(forYoung);

const sameAge = people.filter(person => person.age === 18);
console.log(sameAge);


const lian = people.filter(l => l.name === "Lianna");
console.log(lian)


  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
     },
  ];

  const levelYrs = students.filter(student => student.name >= 5);
  console.log(levelYrs);

  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  });

  console.log(candidates);