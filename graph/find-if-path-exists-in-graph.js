class Solution {
  constructor() {
    this.visited = []; // To keep track of visited nodes
  }

  validPath(n, edges, start, end) {
    const graph = [];

    // Initialize the graph
    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }

    // Initialize the graph
    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }

    // Populate the graph from edges
    for (const edge of edges) {
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]); // Because it's an undirected graph
    }

    this.visited = Array(n).fill(false);
    return this.dfs(graph, start, end);
  }

  dfs(graph, node, end) {
    if (node === end) return true; // Found the path
    this.visited[node] = true;

    // Traverse neighbors
    for (const neighbor of graph[node]) {
      if (!this.visited[neighbor] && this.dfs(graph, neighbor, end)) {
        return true;
      }
    }
    return false; // Path not found
  }
}

const sol = new Solution();
console.log(
  sol.validPath(
    4,
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    0,
    3
  )
); // true
console.log(
  sol.validPath(
    4,
    [
      [0, 1],
      [2, 3],
    ],
    0,
    3
  )
); // false
console.log(
  sol.validPath(
    5,
    [
      [0, 1],
      [3, 4],
    ],
    0,
    4
  )
); // false
