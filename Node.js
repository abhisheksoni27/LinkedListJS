class Node {
    constructor(num) {
        this.data = num;
        this.next = null;
    }

    toString() {
        return `Data = ${this.data}, Next = ${this.next}`;
    }
}

module.exports = Node;