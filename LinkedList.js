const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }


    add(num) {
        if (this.head == null) {
            this.head = new Node(num);
        } else {
            let currentNode = this.head;

            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(num);
        }
    }

    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log("Data = %s", currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
for (let i = 0; i<10; i++){
    
}
list.print();