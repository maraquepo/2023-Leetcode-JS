/**
* @param {number[]} nums
* @return {number}
*/


const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    // if we're at a higher number in a consecutive set, skip that number in the for loop
    if (set.has(num - 1)) continue;

    let currentNum = num;
    let currentMax = 1

    // increments currentNum and currentMax if consecutive number exists in the set
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentMax++
    }

    // tracks max if there are multiple consecutive numbers
    max = Math.max(max, currentMax)
  }

  return max;
};