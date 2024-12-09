class Solution {
  connectSticks(sticks) {
    let cost = 0;
    const minHeap = sticks.sort((a, b) => a - b);
    console.log('minHeap: ', minHeap);

    while (minHeap.length > 1) {
      const first = minHeap.shift();
      const second = minHeap.shift();

      const combined = first + second;
      cost += combined;

      this.addToSortedArray(minHeap, combined);
    }
    return cost;
  }

  // Utility function to add an item to the sorted array
  addToSortedArray(array, item) {
    let i = 0;
    while (i < array.length && array[i] < item) {
      i++;
    }
    array.splice(i, 0, item);
  }
}

const sol = new Solution();

console.log(sol.connectSticks([1, 2, 3, 4])); // Expected: 19
console.log(sol.connectSticks([3, 4, 5])); // Expected: 19
console.log(sol.connectSticks([5, 2, 9, 12])); // Expected: 51

// time complexity: (O(n log n))
// space complexity: (O(n))
