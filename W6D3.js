/**
 * Class to represent a queue using an array which follows a FIFO
 * (First In First Out) order. New items are added to the back and items are
 * removed from the front.
 */
 class Queue {
    /**
     *
     * @param {Array<any>} items The starting items, useful for if you already
     *    have an array of items in the right order and want to convert it to a
     *    queue instance to get access to the queue methods.
     */
    constructor(items = []) {
        this.items = items;
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */

    /** 
     * Psuedocode:
     * Create a method that compares one queue to another without using any new variables
     * First comparte length, if unequal, return false 
     * have a boolean names isEqual 
     * write a for loop to do this a number of times equal to length 
        * compare the dequeue of both qeues 
        // *  if equal, enque them
        // *  if unquel, enqueue them and set isEqual to false 
    */
    compareQueues(q2) {
        if(this.size() !== q2.size()){
            return false 
        }
        let isEqual = true
        for(let i = 0; i < this.size(); i++){
            let holder1 = this.dequeue();
            let holder2 = q2.dequeue();
            if (holder1 === holder2){
                this.enqueue(holder1)
                q2.enqueue(holder2)
                continue
            }
            this.enqueue(holder1)
            q2.enqueue(holder2)
            isEqual = false 
        }
        return isEqual
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    /* 
    Psuedocode:
    create a corresponding stack to compare against 
    create a boolean called isPalindrome, set to true 
    for loop going to the length
        compare dequeue of queue to pop from stack
            if unequal, set isPalindrome to false then enqueque 
            if equal, enqueue and continue 
    return isPalindrome
    */
    isPalindrome() {
        let compareStack = new Stack()
        compareStack.items = this.items
        let isPalindrome = true
        for(let i = 0; i < this.size(); i++){
            let holder = this.dequeue()
            if(holder !== compareStack.pop()){
                isPalindrome = false
                this.enqueue(holder)
            } else {
                this.enqueue(holder)
            }
        }
        return isPalindrome
    }



    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}


let newQueue = new Queue()
newQueue.enqueue(1)
newQueue.enqueue(1)
newQueue.enqueue(1)
newQueue.enqueue(1)
newQueue.enqueue(1)


let secondQueue = new Queue()
secondQueue.enqueue(1)
secondQueue.enqueue(1)
secondQueue.enqueue(1)
secondQueue.enqueue(2)
secondQueue.enqueue(1)

console.log(newQueue.compareQueues(secondQueue))

console.log(newQueue.isPalindrome())

let newStack = new Stack()
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(10);
newStack.push(1);

console.log(newStack.min())