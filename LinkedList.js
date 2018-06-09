const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }


    push(num) {
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

    pop() {
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
list.push(10);
for (let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random() * 100));
}

list.print();
console.log(list.search(10))