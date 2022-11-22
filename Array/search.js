let search = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midpoint = ~~((left + right) / 2)
    if (nums[midpoint] > nums[right]) {
      // midpoint for sure is not the smallest
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  let start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  while (left <= right) {
    let midpoint = ~~((left + right) / 2);
    if (nums[midpoint] == target) {
      return midpoint;
    } else if (nums[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }
}

/*
[3, 4, 5, 1, 2]

left = 0
right = 4
mid = 2

left = 3
right = 4
mid = 3

left = 3 right = 3

start = 3
left = 0
right = 4

target = 4

if (4 >= 1 && 4 <= 1)
right = 3

left = 0, right = 3
mid =
*/