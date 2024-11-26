class Queue {
  constructor(queue = []) {
    this.items = [...queue];
    this.frontIndex = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const element = this.items[this.frontIndex];
    this.frontIndex++;

    return element;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex >= this.items.length;
  }

  length() {
    return this.items.length - this.frontIndex;
  }
}

class Solution {
  // Method to reverse the order of elements in the queue.
  reverseQueue(queue) {
    let stack = []; // Create an empty stack using an array.

    // Transfer all elements from the queue to the stack.
    while (!queue.isEmpty()) {
      stack.push(queue.dequeue()); // Dequeue from queue and push onto stack.
    }

    // Transfer all elements back from the stack to the queue.
    while (stack.length !== 0) {
      queue.enqueue(stack.pop()); // Pop from stack and enqueue back to the queue.
    }
    return queue;
  }
}

// Create an instance of the Queue class.
let queue = new Queue();
// Add some elements to the queue.
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

// Create an instance of the Solution class.
let solution = new Solution();

// Call the method to reverse the order of elements in the queue.
solution.reverseQueue(queue);

// Log the reversed queue to the console.
while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}

// time complexity O(N)
// space complexity O(N)
