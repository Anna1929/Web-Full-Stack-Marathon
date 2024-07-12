class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new Node(data);

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    remove(data) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.data === data) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (this.tail.data === data) {
            this.tail = currentNode;
        }
    }

    contains(data) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    *[Symbol.iterator]() {
        let currentNode = this.head;
        while (currentNode) {
            yield currentNode.data;
            currentNode = currentNode.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    count() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    log() {
        let currentNode = this.head;
        let output = '';
        while (currentNode) {
            output += currentNode.data + (currentNode.next ? ', ' : '');
            currentNode = currentNode.next;
        }
        console.log(output);
    }
}

function createLinkedList(arr) {
    const list = new LinkedList();
    for (const data of arr) {
        list.add(data);
    }
    return list;
}