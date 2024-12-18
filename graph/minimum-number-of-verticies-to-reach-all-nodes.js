class Solution {
  findSmallestSetOfVertices(n, edges) {
    const nodesWithIncoming = new Set();

    // Identify nodes with incoming edges
    for (let edge of edges) {
      nodesWithIncoming.add(edge[1]);
    }

    const result = [];
    // Find nodes without incoming edges
    for (let i = 0; i < n; i++) {
      if (!nodesWithIncoming.has(i)) {
        result.push(i);
      }
    }

    return result;
  }
}

// Testing
const solution = new Solution();

let edges1 = [
  [0, 1],
  [0, 2],
  [2, 5],
  [3, 4],
  [4, 2],
];
console.log(solution.findSmallestSetOfVertices(6, edges1)); // Expected: [0, 3]

let edges2 = [
  [0, 1],
  [3, 1],
  [1, 2],
];
console.log(solution.findSmallestSetOfVertices(4, edges2)); // Expected: [0, 3]

let edges3 = [
  [2, 0],
  [3, 2],
];
console.log(solution.findSmallestSetOfVertices(4, edges3)); // Expected: [1, 3]

// time complexity:  O(E) + O(V)
// space complexity:  O(V) + O(E)
