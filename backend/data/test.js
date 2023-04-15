const arr = [
    {
        name: "Abhishek",
        age: 22,
        job: "Wipro"
    },
    {
        name: "Naresh",
        age: 23,
        jog: "Rensol"
    },
    {
        name: "Aman",
        age: 21,
        job: "Student"
    }
];


const person = arr.find((person) => {
    return person.job === "Student";
});

console.log(person);
console.log(typeof arr);