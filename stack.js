//LIFO

class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(item) {
      const node = { item, next: null };
      if (!this.top) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
      this.size++;
    }
  
    pop() {
      if (!this.top) return null;
      const item = this.top.item;
      this.top = this.top.next;
      this.size--;
      return item;
    }
  }
  