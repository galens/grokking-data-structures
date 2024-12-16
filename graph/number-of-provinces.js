class Solution {
  findProvinces(isConnected) {
    const dfs = (city) => {
      for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[city][i] === 1 && !visited[i]) {
          visited[i] = true;
          dfs(i);
        }
      }
    };

    const visited = new Array(isConnected.length).fill(false);
    let provinces = 0;

    for (let city = 0; city < isConnected.length; city++) {
      if (!visited[city]) {
        dfs(city);
        provinces++;
      }
    }

    return provinces;
  }
}

// Main method for testing
const solution = new Solution();

// Example 1
const example1 = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
console.log(solution.findProvinces(example1)); // Expected Output: 2

// Example 2
const example2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(solution.findProvinces(example2)); // Expected Output: 3

// Example 3
const example3 = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
];
console.log(solution.findProvinces(example3)); // Expected Output: 2

// time complexity: O(n2)
// space complexity: O(n)

/* // alternate solution

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union_set(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        // If they are in the same set, do nothing.
        if (rootX === rootY) return;

        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
    }
}

class Solution {
    findProvinces(isConnected) {
        const n = isConnected.length;
        const uf = new UnionFind(n);
        let numberOfProvinces = n;

        // Iterate over each pair of nodes and union the sets if there is a connection.
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (isConnected[i][j] === 1 && uf.find(i) !== uf.find(j)) {
                    numberOfProvinces--;
                    uf.union_set(i, j);
                }
            }
        }

        return numberOfProvinces;
    }
}

// Main method for testing
const solution = new Solution();

// Example 1
const example1 = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
console.log(solution.findProvinces(example1)); // Expected Output: 2

// Example 2
const example2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
console.log(solution.findProvinces(example2)); // Expected Output: 3

// Example 3
const example3 = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]];
console.log(solution.findProvinces(example3)); // Expected Output: 2

*/
