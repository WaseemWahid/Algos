/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start (head) of the list at all times and as a
 * place to add methods (functions inside an object) so that every new
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
      /** @type {ListNode|null} */
        this.head = null;
    }

    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
        /*
    Pseudocode:
    create a method that accepts a list and returns a new list
    make sure the this list is not empty
    make sure the addList is not empty 
    get to the end of the this list via a runner (while runner.next !== null)
    set runner.next == addList.head
    return this
    */
    concat(addList) {
        if (this.isEmpty()){
            return addList
        }
        else if (addList.isEmpty()){
            return this
        }
        let runner = this.head
        while (runner.next !== null){
            runner = runner.next
        }
        runner.next = addList.head
        return this
    }


    /**
     * Finds the node with the smallest number as data and moves it to the front
     * of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {SinglyLinkedList} This list.
     */
    /*

    */

    moveMinToFront() {

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