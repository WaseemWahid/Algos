/* 
- Create enqueue and dequeue methods. _You can loop and index the underlying array._
- Design a new PriorityQueue class where the queue maintains an ascending order when items are added based on a queue item's provided priority integer value. A priority value of 1 is most important which means it should be at the front of the queue, the first to be dequeued.
- A priority queue item could be any data type.
*/

class ListNode {
    constructor (data, level = 3){
        this.data = data;



        this.level = level;
        this.next - null;
    }
}


class PriorityQueue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length= 0;
    }

    enqueue(data, level){
        let newNode = new ListNode(data, level);
        if (this.empty()) {
            this.head = newNode;
            this.tail = newNode;
            return ++this.length;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return ++this.length;
    }

    priorityEnqueue(data, level) {
        let newNode = new ListNode(data, level)
        if (this.isEmpty()){
            this.head = newNode
            this.tail = newNode
            return ++this.length;
        }
        let runner = this.head;
        let chaser = null; 
        while(runner.level > level) {
            chaser = runner;
            runner = runner.next;
        }
        chaser.next = newNode;
        newNode.next = runner 
        return ++this.length 
    }

    dequeue(){
        if(this.isEmpty()){
            let data = this.head.data;
            this.head = this.head.next;
            this.length -= 1;
            return data;
        }
        return null 
    }
}