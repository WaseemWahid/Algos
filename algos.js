/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let newObj = {}
    for(let i =0; i < arr.length; i++){ 
        if (newObj[arr[i]]){
        newObj[arr[i]] += 1
        } else {
        newObj[arr[i]] = 1
        }
    }
    return(newObj)
}


console.log(frequencyTableBuilder(arr1));
console.log(frequencyTableBuilder(arr2));
console.log(frequencyTableBuilder(arr3));


/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    let newObj = {};
    for(let x = 0; x < nums.length; x++){
        if(newObj[nums[x]]){
            newObj[nums[x]] += 1;
        }else{
            newObj[nums[x]] = 1;
        }
    }
    for(let key in newObj){
        if(newObj[key] % 2 == 1){
            return key
        }
    }
}

console.log(oddOccurrencesInArray(nums1))
console.log(oddOccurrencesInArray(nums2))
console.log(oddOccurrencesInArray(nums3))
console.log(oddOccurrencesInArray(nums4))

// ==============================================================================================================================================
// ALGOS PYTHON W2D3
/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "wednesday"
const expected3 = "wednsay"
const expectedBonus3 = "wnesday"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    let newObj = {}
    let newStr = ""
    for(let i =0; i < str.length; i++){ 
        if (newStr[str[i]]){
            delete newObj[str[i]]
            newObj[str[i]] +=1
        } else {
            newObj[str[i]] = 1
        }
    }
    for(y in newObj) {
        newStr += y
    }
    return newStr
}

console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))

/*****************************************************************************/

/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world"; 
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {}


//===============================================================================================================================================//

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */

function parensValid(str) {
    let num = 0;
    for(x = 0; x < str.length; x++){
        if(str[x] == "("){
            num++;
        }else if(str[x] == ")"){
            num--;
            if(num < 0){
                return false
            }
        }
    }
    return num == 0
}

// second way to solve with a stack
function parensValid(str) {
    let parens = []
    for (let i = 0; i < str.length; i++){
    if(str[i] == "("){
        parens.push(str[i])
    }
    else if (str[i] == ")"){
        parens.pop()
    }
    else{ 
        continue;
        }
    }
    if(parens == false){
        return true
    }
    else{
        return false
    }
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))


/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    let check = [];
    for (let x = 0; x < str.length; x++){
        let char = check[check.length -1]
        if (str[x] == "(" || str[x] == "{" || str[x] == "[") {
            check.push(str[i])
        } else if ((char == "(" && str[i] == ")") ||
            (char == "{" && str[i] == "}") ||
            (char == "[" && str[i] == "]")) {
                check.pop()
            } else return false
    }
}

console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))

// =================================================================================

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    count = 0
    for(let x = 0; x < queue.length; x++){
        if(queue[x] == 0){
            count ++
            console.log(count)
        }  
        if (queue[x] == 1) {
            count -= count
            console.log(count)
        }
        if (count > 6)
            return true
    }
    return false
}
console.log(socialDistancingEnforcer(queue1))
console.log(socialDistancingEnforcer(queue2))
console.log(socialDistancingEnforcer(queue3))

/*****************************************************************************/

/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 5, 9]
const expected3 = -1

const nums4 = [10, 99999999, 2, 2, 2, 1, 1, 1, 1]
const expected4 = 1

const nums5 = [10, 2, 2, 2, 999999, 1, 1, 1]
const expected5 = -1

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {}