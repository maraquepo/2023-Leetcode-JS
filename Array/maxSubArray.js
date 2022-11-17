let maxSubArray = (nums) => {
  let maxSum = nums[0]
  let currentSum = maxSum;
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum;
}

let maxSubArrayBrute = (nums) => {
  let maxSum = Number.MAX_VALUE
  let currentSum = maxSum
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]
      maxSum = Math.max(maxSum, currentSum)
    }
  }
  return maxSum
}
[-2, 1, -3, 4, -1]

