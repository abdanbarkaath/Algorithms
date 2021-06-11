class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  peek() {
    return this.items[this.length - 1];
  }
  push(value) {
    this.items.push(value);
    this.length++;
    return this;
  }
  pop() {
    this.items.pop();
    this.length--;
    return this;
  }
}

const someStack = new Stack();
someStack.push('hello');
someStack.push('hi');
someStack.push('hherro');
console.log(someStack.peek(), 'first');
someStack.pop();
// someStack.pop();
// someStack.pop();
console.log(someStack);
