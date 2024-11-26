class Solution {
  static decimalToBinary(num) {
    const stack = [];
    while (num > 0) {
      stack.push(num % 2);
      num = Math.floor(num / 2);
    }

    return stack.reverse().join('');
  }
}

console.log(Solution.decimalToBinary(2));

// time complexity O(log2(num))
// space complexity O(log2(num))
