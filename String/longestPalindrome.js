let longestPalindrome = (s) => {
  // initialize longest palindrome at first character of string
  let longest = s[0]
  // iterate over string, left pointer
  for (let i = 0; i < s.length; i++) {
    // iterate over next char, right pointer
    for (let j = i + 1; j <= s.length; j++) {
      // substring is characters starting at i and ending at j
      let substring = s.substring(i, j)

      // if substring is a palindrome and substring string length is greater than longest string length
      if (isPalindrome(substring) && substring.length > longest.length) {
        // then longest
        longest = substring;
      }
    }
  }
  return longest
}

let isPalindrome = (s) => {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  let reversed = cleaned.split('').reverse().join('')
  return cleaned === reversed
}

/*
length = 7
'cbbdbba'

i = 0
j = 1 to s.length + 1

i = 1
j = 2 to s.length + 1

longest = bb
bbdbb
longest = bbdbb

i = 2
j = 3 to s.length + 1
...
i = 4
j = 6 to s.length + 1
bba

longest = bbdbb
*/