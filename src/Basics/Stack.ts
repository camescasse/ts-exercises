class Stack {
  items: any[];

  constructor() {
    this.items = [];
  }

  push(item: any) {
    this.items.push(item);
  }

  pop(): any {
    return this.items.pop();
  }

  peek(): any {
    return this.items.at(-1);
  }
}

export default Stack;
