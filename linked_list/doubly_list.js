class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   push method - adding a node to the end of the doubly linked list

  push(val) {
    // create a new node
    let newNode = new Node(val);

    // here we are checking that list is empty or not
    // if it is then if statement excute or otherwise else will excute
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   POP - removing a node from the end of the doubly linked list

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;

      //   chop the first connection
      this.tail.next = null;

      //   chop the second connection
      poppedNode.prev = null;
    }
    this.length--;
    console.log(poppedNode);
    return poppedNode;
  }

  // shift- removing a node from the beginning of the doubly linked list

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // unShift - adding a node to the beginning of the doubly linked list

  unshift(val) {
    // create a new node
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get - accessing a node in a doubly linked list by its positio

  get(index) {
    if (index < 0 || index >= this.length) return `please enter valid index`;

    if (index <= this.length / 2) {
      console.log("working from start");

      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      console.log("working from end");
      let count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // set - Replacing the value of a node to the in a doubly linked list
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert - adding a node in a doubly linked list by a certain position
  insert(index, val) {
    if (index < 0 || index > this.length) return `Invalid`;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    // create a new node
    let newNode = new Node(val);

    // accessing the links of that particular node
    // wehere we want to insert the newNode
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;

    // linking them together
    prevNode.next = newNode;
    newNode.prev = prevNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // Remove - Removing a node in a doubly linked list by a certain position
  remove(index) {
    if (index < 0 || index >= this.length) return `Invalid`;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);

    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push("hi");
list.push("hello");
list.push("bye");
// list.get(3);
// list.pop("hello");
let result = list.get(2);
console.log(result);
// console.log(list);
