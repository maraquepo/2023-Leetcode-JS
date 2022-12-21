/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {

  const frequencyMap = nums.reduce((map, num) => {
    // current value if it exists + 1 or 0 if it doesn't exist + 1
    map[num] = (map[num] || 0) + 1;
    return map
  }, {});

  // convert the frequency map to an array of [num, frequency] pairs
  const frequencyArray = Object.entries(frequencyMap);

  // sort the array in descending order by frequency
  frequencyArray.sort((a - b) => b[1] - a[1]);

  // slices first k arrays and returns an array of the num
  return frequencyArray.slice(0,k).map(pair => pair[0]);
}
