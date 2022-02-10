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
}