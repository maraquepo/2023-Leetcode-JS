let maxArea = (height) => {
  let result = 0, i = 0, j = height.length - 1
  while (i < j) {
    result = Math.max(result, Math.min(height[i], height[j]) * (j - i))
    if (height[i] <= height[j]) {
      i++
    } else {
      j--
    }
  }
  return result;
}


let maxAreaBrute = (height) => {
  let result = 0
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      let width = right - left;
      result = Math.max(result, Math.min(height[left], height[right]) * width);
    }
  }
}
/*

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
i = 0, j = 8

result = Math.max(result, Math.min(1, 7))
result = Math.max(0,8)
result = 8
i = 1, j = 8

result = Math.max(8, Math.min(8, 7) * 7)
result = Math.max(8, 49)
result = 49

i = 1, j = 7

result = Math.max(49, Math.min(8, 3)* 6)
result = Math.max(49, 18)
result = 49

i = 1, j = 6

result = Math.max(49, Math.min(8,8) * 5)
result = Math.max(49, 40)
result = 49

i = 2, j =6
result = Math.max(49, Math.min(6,8) *4)
result = Math.max(49, 24)
result = 49

i = 3, j = 6
result = Math.max(49. Math.min(2,8) * 3)
result = Math.max(49, 6)
result = 49

i = 4, j = 6
result = 49 vs Math.min(5,8) *3
result = 49 vs 15
result = 49

i = 5, j = 6
result = 49 vs Mat.min(4,8) * 2
result = 49 vs 8
result = 49

i = 6, j = 6

return result 49

