// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums) {
    //given an unsorted array, sort the array using bubbleSort
    // i.e. keep swapping the largest value and put it at the end
    let size = nums.length;
    while (size > 1) {
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
        size--;
    }
    return nums
}

// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log("hi")
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(numsReversed));
console.log(bubbleSort(numsOrdered));


console.log("===========================================================")

function bubbleSort2(nums) {
    //given an unsorted array, sort the array using bubbleSort
    // i.e. keep swapping the largest value and put it at the end
    // loop through array
    for (let i = 0; i < nums.length; i++) {
        // loop through again 
        for (let j = 0; j < nums.length; j++) {
            // compare
            if (nums[j] > nums[j + 1]) {
                // place holder
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}


console.log(bubbleSort2(numsRandomOrder));
console.log(bubbleSort2(numsReversed));
console.log(bubbleSort2(numsOrdered));
