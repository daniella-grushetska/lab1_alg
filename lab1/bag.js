class Bag {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(item) {
      const node = { item, next: null };
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
  }
  