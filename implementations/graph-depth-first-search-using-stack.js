class Graph {
  constructor(vertices) {
    this.vertices = vertices; // Number of vertices
    this.adjacencyList = Array.from({ length: vertices }, () => []); // Adjacency list
  }

  // Method to add an edge to the graph
  addEdge(source, destination) {
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source); // For an undirected graph
  }

  // Method to perform DFS using a stack
  DFS(startVertex) {
    const visited = new Array(this.vertices).fill(false); // Track visited nodes
    const stack = []; // Stack for traversal

    stack.push(startVertex); // Start with the given vertex

    while (stack.length > 0) {
      const current = stack.pop(); // Pop a vertex from the stack

      if (!visited[current]) {
        process.stdout.write(current + ' '); // Process the current node
        visited[current] = true; // Mark it as visited
      }

      // Push all unvisited neighbors onto the stack
      for (const neighbor of this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}

class Solution {
  static main() {
    const g = new Graph(5);

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(0, 3);
    g.addEdge(1, 2);
    g.addEdge(2, 4);

    process.stdout.write('DFS Traversal starting from vertex 0: ');
    g.DFS(0);
  }
}

Solution.main();

// time complexity: O(V + E)
// space complexity: O(V)
