class Solution {
  static largestAltitude(gain) {
    let currentAltitude = 0; // To store the current altitude during iteration
    let maxAltitude = 0; // To store the maximum altitude encountered

    // Iterate through the gain array, updating the current and max altitudes
    for (let i of gain) {
      currentAltitude += i;
      maxAltitude = Math.max(currentAltitude, maxAltitude);
    }

    return maxAltitude;
  }
}

console.log(Solution.largestAltitude([-2, 3, -1, -5, 2, 6]));
