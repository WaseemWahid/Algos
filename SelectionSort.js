// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js
// remember that you are in index.js
// if you want to run the file, click the button run
// thank you
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function selectionSort(nums) {
    //given an unsorted array, sort the array using selectionSort
    // i.e. find the largest value and put it at the end
    let length = nums.length
    while (length > 1) {
        let tempInd = 0;
        for (let i = 0; i < length; i++) {
            if (nums[i] > nums[tempInd]) {
                tempInd = i;
            }
        }
        [nums[length - 1], nums[tempInd]] = [nums[tempInd], nums[length - 1]]
        length--;
    }
    return nums;
}
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));



console.log("================================")


function selectionSort2(nums) {
    //given an unsorted array, sort the array using selectionSort
    // i.e. find the largest value and put it at the end
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let x = i + 1; x < length; x++) {
            if (nums[x] < nums[min]) {
                min = x;
            }
        }
        if (min != i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }
    return nums
}

console.log(selectionSort2(numsOrdered))
console.log(selectionSort2(numsRandomOrder))
console.log(selectionSort2(numsReversed))
