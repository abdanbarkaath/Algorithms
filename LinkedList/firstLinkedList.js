// 15-->10--->5
// value:'',
// next:{
//     value:'',
//     next:'null'
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this
    }
    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index <= 0) {
            return this.prepend(value)
        }
        const newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length += 1;
        return this
    }
    removeTail() {
        let newLastNode = this.traverseToIndex(this.length - 2);
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length -= 1;
        return this
    }
    removeHead() {
        this.head = this.head.next;
        this.length -= 1;
        return this
    }
    remove(index) {
        if (index >= this.length) {
            return this.removeTail();
        } else if (index <= 0) {
            return this.removeHead();
        }
        let leader = this.traverseToIndex(index - 1);
        let nodeToRemove = leader.next;
        leader.next = nodeToRemove.next;
        this.length -= 1;
        return this;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter += 1
        }
        return currentNode;
    }
}

let myLink = new LinkedList(15);
myLink.append(10)
myLink.append(5)
// console.log(myLink.append(1));
myLink.printList();
myLink.insert(1, 7)
myLink.printList();
// console.log(myLink.remove(1));
console.log(myLink.removeHead());
myLink.printList();

