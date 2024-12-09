class Solution {
  static printMinHeap(arr, size) {
    // Function to print the min heap
    let output = 'Min Heap: ';
    for (let index = 0; index < size; index++) {
      output += arr[index] + ' ';
    }
    console.log(output.trim());
  }

  static heapifyUp(arr, index) {
    // Function to heapify upwards in the min heap
    const parentIndex = Math.floor((index - 1) / 2);
    // Continue to swap the current node with its parent while the heap property is violated
    if (index > 0 && arr[index] < arr[parentIndex]) {
      // Swap the current node with its parent
      [arr[index], arr[parentIndex]] = [arr[parentIndex], arr[index]];
      // Recursively heapify the parent
      Solution.heapifyUp(arr, parentIndex);
    }
  }

  static insertMinHeap(arr, value, size) {
    // Insert the new value at the end of the heap
    arr[size] = value;
    // Heapify upwards starting from the last element
    Solution.heapifyUp(arr, size);
  }
}

// Test the solution
let minHeap = new Array(100).fill(0); // Assuming max heap size is 100
let size = 0; // Current size of the heap

// Test case 1
Solution.insertMinHeap(minHeap, 5, size);
size++; // Increment the size after insertion
Solution.printMinHeap(minHeap, size);

// Test case 2
Solution.insertMinHeap(minHeap, 2, size);
size++; // Increment the size after insertion
Solution.printMinHeap(minHeap, size);

// Test case 3
Solution.insertMinHeap(minHeap, 8, size);
size++; // Increment the size after insertion
Solution.printMinHeap(minHeap, size);
