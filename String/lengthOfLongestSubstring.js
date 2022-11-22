let lengthOfLongestSubstring = (s) => {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left])
      left++;
    }

    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1)
  }
  return maxSize;
}

/*
pwwkek

left = 0
maxSize = 0

i = 0
set = {'p'}
maxSize = 0 - 0 + 1
maxSize = 1

i = 1
set = {'p', 'w'}
maxSize = 1 - 0 + 1
maxSize = 2

i = 2
set = {'w'}
left = 1

set = {}
left = 2

set = {'w'}

i = 3
set = {'w','k'}
maxSize = 3 - 2 + 1
maxSize = 2

i =4
set = {'k', 'e'}
maxSize = 4 - 2 + 1
maxSize = 3

i = 5
set = {}
