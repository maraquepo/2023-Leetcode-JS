let productExceptSelf = (nums) => {
  let output = []
  let leftMult = 1;
  let rightMult = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult
    rightMult *= nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult
    leftMult *= nums[j];
  }
  return output;
}

let productExceptSelfBrute = (nums) => {
  let output = []

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      product *= nums[j];
    }
    output[i] = product;
  }
  return output;
}

let productExceptSelf2 = = (nums) => {

  // the length of the input arrray
  let length = nums.length;

  // the left and right arrays
  let leftArray = []
  let rightArray = []

  // final answer array to be returned
  let result = []

  // leftArray[i] contains the product of all the elements to the left
  // For the element at index '0', there are no elements to the left, so L[0] would be 1
  leftArray[0] = 1;

  for (let i = 1; i < length; i++) {
    //L[i-1] already contains the product of elements to the left of 'i-1'
    // multiply it with nums[i - 1] would gibve the product of all elements to the left side of index 'i'
    leftArray = nums[i - 1] * leftArray[i - 1];
  }

  // rightArray[i] contains the product of all the elements to the right
  // For the element at index 'length - 1, there are no elements to the right, so the R[length - 1] would be 1
  rightArray[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    // R[i + 1] already contains the product of elements to the right of 'i + 1'
    // multiply it with nums[i + 1] would give the product of all elements to the right of index 'i'
    rightArray = nums[i + 1] * rightArray[i + 1];
  }

  for (let i = 0; i < length; i++) {
    // for the fir element, R[i] would be product except self
    // for the last element of the array, product except self would be L[i]
    // else, multiple product of all elements to the left and to the right
    result[i] = leftArray[i] * rightArray[i];
  }

  return result;
}

//Instead of dividing the product of all the numbers in the array by the number at a given index to get the corresponding product, we can make use of the product of all the numbers to the left and all the numbers to the right of the index. Multiplying these two individual products would give us the desired result as well.

/*
[1, 2, 3, 4]
[1, 2]

24
24 12 8 6
i = 3
output[3] = 1
rightMult = 4
output[2] = 4
rightMult = 12
output[1] = 12
rightMult = 24
output[0] = 24
[24, 12, 4, 1]

output[0] = 24 * 1
leftMult = 1

output[1] = 12 * 1
leftMult = 2

output[2] = 4 * 2
leftMult = 6

output[3] = 1 * 6
leftMult  = 6