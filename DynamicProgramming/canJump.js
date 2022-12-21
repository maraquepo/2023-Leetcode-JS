/**
 * @param {number[]} nums
 * @return {boolean}
 */

const canJump = (nums) => {
  // set the maximum reachable index to the first index
  let maxReachableIndex = 0;

  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // if the current index is greater than the max reachable index, return false
    if (i > maxReachableIndex) return false
    // update the maximum reachable index to be the greater of the current max reachable index and the current index plus the value at the current index
    maxReachableIndex = Math.max(maxReachableIndex, i + nums[i])
  }
  // if we made it through the loop, we have reached
  return true;
};

const canJump2 = (nums) => {
  const memo = new Map();

  const permute = (index) => {
    if (memo.has(index)) return memo.get(index)
    // means we have reached the last index
    if (index >= nums.length - 1) return true;
    // can't move if  value is 0
    if (nums[index] === 0) return false;

    //
    for (let i = nums[index]; i >= 1; i--) {
      if (permute(index + i)) {
        memo.set(index, true);
        return true;
      }
    }
    memo.set(index, false)
    return false;
  }
  return permute(0)
}

/*
[3,2,1,0,4]

permute(0)
for (let i = 3; i >= 1, i--) {
  if (permute(3 + 0))
  permute(3)
  let (i = 0)
}


*/