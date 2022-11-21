let findMin = (nums) => {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midpoint = ~~((left + right) / 2);
    if (nums[midpoint] > nums[right]) left = midpoint + 1;
    else right = midpoint
  }
  return nums[left]
}

/*
(a) nums[mid] > nums[right]
For an un-rotated sorted array, we can easily understand that there can never be a case where nums[mid] would ever be greater than nums[right]. However, this condition can happen in a rotated array if the mid pointer is residing on the left side of the rotated array. Once we know that the mid pointer is at the left side of the array, we can start to cut down our search to only the right side since we know that the minimum value can never be in the left side. Hence, we update the left pointer to be mid + 1, indicating that we are now searching the right side.

[3, 4, 5, 6, 7, 1, 2]

(b) nums[mid] <= nums[right]
This condition will tell us that the subarray that we are currently searching is now a properly sorted array which is un-rotated. To get the minimum value of this subarray, we simply have to keep adjusting the right pointer to the left by setting the mid pointer as the right pointer, cutting down our serach to only the left half of this subarray. Eventually, we will reach the left most element of this subarray.
[6, 7, 1, 2, 3, 4, 5]

