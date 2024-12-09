class Solution {
  remainingGifts(gifts, k) {
    // Convert the gifts array into a negative values array and sort in ascending order.
    // This makes the highest values be at the beginning, emulating a max heap.
    const maxHeap = gifts.map((gift) => -gift).sort((a, b) => a - b);
    console.log('maxheap: ', maxHeap);

    for (let i = 0; i < k; i++) {
      // Remove the first element (the highest negative value) from the array,
      // making it positive again to get the original gift count.
      let current = -maxHeap.shift();

      // Push the remaining number of gifts (after taking some) back into the array
      // as a negative value.
      maxHeap.push(-Math.floor(Math.sqrt(current)));

      // Re-sort the array to maintain the heap property.
      maxHeap.sort((a, b) => a - b);
    }

    // Calculate the sum of the remaining gifts. The use of `-` in front of the
    // reduce function inverts the negative values while summing them up.
    return -maxHeap.reduce((a, b) => a + b, 0);
  }
}

// Test cases
const sol = new Solution();
console.log(sol.remainingGifts([4, 9, 16], 2)); // Expected: 11
console.log(sol.remainingGifts([1, 2, 3], 1)); // Expected: 4
console.log(sol.remainingGifts([25, 36, 49], 3)); // Expected: 18

// time complexity:  [O(nlog(n) +klog(n) + n)]
// space complexity: [O(n)]
