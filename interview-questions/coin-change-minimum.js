const coins = [1, 2, 5];

function makeChange(amount) {
  if (amount === 0) {
    return 0;
  } else {
    let minFound = Infinity;

    // iterate through each coin to try every possibility
    for (let coin of coins) {
      // if using this coin leads to a valid (i.e., non-negative) path
      if (amount - coin >= 0) {
        // recursively call makeChange() on the remaining amount and add 1 for using this coin
        let minForThisPath = makeChange(amount - coin) + 1;

        // after we finish recursing, if this minimum is the lowest found so far, replace minFound
        if (minForThisPath < minFound) {
          minFound = minForThisPath;
        }
      }
    }
    return minFound;
  }
}

console.log(makeChange(11));
