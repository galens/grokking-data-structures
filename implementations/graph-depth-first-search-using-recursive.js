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

  // Method to perform DFS using recursion
  DFS(startVertex) {
    const visited = new Array(this.vertices).fill(false); // Track visited nodes
    process.stdout.write('DFS Traversal: ');
    this.DFSRecursive(startVertex, visited); // Start DFS from the given vertex
  }

  DFSRecursive(currentVertex, visited) {
    visited[currentVertex] = true; // Mark the current node as visited
    process.stdout.write(currentVertex + ' '); // Process the current node

    // Recur for all unvisited neighbors
    for (const neighbor of this.adjacencyList[currentVertex]) {
      if (!visited[neighbor]) {
        this.DFSRecursive(neighbor, visited);
      }
    }
  }
}

class Solution {
  static main() {
    const g = new Graph(5);

    g.addEdge(0, 3);
    g.addEdge(0, 2);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 4);

    process.stdout.write('DFS Traversal starting from vertex 0: ');
    g.DFS(0);
  }
}

Solution.main();

// time complexity: O(V + E)
// space complexity: O(V)
