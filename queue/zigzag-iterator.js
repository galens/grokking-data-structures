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
  constructor(v1, v2) {
    this.queue = new Queue(); // Initialize a custom queue.

    // If v1 is not empty, add it to the queue with an initial index of 0.
    if (v1.length !== 0) this.queue.enqueue([v1, 0]);
    // If v2 is not empty, add it to the queue with an initial index of 0.
    if (v2.length !== 0) this.queue.enqueue([v2, 0]);
  }

  next() {
    // Dequeue the first element from the queue and extract the array and its current index.
    let [arr, index] = this.queue.dequeue();
    // Get the value at the current index in the array.
    let value = arr[index];

    // If there are more elements in the array, put it back in the queue with an updated index.
    if (index < arr.length - 1) {
      this.queue.enqueue([arr, index + 1]);
    }

    return value;
  }

  hasNext() {
    // Check if there are more elements to process in the queue.
    return !this.queue.isEmpty();
  }
}

function main() {
  // Create an instance of the Solution class with two input arrays.
  let i = new Solution([1, 2], [3, 4, 5, 6]);
  console.log(i.next()); // returns 1
  console.log(i.next()); // returns 3
  console.log(i.next()); // returns 2
  console.log(i.next()); // returns 4
  console.log(i.next()); // returns 5
  console.log(i.next()); // returns 6
  console.log(i.hasNext()); // returns False
}

main();

// time complexity Solution O(1)
// time complexity next O(1)
// time complexity hasNext O(1)

// space complexity queue storage O(L)
// space complexity iterator storage O(1)
