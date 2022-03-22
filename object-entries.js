/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
// hint: hasOwnProperty
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];



function entries(obj) {
    //given an object, return a 2d array of key value pairs. 
    // expected return array: [[key1, val1], [key2, val2] ...]
    // Do not inherit the inherited proto
    let newArr = []
    for (key in obj) {
        if (proto[key] != obj[key]) {

            newArr.push([key, obj[key]])
        }
    }
    return newArr
}

console.log(entries(obj1))
console.log(entries(obj2))




// Bonus:

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
// expected result: 
// "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
// expected result
// "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.


function insert(tableName, columnValuePairs) {
    let string1 = ("INSERT INTO " + tableName + (" ("))
    let string2 = ") VALUES ("
    let arr = entries(columnValuePairs)
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            string1 = string1 + arr[i][0] + ", "
        } else {
            string1 = string1 + arr[i][0]
        }
        if (i !== arr.length - 1) {
            if (typeof (arr[i][1]) === 'string') {
                string2 = string2 + "'" + arr[i][1] + "'" + ", "
            } else {
                string2 = string2 + arr[i][1] + ", "
            }
        } else {
            if (typeof (arr[i][1]) === 'string') {
                string2 = string2 + "'" + arr[i][1] + "'"
            } else {
                string2 = string2 + arr[i][1]
            }
        }
    }
    string1 = string1 + string2 + ");"
    return string1
}

function insertFunctional(tableName, columnValuePairs) {
    //Bonus: Write a 2nd solution focusing on functional programming using built in methods
}