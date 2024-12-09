

// This is our JSON data

const schools =  [
{
    "name": "Big School",
    "numberOfStudents": 2000,
    "Director": "Peter",
    "rating": 4.7
},
{
    "name": "Small School",
    "numberOfStudents": 300,
    "Director": "Diana",
    "rating": 4.1
}
]

const schoolsObject = JSON.parse(schools);

// Now we can use treat the data as a normal JavaScript object
console.log(schoolsObject[0].name); // Logs "Big School"
console.log(schoolsObject[1].name); // Logs "Small School"


