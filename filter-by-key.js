const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
    { firstName: "John", lastName: "Fawn" },
    { firstName: "Edward", lastName: "Kim" }
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "John", lastName: "Fawn" },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Eddy", lastName: "Lee" },
];

function filterByKeyStartsWith(items, searchFor, searchBy) {
    let newArr = []
    let match = false
    for (object of items) {
        if (object.hasOwnProperty(searchBy)) {
            for (i = 0; i < searchFor.length; i++) {
                if (searchFor[i].toLowerCase() === object[searchBy].charAt(i).toLowerCase()) {
                    match = true;
                } else {
                    match = false
                    break;
                }
            }
            if (match) {
                newArr.push(object)
            }
        }
    }
    return newArr
}
// good job! You got it! Try to make it case insensitive?
console.log(filterByKeyStartsWith(people, searchFor1, searchBy1))
console.log(filterByKeyStartsWith(people, searchFor2, searchBy2))
console.log(filterByKeyStartsWith(people, searchFor3, searchBy3))



function filterByKey(items, searchFor, searchBy, searchMethod = "startsWith") {
    // Filters the given items based on the search criteria using different search method
    // search method : includes, startsWith, endsWith

}