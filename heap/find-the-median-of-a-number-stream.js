class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.items = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.items.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.items.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.items[this.getParentIndex(index)];
  }

  length() {
    return this.items.length;
  }

  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  peek() {
    return this.items[0];
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown();
    return item;
  }

  push(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.items[index] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown(index);
    return true;
  }

  heapifyUp(index) {
    let currentIndex = index || this.items.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.compareFn(this.items[currentIndex], this.parent(currentIndex)) < 0
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    // Start at the index passed in or the root if not provided
    let currentIndex = index || 0;
    // While the current index has a left child
    while (this.hasLeftChild(currentIndex)) {
      // Find the smaller child index between the left and right children
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.compareFn(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        ) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      // If the current item is smaller than the smaller child, we're done
      if (
        this.compareFn(
          this.items[currentIndex],
          this.items[smallerChildIndex]
        ) < 0
      ) {
        break;
      }
      // Otherwise, swap the current item with the smaller child and continue
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}

class Solution {
  constructor() {
    this.maxHeap = new Heap((a, b) => b - a); // containing first half
    this.minHeap = new Heap((a, b) => a - b); // containing second half
  }

  insertNum(num) {
    if (this.maxHeap.length() === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length() > this.minHeap.length() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length() < this.minHeap.length()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.length() === this.minHeap.length()) {
      // we have even number of elements, take the average of middle two elements
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }

    // because max-heap will have one more element than the min-heap
    return this.maxHeap.peek() / 1.0;
  }
}

const sol = new Solution();
sol.insertNum(3);
sol.insertNum(1);
console.log(`The median is: ${sol.findMedian()}`);
sol.insertNum(5);
console.log(`The median is: ${sol.findMedian()}`);
sol.insertNum(4);
console.log(`The median is: ${sol.findMedian()}`);

// time complexity: O(logN)
// space complexity: O(N)
