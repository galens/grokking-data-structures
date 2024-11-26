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

  // Check if the deque is empty
  isEmpty() {
    return this.front === this.rear;
  }

  // Get the size of the deque
  size() {
    return this.rear - this.front;
  }
}

class Solution {
  checkPalindrome(s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let deque = new Deque();

    for (let i = 0; i < s.length; i++) {
      deque.addRear(s[i]);
    }

    // Continue until there is 0 or 1 character left
    while (deque.size() > 1) {
      // Remove and compare characters from both ends
      if (deque.removeFront() !== deque.removeRear()) {
        return false;
      }
    }
    return true;
  }
}

let sol = new Solution();
console.log(sol.checkPalindrome('madam')); // returns: true
console.log(sol.checkPalindrome('openai')); // returns: false
console.log(sol.checkPalindrome('A man a plan a canal Panama')); // returns: true

// time complexity deqeue insertion O(N)
// time complexity deqeue comparison O(N)
// time complexity overall O(N)

// space complexity O(N)
