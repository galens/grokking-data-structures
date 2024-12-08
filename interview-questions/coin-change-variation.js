const findChange = (coins, target) => {
  const answer = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const sum = coins[i] + coins[j];
      if (sum === target && i !== j) {
        answer.push(i);
        answer.push(j);
        return answer;
      }
    }
  }
};

console.log(findChange([2, 7, 11, 15], 9));
