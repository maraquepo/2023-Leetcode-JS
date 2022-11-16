let twoSum = (nums, target) => {
  // create a map
  let map = new Map()

  // iterate over array of numbers
  for (let i = 0; i < nums.length; i++) {
    // complement is other pair to current iterated number
    let complement = target - nums[i];

    // if complement exists within the map, return key (complement's index) value (and current index) pair
    if (map.has(complement)) {
      return [map.get(complement), i]
    }

    // if complement does not exist, add current number and its index to the map
    map.set(nums[i], i)
  }
}

let twoSumBrute = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

let twoSumTwoPass = (nums, target) => {
  const hash = {};

  nums.forEach((item, index) => {
    hash[item] = index
  });

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hash[complement] && hash[complement] !== i) {
      return [i, hash[complement]]
    }
  }
}