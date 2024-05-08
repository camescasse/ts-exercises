class Stack<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items.at(-1);
  }
}

export default Stack;
