const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }


    add(num) {
        if (this.isEmpty()) {
            this.head = new Node(num);
        } else {
            let currentNode = this.head;

            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(num);
        }
    }

    remove() {
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        const data = currentNode.data;
        previousNode.next = null;
        return data;
    }

    search(target) {
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.data === target) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    addFirst(num) {
        if (this.isEmpty()) {
            this.head = new Node(num);
        } else {

            let newNode = new Node(num);
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addLast(num) {
        this.add(num);
    }

    insertAfter(num, key) {
        if(this.isEmpty()) throw new Error('List is Empty!');
        
        let currentNode = this.head;

        while (currentNode && currentNode.data != key) {
            currentNode = currentNode.next;
        }

        let newNode = new Node(num);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    isEmpty(){
        return this.head == null ? true : false;
    }

    insertBefore(num, key) {
        if(this.isEmpty()) throw new Error('List is Empty!');

        let currentNode = this.head;
        let previousNode;

        while (currentNode && currentNode.data != key) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        let newNode = new Node(num);
        newNode.next = currentNode;
        previousNode.next = newNode;
    }

    print() {
        let currentNode = this.head;
        while (currentNode) {
            process.stdout.write(currentNode.data + " -> ");
            currentNode = currentNode.next;
        }

        console.log();
    }
}

const list = new LinkedList();

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        list.add(5);
    } else {
        list.add(Math.floor(Math.random() * 100));
    }

}

list.print();

list.insertBefore(1, 5);

list.print();