const countSubstrings = (s) => {
  let results = []

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substring = s.substring(i, j)

      if (isPalindrome(substring)) {
        results.push(substring)
      }
    }
  }
  return results.length
}

const isPalindrome = (s) => {
  let cleaned = s.toLowerCase().replace(/[^a-z]/g, '')
  let reversed = cleaned.split('').reverse('').join('')
  return cleaned === reversed
}
// --------------------------

const countSubstrings2 = (s) => {
  // initialize count at 0
  let count = 0

  // iterate through each character in the substring
  for (let i = 0; i < s.length; i++) {

    // check for odd-length palindromes centered at current character (i)
    let left = i, right = i
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++
      left--;
      right++;
    }

    // check for even length palindromes centered at current character (i)
    left = i, right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  return count;
}

/*
'aabdba'
count = 0
left = 0, right = 0
i = 0

count = 1
left = -1, right = 1

left = 0, right = 1
aa
count = 2
left = - 1, right = 1

count = 3
for b

i = 3 (d center)
left = 3, right = 3
count = 4

left = 2, right = 5
count = 5

left = 1, right = 6
count = 6

*/