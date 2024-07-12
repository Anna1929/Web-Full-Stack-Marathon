let LLData = require("./LLData");

class LList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    add(value) {
        const newElement = new LLData(value);
        if (!this.head) {
            this.head = newElement;
        } else {
            this.tail.next = newElement;
        }
        this.tail = newElement;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(value => this.add(value));
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                if (!current.next) {
                    this.tail = current;
                }
                return;
            }
            current = current.next;
        }
    }

    removeAll(value) {
        while (this.head && this.head.data === value) {
            this.head = this.head.next;
        }

        let current = this.head;
        while (current && current.next) {
            if (current.next.data === value) {
                current.next = current.next.next;
                if (!current.next) {
                    this.tail = current;
                }
            } else {
                current = current.next;
            }
        }
    }

    contains(value) {
        if (!this.head) {
            return false;
        }

        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    count() {
        let size = 0;
        let current = this.head;
        while (current) {
            size++;
            current = current.next;
        }
        return size;
    }

    toString() {
       let str = [];
       if (!this.head) {
           return '';
       }

       let element = this.head;
       while (element) {
           str.push(element.data);
           element = element.next;
       }
       return str.join(', ');
    }

    [Symbol.iterator]() {
        let curr = this.head;
        return {
            next() {
                if (curr) {
                    let value = curr.data;
                    curr = curr.next;
                    return { value: value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }

    filter(callback) {
        const newList = new LList();
        let current = this.head;
        while (current) {
            if (callback(current.data)) {
                newList.add(current.data);
            }
            current = current.next;
        }
        return newList;
    }

}

module.exports = { LList };