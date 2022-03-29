const students = [
    {
    firstName: "Jane",
    lastName: "Doe",
    habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
    ],
    },
    {
    firstName: "John",
    lastName: "Smith",
    habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
    firstName: "Arya",
    lastName: "Stark",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
    firstName: "Jon",
    lastName: "Snow",
    habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];

function santasNaughtyList(persons, badHabit) {
    let newArr = []
    for(item of persons){
        for(habits of item.habits){
            if(habits === badHabit){
                newArr.push(item.firstName + ' ' + item.lastName)
            }
        }
        
    }
    return newArr;
}

console.log(santasNaughtyList(students, badHabit1))
console.log(santasNaughtyList(students, badHabit2))
console.log(santasNaughtyList(students, badHabit3))