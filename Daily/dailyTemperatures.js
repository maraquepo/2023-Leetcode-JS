/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

const dailyTemperatures = (temperatures) => {
  if (temperatures.length === 1) return 0;

  // iterate over temperatures
  for (let i = 0; i < temperatures.length; i++) {
    // keep tracker of days between current and warmest
    // if no warmer day is found, it will default to 0
    let days = 0;
    // iterate over following days
    for (let j = 1 + i; j < temperatures.length; j++) {
      // if next days is greater than current
      if (temperatures[i] < temperatures[j]) {
        // days is difference between the two days
        days = j - i;
        // break out of loop
        break;
      }
    }
    // change temperatures array in place
    temperatures[i] = days;
  }
  return temperatures;
};
