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

set = {}

left = 0
maxSize = 0

set = { p , }
maxSize = 1

i = 1
set = { p }
left = 0
maxSize = 1
set = { p, w }
maxSizs = 2

i = 2
set delete { p }
left = 1

set delete { w }
left = 2

set add { w }
maxSize = 2 vs 2 - 2 + 1
maxSize = 2

i = 3
set add k => { w, k }
3 - 2 + 1 = 2
maxSize = 2

i = 4
set add e => { w, k, e }
4 - 2 + 1 = 3
maxSize = 3

i = 5
setDelete w => { k, e}
left = 3

setDelete k => { e }
left = 4

set Add k { e , k}
maxSize = (3, 5 - 4 + 1 = 2)


*/