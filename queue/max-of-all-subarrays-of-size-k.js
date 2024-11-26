class Deque {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  // Add an element to the rear of the deque
  addRear(element) {
    this.items[this.rear++] = element;
  }

  // Remove and return the element from the front of the deque
  removeFront() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this.items[this.front++];
  }

  // Remove and return the element from the rear of the deque
  removeRear() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this.items[--this.rear];
  }

  // Get the front element of the deque without removing it
  getFront() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this.items[this.front];
  }

  // Get the rear element of the deque without removing it
  getRear() {
    if (this.isEmpty()) {
      throw new Error('Deque is empty');
    }
    return this.items[this.rear - 1];
  }

  // Check if the deque is empty
  isEmpty() {
    return this.front === this.rear;
  }

  // Get the size of the deque
  size() {
    return this.rear - this.front;
  }

  // Clear the deque
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
}

class Solution {
  // Define a function named printMax that takes an array 'arr' and an integer 'k'.
  printMax(arr, k) {
    let deque = new Deque(); // Create an instance of the Deque class.
    let result = []; // Create an empty array to store the result.
    let n = arr.length; // Get the length of the input array.

    // Loop through each element in the input array.
    for (let i = 0; i < n; i++) {
      // While the deque is not empty and the current element is greater than or equal to the element at the end of the deque, remove elements from the rear of the deque.
      while (!deque.isEmpty() && arr[i] >= arr[deque.getRear()]) {
        deque.removeRear();
      }

      // Add the current element's index to the rear of the deque.
      deque.addRear(i);

      // If the index at the front of the deque is less than the current index minus 'k' plus 1, remove it from the front.
      if (deque.getFront() < i - k + 1) {
        deque.removeFront();
      }

      // If the current index is greater than or equal to 'k' minus 1, add the maximum element in the current window to the 'result' array.
      if (i >= k - 1) {
        result.push(arr[deque.getFront()]);
      }
    }

    return result; // Return the 'result' array containing the maximum elements in each subarray of size 'k'.
  }
}

// Create an instance of the Solution class.
let solution = new Solution();

// Define the input array and 'k' value.
let arr = [12, 1, 78, 90, 57];
let k = 3;

// Call the 'printMax' method and store the result.
let result = solution.printMax(arr, k);

// Print the result.
console.log(result);

// time complexity single pass through array O(N)
// time complexity dequeue operations O(N)

// space complexity deqeue space O(k)
// space complexity result list O(N)
