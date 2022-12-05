let isAnagram = (s, t) => {

  const hash = {}

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
  }

  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) hash[t[i]]--;
    else return false
  }

  return true
}

/*
s = 'ana' t = 'anaa'

hash = { a:2, n: 1}

{a: 1, n : 1}
{ a: 1 }
{ }
if (hash[a])