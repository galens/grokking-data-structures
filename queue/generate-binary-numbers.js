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
  generateBinaryNumbers(n) {
    let queue = new Queue(); // Initialize a custom queue.
    queue.enqueue('1'); // Enqueue the first binary number "1".
    let res = []; // Initialize an empty array to store the generated binary numbers.

    while (n--) {
      // Repeat n times to generate binary numbers.
      let s1 = queue.dequeue(); // Dequeue the first binary number in the queue.
      res.push(s1); // Add the dequeued binary number to the result array.

      let s2 = s1; // Copy the dequeued binary number.
      queue.enqueue(s1 + '0'); // Enqueue the first generated binary number by adding "0".
      queue.enqueue(s2 + '1'); // Enqueue the second generated binary number by adding "1".
    }

    return res; // Return the array of generated binary numbers.
  }
}

let sol = new Solution();
// Testing
console.log(sol.generateBinaryNumbers(2)); // Test with n = 2
console.log(sol.generateBinaryNumbers(3)); // Test with n = 3
console.log(sol.generateBinaryNumbers(5)); // Test with n = 5
