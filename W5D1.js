/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {Node} A new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
    this.data = data;
    /**
       * This property is used to link this node to whichever node is next
       * in the list. By default, this new node is not linked to any other
       * nodes, so the setting / updating of this property will happen sometime
       * after this node is created.
       */
    this.next = null;
    }
}

/**
   * Class to represent a list of linked nodes. Nodes CAN be linked together
   * without this class to form a linked list, but this class helps by providing
   * a place to keep track of the start node (head) of the list at all times and
   * as a place to add methods (functions inside an object) so that every new
   * linked list that is instantiated will inherit helpful the same helpful
   * methods, just like every array you create inherits helpful methods.
   */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        this.head = null;
    }

            /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
        secondToLast() {
            if(this.isEmpty()){
                return null
            }
            if(this.head.next == null){
                return null
            }
            let runner = this.head;
            while(runner.next.next != null){
                runner = runner.next;
            }
            return runner.data
        }
        
    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {Node/null} The removed node.
     */
        removeVal(val) {
            if(this.isEmpty()){
                return false
            }
            let runner = this.head;
            while(runner != null){
                if(runner.next.data == val){
                    let temp = runner.next
                    runner.next = runner.next.next
                    return temp
                }
                runner = runner.next;
            }
            return null
        }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {Node/null} The node if it was added, otherwise null.
     */
        prepend(newVal, targetVal) {
            let runner = this.head;
            while(runner!== null){
                if(runner.next != null && runner.next.data === targetVal){
                    const link = runner.next
                    runner.next = new Node(newVal)
                    runner.next.next = link
                    return runner.next
                }
                runner = runner.next
            }
            return null;
        }

    /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
        removeBack() {
            if(this.isEmpty())
                return null
            let runner = this.head
            while(runner.next.next != null)
                runner = runner.next;
            let oldTail = runner.next;
            runner.next = null;
            return oldTail
        }

    /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
        contains(val) {
            let runner = this.head;
            while (runner != null){
                if(runner.data == val) return true
            }
            return false 
        }

    /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?node} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
        containsRecursive(val, current = this.head) {
            if(this.isEmpty()){
                return false 
            }
            if(current.data == val){
                return true
            }
            if(current.next == null) {
                return false 
            }
            return this.containsRecursive(val, current.next)
        }

    /**
     * Determines if this list is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
        isEmpty() {
            if(this.head == null)
                return true
            return false
        }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
        insertAtBack(data) {
            if(this.isEmpty()){
                this.head = new Node(data)
                return this 
            }
            let runner = this.head
            while(runner.next != null) {
                console.log(runner.data)
                runner = runner.next
            }
                runner.next = new Node(data);
                return this
        }

        /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
        insertAtFront(data) {
            let new_node = new Node(data);
            new_node.next = this.head;
            this.head = new_node;
            return this
        }

        /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
        removeHead() {
            const oldHead = this.head
            this.head = this.head.next
            return oldHead.data
        }

         // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
        average() {
            let runner = this.head;
            let count = 0;
            let sum = 0;
            while(runner.next != null){
                sum += runner.data;
                count += 1
                runner = runner.next;
            }
            return sum / count
        }





    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
        seedFromArr(vals) {
            for (const item of vals) {
            this.insertAtBack(item);
            }
            return this;
        }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
        toArr() {
            const arr = [];
            let runner = this.head;
        
            while (runner) {
            arr.push(runner.data);
            runner = runner.next;
            }
        return arr;
        }
}




const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().seedFromArr([1]);
const biNodeList = new SinglyLinkedList().seedFromArr([1, 2]);
const firstThreeList = new SinglyLinkedList().seedFromArr([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new SinglyLinkedList().seedFromArr([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

// node 4 connects to node 1, back to head
const perfectLoopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
// // perfectLoopList.head.next.next.next = perfectLoopList.head;

// // node 4 connects to node 2
const loopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
// loopList.head.next.next.next = loopList.head.next;

const sortedDupeList = new SinglyLinkedList().seedFromArr([
1, 1, 1, 2, 3, 3, 4, 5, 5,
]);

const tester = new SinglyLinkedList().removeBack([1, 4, 5, 6, 7]);
