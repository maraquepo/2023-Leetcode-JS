let maxProduct = (nums) => {
  let max = 1
  for (let i = 0; i < nums.length; i++) {
      let current = 1
      for (let j = i; j < nums.length; j++) {
          current *= nums[j]
          max = Math.max(max, current)
      }
  }
  return max;
}

let maxProduct2 = (nums) => {
  let prevMax = nums[0]
  let prevMin = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
    prevMax = Math.max(...options);
    prevMin = Math.min(...options);

    max = Math.max(max, prevMax)
  }

  return max;
}

[2, 3, -2, 4, -3]

prevMax, prevMin, max = 2

i = 1
options = [3, 6, 6]
prevMax = 6
prevMin = 3

max = 3

i = 2
options = [-2, -12, -6]
prevMax = -2
prevMin = -12

max = 3

i = 3
options = [4, -8, -24]
prevMax = 4
prevMin = -24

i = 4
options = [-3, -12, 72]
prevMax = 72
prevMin = -12
max = 72