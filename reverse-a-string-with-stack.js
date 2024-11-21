class Solution {
  static reverseString(s) {
    const stack = [...s];
    let reversed = '';
    while (stack.length) {
      reversed += stack.pop();
    }

    return reversed;
  }
}

console.log(Solution.reverseString('Hello, World!'));
