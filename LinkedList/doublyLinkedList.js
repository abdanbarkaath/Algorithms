class Node {
    constructor(value) {
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}
class DoubleLinkedList {
    constructor(value) {
        this.head = {
            previous: null,
            value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        let newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this;
    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length += 1;
        return this
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index <= 0) {
            return this.prepend(value)
        }
        let newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let follower = leader.next;
        newNode.previous = leader;
        newNode.next = follower;
        leader.next = newNode;
        follower.previous = newNode;
        this.length += 1;
        return this;
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

let doubly = new DoubleLinkedList(5);
doubly.append(10);
doubly.append(15);
doubly.append(20);
// doubly.prepend(1);
// console.log(doubly.insert(2, 7));
doubly.insert(1, 7);
// console.log(doubly.head.next.next.next.next);
console.log(doubly.printList());

