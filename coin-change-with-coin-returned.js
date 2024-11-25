function makeChange(amount, coins) {
  let answer = {};
  let found = false;
  function helper(amount, reps) {
    if (found) {
      return;
    }
    for (let coin of coins) {
      const reduced = amount - coin;

      if (reduced === 0) {
        answer[coin] = reps;
        found = true;
      }

      if (reduced > 0 && !found) {
        helper(reduced, reps + 1);
      }

      if (found) {
        break;
      }
    }
  }
  helper(amount, 1);

  if (Object.keys(answer).length === 0) {
    return 'an error occurred';
  }
  return answer;
}

console.log(makeChange(6, [5, 7]));

/*
function makeChange(amount, coins) {
  const answers = [];
  const originalAmount = amount;
  function change(amount, currentConfiguration) {
    console.log('current configuration is: ', currentConfiguration);
    if (amount === 0) {
      console.log('amount is 0');
      answers.push(currentConfiguration);
      console.log('answers is currently: ', answers);
      return 0;
    }
    for (let coin of coins) {
      console.log('current coin is: ', coin);
      console.log('current amount is: ', amount);
      if (amount - coin >= 0) {
        if (currentConfiguration.hasOwnProperty(coin)) {
          currentConfiguration[coin] = currentConfiguration[coin] + 1;
        } else {
          currentConfiguration[coin] = 1;
        }
        let retValue = change(amount - coin, currentConfiguration);
        if (retValue === 0) {
          break;
        }
      }
      console.log('done with recursion, resetting amount');
      amount = originalAmount; // reset amount
      currentConfiguration = {};
    }
  }
  let finalChange = change(amount, {});
  console.log('answers: ', answers);
  console.log('finalChange: ', finalChange);
  if (finalChange === 0) {
    return answers;
  } else {
    return 'an error occurred';
  }
}
*/
