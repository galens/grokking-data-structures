// stack as array
class Stack {
  // Constructor to initialize the stack with a specified size.
  constructor(size) {
    // Create a new array to represent the stack with the given size.
    this.stack = new Array(size);
    // Initialize the top pointer to -1, indicating an empty stack.
    this.top = -1;
  }

  // Method to add an element to the top of the stack.
  push(data) {
    // Check if the stack is already full.
    if (this.top === this.stack.length - 1) {
      throw new Error('Stack is full');
    }
    // Increment the top pointer and add the data to the stack.
    this.stack[++this.top] = data;
  }

  // Method to remove and return the element from the top of the stack.
  pop() {
    // Check if the stack is empty.
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    // Retrieve the data from the top of the stack.
    let data = this.stack[this.top];
    // Clear the top element by setting it to null, and decrement the top pointer.
    this.stack[this.top--] = null;
    // Return the removed data.
    return data;
  }

  // Method to peek at the element on the top of the stack without removing it.
  peek() {
    // Check if the stack is empty.
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    // Return the element at the top of the stack.
    return this.stack[this.top];
  }

  // Method to check if the stack is empty.
  isEmpty() {
    // The stack is empty if the top pointer is -1.
    return this.top === -1;
  }
}

// stack as linked list
class Node {
  constructor(data) {
    this.data = data; // Store the data in this node
    this.next = null; // Initialize the next node as null
  }
}

class Stack {
  constructor() {
    this.top = null; // Initialize the top of the stack as null
  }

  pop() {
    if (this.top === null) {
      throw new Error('Stack is empty'); // Throw an error if the stack is empty
    }
    const item = this.top.data; // Store the top item's data
    this.top = this.top.next; // Update the top to be the next node
    return item; // Return the popped item
  }

  push(item) {
    const node = new Node(item); // Create a new node with the provided data
    node.next = this.top; // Set the next of this new node to be the current top
    this.top = node; // Update the top to be the new node
  }

  peek() {
    if (this.top === null) {
      throw new Error('Stack is empty'); // Throw an error if the stack is empty
    }
    return this.top.data; // Return the top item's data
  }

  isEmpty() {
    return this.top === null; // Return true if the stack is empty, false otherwise
  }
}
