let maxProfit = (prices) => {
  // initialize profit at 0
  let profit = 0;
  // set min to first price
  let min = prices[0];

  // iterate through prices
  for (let i = 1; i < prices.length; i++) {
    // if current price is less than min
    if (min > prices[i]) {
      // new min is the current price
      min = prices[i]
      // else if current price minus the lowest price is greater than profit
    } else if (prices[i] - min > profit) {
      //set new highest profit
      profit = prices[i] - min;
    }
  }
  // return profit
  return profit;
}