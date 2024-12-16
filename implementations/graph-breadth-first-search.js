class Graph {
  constructor(vertices) {
    this.V = vertices; // Number of vertices
    this.adjList = new Array(vertices).fill(null).map(() => []);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u); // For undirected graph
  }

  BFS(startVertex) {
    const visited = new Array(this.V).fill(false); // To keep track of visited vertices
    const queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      process.stdout.write(currentVertex + ' ');

      // Explore adjacent vertices
      for (const neighbor of this.adjList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

function main() {
  const graph = new Graph(5); // Create a graph with 6 vertices

  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 3);
  graph.addEdge(1, 2);
  graph.addEdge(2, 4);

  process.stdout.write('Breadth-First Traversal starting from vertex 0:\n');
  graph.BFS(0);
}

main();

// time complexity O(V + E)
// space complexity: O(V)
