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

  /**
   * Insert a node
   * @param {any} value
   */
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) {
        throw new Error('The element is already present in the Tree');
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   * finds a value in the tree
   * if the value is found, return the value
   * otherwise return not found message
   * @param {any} value 
   */
  find(value) {
    if (this.root === null) {
      throw new Error('The tree is empty');
    }

    let current = this.root;
    let found = false;

    while (current !== null && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return 'Value not found!!';
    }

    return current;
  }

  /**
   * returns true if the value is found and false otherwise
   * @param {any} value 
   */
  contains(value) {
    if (this.root === null) {
      throw new Error('The tree is empty');
    }

    let current = this.root;

    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * Breadth-First Search tree traversal
   */
  bfs() {
    let queue = [];
    let result = [];
    let node = this.root;

    queue.push(node);

    while (queue.length >= 0) {
      node = queue.shift();
      result.push(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      } else if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;

  }

  /**
   * Depth-First Search PreOrder Traversal
   */
  DFSPreOrder() {
    let result = [];

    function traverse(node) {
      result.push(node.value);
      if (node.left !== null) {
        traverse(node.left);
      } else if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return result;
  }

  /**
   * Depth-First Search PostOrder Traversal
   */
  DFSPostOrder() {
    let result = [];

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      } else if (node.right !== null) {
        traverse(node.right);
      }
      result.push(node.value);
    }

    traverse(this.root);

    return result;
  }

  /**
   * Depth-First Search InOrder Traversal
   */
  DFSInOrder() {
    let result = [];

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return result;
  }

}
