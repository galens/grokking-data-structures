class Solution {
  static maximumWealth(accounts) {
    let maxWealth = 0; // Initialize maxWealth to 0
    for (let customerAccount of accounts) {
      const wealth = customerAccount.reduce((a, b) => a + b, 0);
      if (wealth > maxWealth) {
        maxWealth = wealth;
      }
    }
    return maxWealth;
  }
}

console.log(
  Solution.maximumWealth([
    [5, 2, 3],
    [0, 6, 7],
  ])
);

// time complexity O(M X N)
// space complexity O(1)
