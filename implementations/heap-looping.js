function insertMinHeap(arr, value) {
  /**
   *
   *
   * @param arr (array): The array representing the min heap.
   * @param value (number): The value to be inserted into the min heap.
   */
  const n = arr.length;
  arr.push(value);

  let index = n;
  while (index > 0 && value < arr[Math.floor((index - 1) / 2)]) {
    arr[index] = arr[Math.floor((index - 1) / 2)];
    index = Math.floor((index - 1) / 2);
  }

  arr[index] = value;
}

function printMinHeap(arr) {
  /**
   * Print the min heap.
   *
   * @param arr (array): The array representing the min heap.
   */
  console.log('Min Heap:', arr.join(' '));
}

const minHeap = [];

// Test case 1
insertMinHeap(minHeap, 5);
printMinHeap(minHeap);

// Test case 2
insertMinHeap(minHeap, 2);
printMinHeap(minHeap);

// Test case 3
insertMinHeap(minHeap, 8);
printMinHeap(minHeap);
