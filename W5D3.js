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
}