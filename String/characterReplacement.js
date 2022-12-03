let characterReplacement = (s, k) => {
  let left = 0;
  let maxLength = 0
  let maxCount = 0

  // hash map
  const frequency = {}

  for (let i = 0; i < s.length; i++) {
    if (!frequency[s.charAt(i)]) {
      frequency[s.charAt(i)] = 1
    } else {
      frequency[s.charAt(i)]++
      maxCount = Math.max(maxCount, frequency[s.charAt(i)])

      let currentLength = i - left + 1
      while (currentLength - maxCount > k) {
        frequency[s.charAt(left)]--;
        left++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}

/*
s = "AABABBA", k = 1

frequency[A]++
{ A : 2 }
maxCount = (0, 2) => 2
while (1 - 0 - 2 + 1 > 1)
while (0 > 1)
false
maxLength = Math.max(0, 1 - 0 + 1) => 2

i = 3, s(3) = A
{ A : 3, B : 1}
maxCount = (2, 3) => 3

while (3 - 0 - 3 + 1 > k)
while (1 > 1) false

maxLength = (2, 3 - 0  + 1) = 4

i = 4, s(4) = B
{ A : 3, B : 2 }
maxCount = 3

while (4 - 0 - 3 + 1 > 1)
  frequency[A] --;
  { A: 2, B : 2}
  left = 1

maxLength = 4 - 1 +1 = 4


'AABAB'
currentLength =  5
maxCount = 3
k = 1


"AABABBA"

maxLength = 5
maxCount = 3
5-3 > 1

ABAB
*/