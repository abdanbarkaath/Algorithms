class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    reverse() {
        if (!this.head) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this
    }
    secondReverse() {

        //not working

        let prevNode = null;
        while (this.head !== null) {
            let newNode = this.head.next;
            this.head.next = prevNode;
            console.log(this.head.next, '--------');
            prevNode = this.head;
            console.log(this.prevNode, '******');
            this.head = newNode;
        }

    }
    printList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}
var linked = new LinkedList(5);
linked.append(10)
linked.append(15)
linked.append(20)
linked.reverse()
// linked.printList();
linked.secondReverse()