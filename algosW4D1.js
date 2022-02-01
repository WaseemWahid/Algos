/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
    if (nums.length === 1 ) {
        return nums[0];
    }
    if (nums.length === 0 ) {
        return 0;
    }
    let sum = nums[0] + sumArr(nums.slice(1,nums.length));
    return sum;
}
console.log(sumArr(nums1));

/*****************************************************************************/

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    // Base case 
    if (num <= 0)
        return 0;
    return Math.floor(num + recursiveSigma(num - 1))
}
console.log(recursiveSigma(num1));
console.log(recursiveSigma(num2));
console.log(recursiveSigma(num3));