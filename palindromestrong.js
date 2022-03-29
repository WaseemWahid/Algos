// ---------- palindrome -----------
// tacocat
const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
function canStringBecomePalindrome(str){
    if(str === "") {
    
    return false
    }
    // Create a list
    let list = [];

    // For each character in input strings,

    
    for (let i = 0; i < str.length; i++) {
        // remove character if list contains
        if (list.includes(str[i]))
            list.splice(list.indexOf(str[i]), 1);
        // else add character to list
        else
            list.push(str[i]);
    }

    // If character length is even
    // list is expected to be empty or
    // if character length is odd list size
    // is expected to be 1

    // If string length is even
    if (str.length % 2 == 0 && list.length == 0 ||
        (str.length % 2 == 1 && list.length == 1))
        return true;

    // If string length is odd
    else
        return false;
    
}

console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))



// -----------DROP IT ---------------

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
// expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 3;
};
// expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
// expected3 = [];

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

function dropIt(arr, callbackFunc) {


}