class Solution {
  static diagonalSum(mat) {
    let n = mat.length; // get size of total length
    let totalSum = 0; // initiazlie the total

    for (let i = 0; i < n; i++) {
      totalSum += mat[i][i] + mat[i][n - i - 1];
    }

    // if n is odd subtract the central element
    if (n % 2 !== 0) {
      totalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return totalSum;
  }
}

console.log(
  Solution.diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
