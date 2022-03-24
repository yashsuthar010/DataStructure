// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //   push/add an element at the end of list
  push(val) {
    //   create a new node
    let newNode = new Node(val);

    // now we check that if list is empty add the
    // element and make it head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   pop method
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // shift method - its remove one element from begining
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead;
    this.length--;
    if (this.length === 0) {
      this.head = 0;
      this.tail = 0;
    }
    return currentHead;
  }

  // unshift method - adding a new node to the beginning of the linkedlist
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // GET - retrieving a node by its position(using index) in the linked list

  get(index) {
    if (index < 0 || index >= this.length) {
      return console.log("please Enter a valid index");
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    console.log(current);
    return current;
  }

  // SET - changing the value of a node based on its position in the linked list
  set(index, val) {
    // using get method - recursion
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert - adding a node to the linked list at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    // here we use (!!) for converting it to the boolean
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);

    let newNode = new Node(val);

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  // Remove - removing a node from the linked list at a specific position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;
    return removed;
  }

  // this topic important for interview
  // Reverse - Reversing the linked list in Place!
  // before we write reverse method we need helper method(its optional)
  // print() - it print all the element in order(helper method)
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new singlyLinkedList();
list.push("hello");
list.push("bye");
list.push("goodbye");
list.insert(1, "hi");
list.print();
list.reverse();
list.print();

// console.log(list);
