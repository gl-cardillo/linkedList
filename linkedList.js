/* eslint-disable no-unused-vars */

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }
  getHeadValue() {
    return this.head.value;
  }

  getTailValue() {
    return this.tail.value;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.tail && !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.tail && !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  getSize() {
    let count = 0;
    let current = this.head;

    while (current) {
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  at(index) {
    let count = 0;
    let current = this.head;

    while (count < index) {
      if (!current)
        return `The index ${index} is bigger then the list size ${count}`;
      current = current.nextNode;
      count++;
    }
    return current.value;
  }

  pop() {
    if (!this.tail) return;
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this.tail = current;
  }

  contains(value) {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return index;
      }
      index++;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      if (!current.nextNode) {
        string += `(${current.value})`;
      } else {
        string += `(${current.value}) -> `;
      }
      current = current.nextNode;
    }
    return string;
  }

  insertAt(value, index) {
    if (index < 2) return "Please use append or prepend";
    let newNode = new Node(value);
    let pointer = this.head;
    let forwardPointer = this.head.nextNode;
    let currentIndex = 1;
    while (forwardPointer) {
      if (index === currentIndex) {
        pointer.nextNode = newNode;
        newNode.nextNode = forwardPointer;
        return;
      }
      currentIndex++;
      pointer = pointer.nextNode;
      forwardPointer = forwardPointer.nextNode;
    }

    return `The index ${index} is bigger then the list size ${currentIndex}`;
  }

  removeAt(index) {
    let pointer = this.head;
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    if (index === 1) {
      this.head.nextNode = this.head.nextNode.nextNode;
      return;
    }
    let forwardPointer = this.head.nextNode;
    let currentIndex = 1;
    while (forwardPointer) {
      if (index === currentIndex) {
        pointer.nextNode = pointer.nextNode.nextNode;
        forwardPointer = null;
        return;
      }
      currentIndex++;
      pointer = pointer.nextNode;
      forwardPointer = forwardPointer.nextNode;
    }

    return `The index ${index} is bigger then the list size ${currentIndex}`;
  }
}

export { LinkedList, Node };
