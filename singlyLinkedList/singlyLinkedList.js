class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * add a new node at the end of the list
   * @param {any} val 
   */
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  /**
   * remove from the end of the list
   */
  pop() {
    if (this.length === 0) {
      throw new Error('Cannot remove Node from empty list');
    }

    let current = this.head;
    let newTail = this.head;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * remove an element from the beginning of the list
   */
  shift() {
    if (this.length === 0) {
      throw new Error('Cannot remove Node from empty list');
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  /**
   * add a new element to the beginning of the list
   * @param {any} val 
   */
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return true;
  }

  /**
   * get the node at specified index
   * @param {number} index 
   */
  get(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Cannot find the specified index. Check the length and try again.');
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /**
   * Set the value at the specified index with the given value
   * @param {number} index 
   * @param {any} val 
   */
  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  /**
   * Insert a new node at the specified index
   * @param {number} index 
   * @param {any} val 
   */
  insertAt(index, val) {
    if (index < 0 || index > this.length) {
      throw new Error('Index should be in the range of 0 to length of the list');
    }
    if (index === 0) {
      return this.unshift(val);
    } else if (index === this.length) {
      return this.push(val);
    }

    let prevNode = this.get(index - 1);
    let prevNext = prevNode.next;
    let newNode = new Node(val);
    newNode.next = prevNext;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * Remove a node from the specified index
   * @param {number} index 
   */
  removeFrom(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let deletedNode = prevNode.next;
    prevNode.next = deletedNode.next;
    this.length--;
    return deletedNode;
  }

  /**
   * Reverse the given list
   */
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

  /**
   * Print the entire list
   */
  print() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

module.exports = {
  SinglyLinkedList, Node
};
