class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return; // Vertex not found in the graph.
    }
    this.adjacencyList.delete(vertex);
    for (let neighbors of this.adjacencyList.values()) {
      const index = neighbors.indexOf(vertex);
      if (index !== -1) {
        neighbors.splice(index, 1);
      }
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    const neighbors1 = this.adjacencyList.get(vertex1);
    const neighbors2 = this.adjacencyList.get(vertex2);

    const index1 = neighbors1.indexOf(vertex2);
    if (index1 !== -1) {
      neighbors1.splice(index1, 1);
    }

    const index2 = neighbors2.indexOf(vertex1);
    if (index2 !== -1) {
      neighbors2.splice(index2, 1);
    }
  }

  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }

  getEdges() {
    const edges = [];
    for (const [vertex1, neighbors] of this.adjacencyList.entries()) {
      for (const vertex2 of neighbors) {
        if (vertex1 < vertex2) {
          edges.push([vertex1, vertex2]);
        }
      }
    }
    return edges;
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  isAdjacent(vertex1, vertex2) {
    const neighbors = this.adjacencyList.get(vertex1);
    return neighbors !== undefined && neighbors.includes(vertex2);
  }

  getVertexCount() {
    return this.adjacencyList.size;
  }

  getEdgeCount() {
    let count = 0;
    for (const neighbors of this.adjacencyList.values()) {
      count += neighbors.length;
    }
    return count / 2; // Divided by 2 because each edge is counted twice.
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);

console.log('Vertices: ' + graph.getVertices().join(' '));
console.log(
  'Edges: ' +
    graph
      .getEdges()
      .map((edge) => `(${edge[0]}, ${edge[1]})`)
      .join(' ')
);
console.log('Neighbors of vertex 1: ' + graph.getNeighbors(1).join(' '));
console.log('Is vertex 1 adjacent to vertex 2? ' + graph.isAdjacent(1, 2));

graph.removeEdge(1, 2);
graph.removeVertex(3);

console.log('After removing some edges and vertices:');
console.log('Vertices: ' + graph.getVertices().join(' '));
console.log(
  'Edges: ' +
    graph
      .getEdges()
      .map((edge) => `(${edge[0]}, ${edge[1]})`)
      .join(' ')
);
