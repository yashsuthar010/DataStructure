class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (!this.root) return `invalid`;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return false;
      }
    }
    return false;
  }
  BFS() {
    // iteration
    // scaning left to right
    var data = [],
      queue = [],
      node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;

    //       10
    //     6    15
    //   3  8    20
    // result of bfs-[10,6,15,3,8,20]
  }
  DFSpre() {
    // first visit left side and then visit right side
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;

    //       10
    //     6    15
    //   3  8    20
    // result of dfsPRE-[10,6,3,8,15,20]
  }
  DFSpost() {
    // recursively
    var data = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;

    //       10
    //     6    15
    //   3  8    20
    // result of dfspost-[3,8,6,20,15,10]
  }
  DfsInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      // node.left && traverse(node.left)

      data.push(node.value);

      if (node.right) traverse(node.right);
      // node.right && traverse(node.right)
    }
    traverse(current);
    return data;

    //       10
    //     6    15
    //   3  8    20
    // result of dfsInOrder-[3,6,8,10,15,20]
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSpre());
console.log(tree.DFSpost());
console.log(tree.DfsInOrder());
