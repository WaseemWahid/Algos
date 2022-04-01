/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10"; // b:70 a:164 c:32 a:20 
const expected1 = "a184b70c42"; //{a:184, b:70, c:42}
// a184b70c42
// isNaN(letter)
//given an incorrectly string by combining letter count occurences
// return the correctly rehashed string alphabetized.
function rehash(s) {
    let result = {};
    let tempLetter = '';
    let tempNumber = '';
    let returnStr = [];
    // console.log(s.length)
    for (let i = 0; i <= s.length; i++) {
        if (isNaN(s[i])) {
            if (tempLetter !== '') {
                if (result[tempLetter]) {
                    result[tempLetter] += parseInt(tempNumber);

                } else {
                    result[tempLetter] = parseInt(tempNumber);
                }

                tempNumber = ''
            }
            tempLetter = s[i]
            // console.log(tempLetter) 
        } else {
            tempNumber += s[i];
            // console.log(tempNumber)
        }
    }
    for (key of Object.keys(result)) {
        returnStr.push(`${key}${result[key]}`)
    }
    return returnStr.sort().join('');
}

console.log(rehash(str1))


console.log(rehash(str1))

// good job! You got the frequency table! 
// Make sure you sort it and make them into string
// small hint..... you can use Object.keys to find all the keys
// and you can use .sort() to sort any array


// BONUS  -- longest substring without repeating characters


// const str1 = "abcabcbb";
// const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

//Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubString(str) {

}