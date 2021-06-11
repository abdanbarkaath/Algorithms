class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const head = new NewNode(value);
    if (this.length === 0) {
      this.top = head;
      this.bottom = head;
    } else {
      let temp = this.top;
      this.top = head;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.top === null) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let newHead = this.top.next;
    this.top = newHead;
    this.length--;
    return this;
  }
}

const someStack = new Stack();
someStack.push('hello');
someStack.push('hi');
someStack.push('hero');
console.log(someStack.peek());
someStack.pop();
someStack.pop();
console.log(someStack.peek());
